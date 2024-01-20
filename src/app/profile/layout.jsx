import Dashboard from "@/components/profile/Dashboard";
import Header from "@/components/profile/Header";
import Sidebar from "@/components/profile/Sidebar";

const layout = ({ children }) => {
	return (
		<div className="flex justify-start items-center mr-8">
			<Sidebar />
			{/* Profile section */}
			<div className="h-[90vh] w-4/5 border-2 mt-5 rounded-t-2xl shadow-xl bg-blue-800">
				<Header />
				{children}
			</div>
		</div>
	);
};

export default layout;
