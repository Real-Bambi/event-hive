import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroWithFilter from "../components/HeroWithFilter";
import UpcomingEvents from "../components/UpcomingEvents";
import TrendingColleges from "../components/TrendingColleges";
import OurBlogs from "../components/OurBlogs";
import Banner from "../assets/images/banner.png"
import Google from "../assets/images/google.png"
import Grab from "../assets/images/grab.png"
import Medium from "../assets/images/medium.png"
import Microsoft from "../assets/images/microsoft.png"
import Spotify from "../assets/images/spotify.png"
import Stripe from "../assets/images/stripe.png"
import Uber from "../assets/images/uber.png"
import Youtube from "../assets/images/youtube.png"
import Zoom from "../assets/images/zoom.png"
import { Link } from "react-router";


export default function Home() {
    return (
        <>
            <Navbar />
            <HeroWithFilter />
            <UpcomingEvents />
            {/* Make your own event section goes here */}
            <section className="bg-blue-950 mt-50">
                <div className="flex flex-row">
                    <div><img src={Banner} alt="" className="px-8 h-[27vh] ml-40 mt-[-30px]" /></div>
                    <div className="items-center text-white">
                        <h1 className="font-bold mt-6">Make your own Event</h1>
                        <p className="w-40 mt-2 text-[8px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
                        <Link to="/create-event"><button className="text-[10px] border-0 px-8 py-1.5 mt-4 bg-[#7848F4]">Create Events</button></Link>
                    </div>
                </div>
            </section>


            {/* Join these brands section goes here */}
            <section>
                <div className="px-130 py-8">
                    <h1 className="font-bold text-xl gap-4 text-center">Join these <span className="text-[#9874F5]">brands</span></h1>
                    <p className="text-[12px] text-center w-80 mt-2">We've had the pleasure of working with industry-defining brands. These are just some of them.</p>
                </div>

                <div className="flex flex-row justify-center gap-8 items-center w-[15%] mx-auto">
                    <img src={Spotify} alt="" className="hover:scale-105" />
                    <img src={Google} alt="" className="hover:scale-105" />
                    <img src={Stripe} alt="" className="hover:scale-105" />
                    <img src={Youtube} alt="" className="hover:scale-105" />
                    <img src={Microsoft} alt="" className="hover:scale-105" />
                </div>

                <div className="flex flex-row justify-center gap-8 items-center w-[15%] mx-auto">
                    <img src={Medium} alt="" className="hover:scale-105" />
                    <img src={Zoom} alt="" className="hover:scale-105" />
                    <img src={Uber} alt="" className="hover:scale-105" />
                    <img src={Grab} alt="" className="hover:scale-105" />
                </div>
            </section>

            <TrendingColleges />
            <OurBlogs />
            <Footer />
        </>
    );
}