import { useContext } from 'react';
import { Pie, PieChart, Tooltip, Legend, ResponsiveContainer, Cell } from 'recharts';
import { installContext } from '../../context';
import useHooks from '../../UseHooks';
import { HashLoader } from 'react-spinners';

const Dashboard = () => {
    const { installApps } = useContext(installContext);
    const { apps, loading } = useHooks();

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[60vh]'>
                <HashLoader color='#00D1CD' />
            </div>
        );
    }

    const allAppsArray = apps.apps || [];
    const installedCount = installApps.length;
    const unInstalledCount = allAppsArray.length - installedCount;
    const data = [
        { name: 'Installed', value: installedCount },
        { name: 'Uninstalled', value: unInstalledCount },
    ];

    const COLORS = ['#8B5CF6', '#3B82F6']; // Purple and Blue

    return (
        <div className="container mx-auto px-4 my-10 max-w-4xl">
            <h1 className="text-3xl font-extrabold text-slate-800 mb-2 text-center">Dashboard</h1>
            <p className="text-sm text-slate-500 mb-8 text-center">App status and statistics overview.</p>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                    <p className="text-sm font-semibold text-slate-500">Total Apps</p>
                    <p className="text-3xl font-black text-slate-800 mt-2">{allAppsArray.length}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                    <p className="text-sm font-semibold text-slate-500">Installed</p>
                    <p className="text-3xl font-black text-purple-600 mt-2">{installedCount}</p>
                </div>
                <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm text-center">
                    <p className="text-sm font-semibold text-slate-500">Available to Install</p>
                    <p className="text-3xl font-black text-blue-600 mt-2">{unInstalledCount}</p>
                </div>
            </div>

            {/* Chart Area */}
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm flex flex-col items-center">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Installation Distribution</h3>
                {allAppsArray.length === 0 ? (
                    <p className="text-slate-400 text-sm py-10">No data available</p>
                ) : (
                    <div className="w-full h-[300px] flex justify-center items-center">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={70}
                                    outerRadius={90}
                                    paddingAngle={5}
                                    dataKey="value"
                                    isAnimationActive={true}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: '1px solid #f1f5f9', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Legend verticalAlign="bottom" height={36} />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Dashboard;