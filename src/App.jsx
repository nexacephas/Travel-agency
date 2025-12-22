import React from "react";
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
function App() {
return (
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
<Footer /> 
</>
);
}

export default App;