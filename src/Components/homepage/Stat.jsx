
const Stat = () => {
    return (
        <div className="bg-gradient-to-r from-purple-400 to-blue-400 mx-auto py-10 px-6 md:px-12">
            <h2 className="text-2xl text-white text-center mb-8 font-bold">Trusted by Millions, Built for You</h2>
            <div className="flex flex-col md:flex-row justify-around items-center gap-8 max-w-6xl mx-auto">
                <div className="space-y-2 text-center">
                    <p className="text-sm md:text-md text-purple-100">Total Downloads</p>
                    <h1 className="text-3xl md:text-4xl text-white font-bold">29.6M+</h1>
                    <p className="text-xs md:text-sm text-purple-100">21% more than last month</p>
                </div>
                <div className="space-y-2 text-center">
                    <p className="text-sm md:text-md text-purple-100">Total Reviews</p>
                    <h1 className="text-3xl md:text-4xl text-white font-bold">906K+</h1>
                    <p className="text-xs md:text-sm text-purple-100">46% more than last month</p>
                </div>
                <div className="space-y-2 text-center">
                    <p className="text-sm md:text-md text-purple-100">Active Apps</p>
                    <h1 className="text-3xl md:text-4xl text-white font-bold">50+</h1>
                    <p className="text-xs md:text-sm text-purple-100">31 more will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default Stat;