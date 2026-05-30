
const Stat = () => {
    return (
        <div className="bg-linear-to-r from-purple-400 to-blue-400 mx-auto min-h-[20vh] p-[40px]">
            <h2 className="text-2xl text-white text-center mb-4 font-bold">Trusted by Millions, Built for You</h2>
            <div className="flex justify-around items-center h-full">
                <div className="space-y-2">
                    <p className="text-md text-gray-300">Total Downloads</p>
                    <h1 className="text-4xl text-white font-bold ">29.6M+</h1>
                    <p className="text-md text-gray-300">21% more than last month</p>
                </div>
                <div>
                    <p className="text-md text-gray-300">Total Reviews</p>
                    <h1 className="text-4xl text-white font-bold">906K+</h1>
                    <p className="text-md text-gray-300">46% more than last month</p>
                </div>

                <div>
                    <p className="text-md text-gray-300">Active Apps</p>
                    <h1 className="text-4xl text-white font-bold">50+</h1>
                    <p className="text-md text-gray-300">31 more will Launch</p>
                </div>
            </div>
        </div>
    )
}
export default Stat;