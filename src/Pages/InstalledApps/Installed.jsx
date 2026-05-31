import { useContext } from 'react';
import { installContext } from '../../context';
import { FaStar, FaDownload } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Installed = () => {
    const { installApps, unInstallApp } = useContext(installContext);

    const handleUninstall = (app) => {
        unInstallApp(app);
        toast.success(`${app.name} uninstalled successfully!`);
    };

    return (
        <div className="container mx-auto my-10 min-h-[60vh] px-4 max-w-4xl">
            <h1 className="text-3xl font-extrabold text-slate-800 mb-2 text-center">Installed Apps</h1>
            <p className="text-sm text-slate-500 mb-8 text-center">Manage your installed applications.</p>

            {installApps && installApps.length > 0 ? (
                <div className="flex flex-col gap-3">
                    {installApps.map(app => (
                        <div
                            key={app.id}
                            className="w-full h-20 bg-white border border-slate-100 rounded-2xl shadow-xs hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-4 px-4"
                        >
                            {/* App Icon */}
                            <Link to={`/apps/${app.id}`} className="shrink-0">
                                <img
                                    src={app.icon || 'https://via.placeholder.com/128?text=App'}
                                    alt={`${app.name} icon`}
                                    className="w-12 h-12 rounded-xl object-cover border border-slate-100"
                                />
                            </Link>

                            {/* App Info */}
                            <Link to={`/apps/${app.id}`} className="flex-1 min-w-0">
                                <p className="text-sm font-bold text-slate-800 truncate">{app.name}</p>
                                <p className="text-xs text-slate-400 truncate">{app.developer}</p>
                            </Link>

                            {/* Category Badge */}
                            <span className="hidden sm:inline-block text-xs font-semibold px-2 py-1 rounded-full bg-slate-100 text-slate-500 shrink-0">
                                {app.category}
                            </span>

                            {/* Rating */}
                            <div className="hidden sm:flex items-center gap-1 shrink-0">
                                <FaStar className="text-amber-400 text-xs" />
                                <span className="text-xs font-semibold text-slate-600">{app.rating}</span>
                            </div>

                            {/* Uninstall Button */}
                            <button
                                onClick={() => handleUninstall(app)}
                                className="btn btn-sm btn-error text-white rounded-xl px-4 text-xs font-semibold shrink-0 cursor-pointer active:scale-95 transition-transform duration-150"
                            >
                                Uninstall
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center mt-20 flex flex-col items-center justify-center space-y-4">
                    <p className="text-lg font-medium text-slate-600">No apps installed yet.</p>
                    <p className="text-sm text-slate-400 max-w-sm">Browse the store, discover trending apps, and install them to see them here.</p>
                </div>
            )}
        </div>
    );
};

export default Installed;