import GetUnbond from "@/services/assets/unbondingQuery"

const UnbondingAssets = async () => {
    const asd = await GetUnbond();
    console.log(asd);
    return (
        <div>
        </div>
    )
}

export default UnbondingAssets