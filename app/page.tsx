
import Header from "./components/Header";
import AboutUsSection from "./components/AboutUsSection";
import ServiceSection from "./components/ServiceSection";
import FeaturesSection from "./components/FeaturesSection";

export default function Home() {
    return (
        <div>
            <Header />
            <FeaturesSection />  
            <ServiceSection />  
            <AboutUsSection />  

        </div>
    );
}
