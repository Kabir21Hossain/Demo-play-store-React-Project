import Banner from "../../Components/homepage/Banner";
import Stat from "../../Components/homepage/Stat";
import TrendingApps from "../../Components/homepage/TrendingApps";
import { useLoaderData } from "react-router-dom";
const Home = () => {
    const data = useLoaderData();
    const { apps } = data;
    // console.log(data);
    return (
        <div>
            <Banner></Banner>
            <Stat></Stat>
            <TrendingApps apps={apps} number={10}></TrendingApps>
        </div>
    );
};

export default Home;