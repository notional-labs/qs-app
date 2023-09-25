import { MsgSend } from "@hoangdv2429/quicksilverjs/dist/codegen/cosmos/bank/v1beta1/tx"
import { coin, coins } from "@cosmjs/amino"
let { bech32 } = require('bech32');
import { SigningStargateClient } from "@cosmjs/stargate";

export const staking = async (zone, sender, stakingAmount, validatorsSelect, signer) => {
    try {
        let out = ''
        validatorsSelect.map((val) => {
            out = out.concat(addValidator(val.address, val.intent / 100));
        }
        )
        out = Buffer.from(out).toString('base64');

        const amt = stakingAmount * 1000000

        console.log(amt.toString(), zone.zone.base_denom, out)

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