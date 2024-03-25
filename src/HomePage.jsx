import Navbar from './Navbar';
import RecentContainer from './RecentContainer';
import './css/app.css';
import AboutClubHome from './AboutClubHome';
import AboutSistHome from './AboutSistHome';
import CopyRights from './CopyRights';
import PreLoader from './PreLoader';
import data from './data.json'; // Importing data.json

function HomePage() {
	// Extracting recent event names from data.json
	const recentEventNames = data.home.recent;

	// Filtering events based on recent event names
	const recentEvents = recentEventNames.map(
		(eventName) => data.events[eventName]
	);

	// Rendering recent events
	return (
		<>
			<PreLoader />
			<Navbar navState={true} activeIndex={1} />
			<RecentContainer recentEvents={recentEvents} />
			<AboutClubHome />
			<AboutSistHome />
			<CopyRights />
		</>
	);
}

export default HomePage;
