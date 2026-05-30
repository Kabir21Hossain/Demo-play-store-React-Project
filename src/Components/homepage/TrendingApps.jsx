import DisplayApps from '../DisplayApps';
import { HashLoader } from 'react-spinners';
import useHooks from '../../UseHooks';


// const appsPromise = fetch('/data.json').then(res => res.json());

const TrendingAppsContent = () => {
    // const { apps } = use(appsPromise);

    const { apps, loading } = useHooks()
    const data = apps.data
    console.log(data)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.map(app => (
                <DisplayApps key={app.id} app={app} />
            ))}
        </div>
    );
};

const TrendingApps = () => {

    return (
        <div className="bg-slate-50 p-8 md:p-12 border-t border-slate-100">
            <div className="container mx-auto max-w-6xl">
                <h1 className="text-3xl font-extrabold text-slate-800 mb-2 text-center">Trending Apps</h1>
                <p className="text-sm text-slate-500 mb-8 text-center">Discover our handpicked most popular applications this week.</p>
                {/* <Suspense fallback={
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs h-48 animate-pulse flex flex-col justify-between">
                                <div className="flex gap-4">
                                    <div className="w-16 h-16 bg-slate-200 rounded-2xl"></div>
                                    <div className="space-y-2 flex-1 pt-1">
                                        <div className="h-4 bg-slate-200 rounded-sm w-2/3"></div>
                                        <div className="h-3 bg-slate-200 rounded-sm w-1/2"></div>
                                    </div>
                                </div>
                                <div className="h-4 bg-slate-200 rounded-sm w-full mt-4"></div>
                                <div className="flex justify-between items-center mt-4">
                                    <div className="h-6 bg-slate-200 rounded-sm w-16"></div>
                                    <div className="h-8 bg-slate-200 rounded-sm w-20"></div>
                                </div>
                            </div>
                        ))}
                    </div>
                }>
                    <div className='flex justify-center items-center min-h-[100px] mt-20'>
                        {
                            load ? <HashLoader /> : ""
                        }

                    </div>
                    <TrendingAppsContent />
                </Suspense> */}

                <div className='flex justify-center items-center min-h-[100px] mt-20'>
                    {
                        loading ? <HashLoader /> : <TrendingAppsContent />
                    }

                </div>
            </div>
        </div>
    );
};

export default TrendingApps;