
import { Link } from 'react-router'
const ErrorPage = () => {
    return (

        <div className="flex justify-center items-center container min-h-screen" >
            <div className="space-y-3 p-10 rounded-xl shadow-xl w-[400px] max-h-100 mx-auto flex flex-col justify-center items-center  bg-linear-to-r from-pink-200 to-blue-300">
                <p className="text-gray-400 font-bold text-xl">No path is found.</p>
                <p className="text-7xl font-bold text-gray-500">404</p>

                <h2 className="text-4xl font-bold rotate-15">Error</h2>
                <Link to="/" className="btn btn-primary btn-soft">Go Home</Link>
            </div>
        </div>


    )
}

export default ErrorPage;