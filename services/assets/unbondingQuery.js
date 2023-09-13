import { quicksilver } from "quicksilverjs";

const GetUnbond = async () => {
    const { createRPCQueryClient } = quicksilver.ClientFactory;
    const asd = await createRPCQueryClient({rpcEndpoint: "https://rpc-quicksilver-dtdv8lf9yywnma2y-ie.internalendpoints.notional.ventures:443"});

    const asd1 = quicksilver.interchainstaking.v1.createRpcQueryExtension(asd);
    const ddd = asd1.unbondingRecords()
    const unbonding = await asd.cosmos.staking.v1beta1.delegatorUnbondingDelegations({
        delegatorAddr: "quick16dc379m0qj64g4pr4nkl7ewak52qy2srz7kdkr"
    })
    console.log(unbonding);
    return unbonding;
}

export default GetUnbond;