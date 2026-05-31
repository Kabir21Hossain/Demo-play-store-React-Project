
import { useParams } from 'react-router';
import useHooks from '../../UseHooks';
import DisplayApps from '../../Components/DisplayApps';
import { HashLoader } from 'react-spinners';
const AppDetails = () => {
    const { id } = useParams();
    const { apps, loading } = useHooks();
    const allApps = apps.apps;


    if (loading) {
        return (
            <div className='flex justify-center items-center h-[60vh]'
            ><HashLoader color='#dd2da2' /></div>
        )
    }
    const targetApp = allApps ? allApps.find((app) => String(app.id) === id) : null;
    return (
        <>
            <DisplayApps app={targetApp} />
        </>
    )
}

export default AppDetails;