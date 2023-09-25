import { MsgSignalIntent } from "@hoangdv2429/quicksilverjs/dist/codegen/quicksilver/interchainstaking/v1/messages";
import { coins } from "@cosmjs/amino"
import { SigningStargateClient } from "@cosmjs/stargate";
import { QuickSilverChainInfo } from "@/state/wallet/utils";
import { AminoConverter } from "@hoangdv2429/quicksilverjs/dist/codegen/quicksilver/interchainstaking/v1/messages.amino";
function divideBy100AndRound(number) {
    // Calculate the number of decimal places in the input number  
    // Divide the number by 100
    var numberStr = number.toString()
    var result = (number / 100);

    if (numberStr.includes('.')) {
        var [numberPlaces, decimalPlaces] = numberStr.split('.');
        result = parseFloat(result.toFixed(numberPlaces.length + decimalPlaces.length));
    } else if (numberStr.includes(',')) {
        var [numberPlaces, decimalPlaces] = numberStr.split(',');
        result = parseFloat(result.toFixed(numberPlaces.length + decimalPlaces.length));
    }

    return result;
}
export const signalIntent = async (zone, sender, intents, signer) => {
    try {
        let intentStr = intents.map(item => divideBy100AndRound(item.weight) + item.valoperAddress).join(",")

        const msgSignalIntent = MsgSignalIntent.fromJSON({
            fromAddress: sender,
            chainId: zone.chain_id,
            intents: intentStr,
        })
        const msgAny = {
            typeUrl: "/quicksilver.interchainstaking.v1.MsgSignalIntent",
            value: msgSignalIntent,
        };

        const stargateClient = await SigningStargateClient.connectWithSigner(QuickSilverChainInfo.rpc, signer);
        stargateClient.aminoTypes.register[msgAny.typeUrl] = {
            aminoType: "quicksilver/MsgSignalIntent",
            toAmino: AminoConverter[msgAny.typeUrl].toAmino,
            fromAmino: AminoConverter[msgAny.typeUrl].fromAmino,
        }

        stargateClient.registry.register(msgAny.typeUrl, MsgSignalIntent)
        const broadcastResult = await stargateClient.signAndBroadcast(
            sender,
            [msgAny],
            {
                "gas": "250000",
            },
            "",
        );
        return broadcastResult
    }
    catch (e) {
        throw e
    }
}