import { FaGooglePlay, FaAppStoreIos } from "react-icons/fa";
import banner from '../../assets/images/hero.png';

const Banner = () => {
    return (
        <>
            <div className="w-full max-w-4xl mt-5 pt-5 container mx-auto min-h-[60vh] md:min-h-[80vh] flex flex-col items-center pb-0 mb-0 gap-y-6 px-4">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center leading-tight">
                    We Build
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
                        Productive Apps
                    </span>
                </h2>
                <p className='text-center text-sm md:text-base text-gray-400 w-full max-w-2xl leading-relaxed'>
                    At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. Our goal is to turn your ideas into digital experiences that truly make an impact.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
                    <button className="btn btn-primary btn-shadow hover:bg-blue-500 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto px-6">
                        <FaGooglePlay /> Google Play
                    </button>
                    <button className="btn btn-primary btn-shadow hover:bg-blue-500 cursor-pointer flex items-center justify-center gap-2 w-full sm:w-auto px-6">
                        <FaAppStoreIos /> App Store
                    </button>
                </div>

                <div className="w-full max-w-2xl mt-4 px-4">
                    <img src={banner} alt="banner" className="w-full max-h-[400px] md:max-h-[550px] object-contain" />
                </div>
            </div>
        </>
    );
};

export default Banner;