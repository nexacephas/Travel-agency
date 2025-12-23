import React from "react";
import { LanguageProvider } from "./context/LanguageContext";
import Navbar from "./component/Navbar/Navbar";
import Hero from "./component/Hero/Hero";
import About from "./component/About/About";
import Services from "./component/Services/Services";
import Steps from "./component/Step/Step";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer"; 
import Whyus from "./component/Why Us/Whyus";
import Partners from "./component/Partners/Partners";
import Pricing from "./component/Pricing/Pricing";
import Testimonials from "./component/Testimonials/Testimonials";
import StickyContact from "./component/StickyContact/StickyContact";
import CompanyLocationMap from "./component/Map/Map";
function App() {
return (
	<LanguageProvider>
		<>
			<Navbar />
			<Hero />
			<Whyus />
			<Steps />
			<Partners />
			<Pricing />
			<Testimonials />
			<About />
			<Services />
			<Contact />	
			<CompanyLocationMap />
			<StickyContact />
			<Footer /> 
		</>
	</LanguageProvider>
);
}

export default App;