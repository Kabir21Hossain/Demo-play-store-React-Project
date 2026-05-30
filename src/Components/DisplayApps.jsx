import { FaStar, FaDownload } from "react-icons/fa";

const DisplayApps = ({ app }) => {
    return (
        <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between h-full">
            <div>
                {/* Header Section: Icon & Names */}
                <div className="flex gap-4 items-start">
                    <img
                        src={app.icon || "https://via.placeholder.com/128?text=App"}
                        alt={`${app.name} Icon`}
                        className="w-16 h-16 rounded-2xl object-cover bg-slate-50 border border-slate-150 shadow-2xs"
                    />
                    <div className="space-y-1 flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-2">
                            <h2 className="text-lg font-bold text-slate-800 truncate leading-tight">
                                {app.name}
                            </h2>
                            <span className="text-2xs font-semibold px-2 py-0.5 rounded-full bg-slate-100 text-slate-600 capitalize shrink-0">
                                {app.category}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 truncate">{app.developer}</p>
                    </div>
                </div>

                {/* Key Stats Section */}
                <div className="flex items-center gap-4 mt-4 pt-3 border-t border-slate-50 text-xs text-slate-600">
                    <div className="flex items-center gap-1">
                        <FaStar className="text-amber-400 shrink-0" />
                        <span className="font-semibold text-slate-700">{app.rating}</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                    <div className="flex items-center gap-1">
                        <FaDownload className="text-blue-500 shrink-0" />
                        <span className="font-semibold text-slate-700">{app.downloads}</span>
                    </div>
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200"></div>
                    <span className="font-medium text-slate-500">{app.size}</span>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-500 mt-3 line-clamp-2 leading-relaxed">
                    {app.description}
                </p>
            </div>

            {/* Footer Section: Price & CTA */}
            <div className="flex justify-between items-center mt-5 pt-3 border-t border-slate-50">
                <span className="text-sm font-bold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-lg">
                    {app.free ? "Free" : `$${app.price}`}
                </span>
                <button className="btn btn-primary btn-sm rounded-xl px-4 font-semibold text-xs transition-transform duration-200 active:scale-95 cursor-pointer">
                    Install
                </button>
            </div>
        </div>
    );
};

export default DisplayApps;