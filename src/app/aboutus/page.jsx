import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import AboutUs from '@/components/sections/aboutus'
import IssuesSection from "@/components/sections/IssuesSection";




function page(){

    return(
<>
<Navbar />
<AboutUs />
<IssuesSection />
<Footer />
</>

    )
}

export default page;