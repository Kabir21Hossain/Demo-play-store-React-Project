import { FaGooglePlay } from "react-icons/fa";
import { FaAppStoreIos } from "react-icons/fa";
import banner from '../../assets/images/hero.png';

const Banner = () => {
    return (
        <>
            <div className="w-[80%] mt-5 pt-5 container mx-auto min-h-[80vh] flex flex-col items-center pb-0 mb-0 gap-y-4 ">
                <h2 className="text-5xl font-extrabold text-center ">We Build
                    <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Productive Apps</span>
                </h2>
                <p className='text-center text-sm text-gray-400 w-[60%]'>At HERO.IO , we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

                <div className="flex gap-4">
                    <button className="btn btn-primary btn-shadow  hover:bg-blue-500 cursor-pointer"><FaGooglePlay /> Google Play</button>
                    <button className="btn btn-primary btn-shadow hover:bg-blue-500 cursor-pointer"><FaAppStoreIos />
                        App Store</button>
                </div>

                <div className="w-[80%] mx-auto">

                    <img src={banner} alt="banner" className="w-full max-h-[550px] object-contain" />
                </div>

            </div>
        </>
    )
}

export default Banner;