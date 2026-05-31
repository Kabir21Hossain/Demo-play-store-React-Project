import DisplayApps from '../DisplayApps';
import { HashLoader } from 'react-spinners';
import useHooks from '../../UseHooks';


const TrendingAppsContent = ({ data }) => {

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.slice(0, 10).map(app => (
                <DisplayApps key={app.id} app={app} />
            ))}
        </div>
    );
};

const TrendingApps = () => {

    const { apps, loading } = useHooks()
    const data = apps.apps


    return (
        <div className="bg-slate-50 p-8 md:p-12 border-t border-slate-100">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-3xl font-extrabold text-slate-800 mb-2 text-center">Trending Apps</h1>
                <p className="text-sm text-slate-500 mb-8 text-center">Discover our handpicked most popular applications this week.</p>


                <div className='flex justify-center items-center min-h-[100px] mt-20'>
                    {
                        loading ? <HashLoader color="#00D1CD" /> : <TrendingAppsContent data={data} />
                    }

                </div>
            </div>
        </div>
    );
};

export default TrendingApps;