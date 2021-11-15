import Header from "../components/SiteNavigation/Header";

function About() {
	return (
		<div>
			<Header active="/about" />
			<h2>What is Olive Oil?</h2>
			<p>The all-in-one, fully-customizable Kitchen Manager</p>
			<ul>
				<li>A smarter recipe scraper</li>
				<li>Automated pantry management</li>
				<li>Fully-synced Meal Planner</li>
			</ul>

			<p>Coming soon: Download our iOS application</p>
		</div>
	);
}

export default About;
