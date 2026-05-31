import { HashLoader } from "react-spinners";
import useHooks from "../../UseHooks";
import DisplayApps from "../../Components/DisplayApps";


const Apps = () => {
    const { apps, loading } = useHooks()
    const data = apps.apps;
    return (
        <div className="container mx-auto my-10">
            {
                loading ? (
                    <div className="flex justify-center items-center min-h-[60vh]">
                        <HashLoader color="#00D1CD" />
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {data.map(app => <DisplayApps key={app.id} app={app} />)}
                    </div>
                )
            }
        </div>
    );
};

export default Apps;