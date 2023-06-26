import { Link, Outlet } from "@remix-run/react";


const Activities = () => {
    return (
        <div>
            <h1>A list of all subjects and activities should appear here.</h1>

            <Link to="/activities/math">
                <p className="text-2xl cursor-pointer hover:underline font-mono fot">Math</p>
            </Link>
        </div>
    )
}

export default Activities;