import { MsgSend } from "@hoangdv2429/quicksilverjs/dist/codegen/cosmos/bank/v1beta1/tx"
import { MsgRequestRedemption } from "@hoangdv2429/quicksilverjs/dist/codegen/quicksilver/interchainstaking/v1/messages";
import { AminoConverter } from "@hoangdv2429/quicksilverjs/dist/codegen/quicksilver/interchainstaking/v1/messages.amino";
import { coin, coins } from "@cosmjs/amino"
let { bech32 } = require('bech32');
import { SigningStargateClient } from "@cosmjs/stargate";

const quickBaseDenom = 'uqck'

export const staking = async (zone, sender, stakingAmount, validatorsSelect, signer) => {
    try {
        let out = ''
        validatorsSelect.map((val) => {
            out = out.concat(addValidator(val.address, val.intent / 100));
        }
        )
        out = Buffer.from(out).toString('base64');

        const amt = stakingAmount * 1000000

        const msgSend = MsgSend.fromJSON({
            fromAddress: sender,
            toAddress: zone.zone.deposit_address.address,
            amount: coins(amt.toFixed(0), zone.zone.base_denom),
        })
        const msgAny = {
            typeUrl: "/cosmos.bank.v1beta1.MsgSend",
            value: msgSend,
        };

        const stargateClient = await SigningStargateClient.connectWithSigner(zone.network.rpc, signer);
        const broadcastResult = await stargateClient.signAndBroadcast(
            sender,
            [msgAny],
            {
                "gas": "200000",
                "amount": coins("2000", zone.zone.base_denom)
            },
            out,
        );
        return broadcastResult
    }
    catch (e) {
        throw e
    }
}

const valToByte = (val) => {
    if (val > 1) { val = 1 }
    if (val < 0) { val = 0 }
    return Math.abs(val * 200)
}

const addValidator = (valAddr, weight) => {
    let addr = bech32?.decode(valAddr)
    let converted = bech32?.fromWords(addr.words);
    converted?.unshift(valToByte(weight));
    return converted;
}

export const unbond = async (rpc, dstAddress, fromAddress, unbondAmount, local_denom, signer) => {
    try {
        const msgRequestRedemption = MsgRequestRedemption.fromJSON({
            destinationAddress: dstAddress,
            fromAddress: fromAddress,
            value: coin((unbondAmount * 1000000).toFixed(0), local_denom),
        })
        const msgAny = {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgRequestRedemption",
            value: msgRequestRedemption,
        };

        const stargateClient = await SigningStargateClient.connectWithSigner(rpc, signer);
        stargateClient.aminoTypes.register[msgAny.typeUrl] = {
            aminoType: "quicksilver/MsgRequestRedemption",
            toAmino: AminoConverter[msgAny.typeUrl].toAmino,
            fromAmino: AminoConverter[msgAny.typeUrl].fromAmino,
        }

        stargateClient.registry.register(msgAny.typeUrl, MsgRequestRedemption)
        const broadcastResult = await stargateClient.signAndBroadcast(
            fromAddress,
            [msgAny],
            {
                "gas": "200000",
                "amount": coins("2000", quickBaseDenom)
            },
        );
        return broadcastResult
    }
    catch (e) {
        throw e
    }
}