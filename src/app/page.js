import HomeBanner from "@/components/homepage/HomeBanner";
import Recommendations from "@/components/homepage/Recommendations";

export default function Home() {
	
	return (
		<main className="w-full bg-white min-h-screen">
			<HomeBanner />
			<Recommendations title={"Recently Launched"} />
		</main>
	);
}
