import React from "react";
import { FaChartPie, FaBell, FaPowerOff } from "react-icons/fa6";

const Sidebar = () => {
	return (
		<div className="w-1/5 h-[90vh] flex flex-col justify-between px-4 pt-8 pb-4 bg-white dark:bg-gray-800 rounded-tr-2xl mt-5">
			<div>
				<h5
					id="drawer-navigation-label"
					className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400">
					Menu
				</h5>
				<div className="py-4 overflow-y-auto">
					<ul className="space-y-2 font-medium">
						<li>
							<a
								href="/profile/myprofile"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
								<FaChartPie className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
								<span className="ms-3">My Profile</span>
							</a>
						</li>
						<li>
							<a
								href="/profile/inbox"
								className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
								<FaBell className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
								<span className="flex-1 ms-3 whitespace-nowrap">Inbox</span>
								<span className="inline-flex items-center justify-center w-3 h-3 p-3 ms-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
									3
								</span>
							</a>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<a
					href="#"
					className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
					<FaPowerOff className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
					<span className="flex-1 ms-3 whitespace-nowrap">Logout</span>
				</a>
			</div>
		</div>
	);
};
export default Sidebar;
