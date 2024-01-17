import HomeBanner from "@/components/homepage/HomeBanner";
import Recommendations from "@/components/homepage/Recommendations";
import HowToInvest from "@/components/homepage/How_to_invest";

export default function Home() {
	return (
		<main className="w-full bg-white min-h-screen">
			<HomeBanner />
			<Recommendations />
			<HowToInvest />
		</main>
	);
}
