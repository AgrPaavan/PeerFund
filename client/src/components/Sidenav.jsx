import React from "react";
import { Link } from "react-router-dom";
import { setGlobalState } from "../store";

const Sidenav = () => {
  const logoutHandler = () => {
    setGlobalState("connectedAccount", undefined);
  };

  return (
    <div className="">
      <aside
        id="sidenav-5"
        className="fixed hidden md:block top-20 mt-2 py-5 left-0 z-[1035] h-full w-60 overflow-hidden bg-zinc-800 data-[te-sidenav-hidden='false']:translate-x-0 "
        data-te-sidenav-init
        data-te-sidenav-hidden="false"
        data-te-sidenav-accordion="true"
      >
        <ul
          className="relative m-0 list-none px-[0.2rem]"
          data-te-sidenav-menu-ref
        >
          <li className="relative">
            <Link
              to="/Profile"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-4 text-[0.875rem] text-white  outline-none transition duration-100 ease-linear hover:bg-slate-50  hover:outline-none  active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 "
              data-te-sidenav-link-ref
            >
              <span></span>
              <span>Dashboard</span>
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/Campaigns"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-3 text-[0.875rem] text-white  outline-none transition duration-100 ease-linear hover:bg-slate-50  hover:outline-none  active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 "
              data-te-sidenav-link-ref
            >
              <span></span>
              <span>Campaigns</span>
            </Link>
          </li>
          <li className="relative">
            <Link
              to="/EditProfile"
              className="flex h-12 cursor-pointer items-center truncate rounded-[5px] px-6 py-3 text-[0.875rem] text-white outline-none transition duration-100 ease-linear hover:bg-slate-50  hover:outline-none  active:bg-slate-50 active:text-inherit active:outline-none data-[te-sidenav-state-active]:text-inherit data-[te-sidenav-state-focus]:outline-none motion-reduce:transition-none dark:text-gray-300 dark:hover:bg-white/10 dark:focus:bg-white/10 "
              data-te-sidenav-link-ref
            >
              <span></span>
              <span>Edit Profile</span>
            </Link>
          </li>
        </ul>
        <div className="mx-6 my-5">
          <button className="bg-[#4F0ADF] text-white text-sm font-regular w-full py-3 rounded-lg">
            <span></span>
            <span onClick={logoutHandler}>DISCONNECT</span>
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Sidenav;
