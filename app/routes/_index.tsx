import type { V2_MetaFunction } from "@remix-run/node";
import { Link, Outlet } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="text-center h-screen">
      <h1 className="text-9xl">👋</h1>
      <ul className="p-8 font-poppins">
        <Link to="learner/dashboard" >
          <li>To see the dashbaord go to: <span className="text-violet-500 font-extrabold">localhost:3000/learner/dashboard</span></li>
        </Link>
        <Link to="/learner">
          <li>To see the learner login/portal/whatever it'll be page (blank at the moment...) go to: <span className="text-violet-500 font-extrabold">localhost:3000/learner/</span></li>
        </Link>
      </ul>
      <Outlet />
    </div>
  );
}
