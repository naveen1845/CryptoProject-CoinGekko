import BannerImg from "../../assets/banner1.jpeg"

function Banner(){
    return(
        <div className="w-100 relative">

            <img src={BannerImg} alt="" className="w-full h-[20rem]"/>

            <div className="absolute top-24 left-32">
                <div className="flex flex-col gap-2">
                    <div className="font-bold text-5xl">CRYPTO TRACKER</div>
                    <div className="text-center">Tracked using the CoinGekko's free API</div>
                </div>
            </div>

        </div>
    )
}

export default Banner