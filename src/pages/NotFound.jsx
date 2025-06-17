import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Picture from "../assets/images/notfound.jpg"
import linkedin from "../assets/images/linkedin.png"
import facebook from "../assets/images/facebook.png"
import instagram from "../assets/images/ig.png"
import youtube from "../assets/images/youttube.png"
import twitter from "../assets/images/twitter.png"
export default function NotFound() {
    return (
        <>
            <Navbar />
            <section>
                <div className="w-[80%] mx-auto flex flex-col items-center justify-center  ">
                    <img src={Picture} alt="notfound" className="pb-4" />
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-bold pb-8 text-3xl">Oops!</p>
                        <h5 className="pb-8 text-[#00000080]">We cannot seem to find the page you are looking for</h5>
                        <button className="bg-[#7848F4] text-white rounded-3xl mb-10 p-4">Back to homepage</button>
                        <p className="pb-4">Follow us on</p>
                    </div>
                    <div className="flex flex-row gap-4">
                   <img src={linkedin} alt="social media" />
                   <img src={facebook} alt="social media" />
                   <img src={instagram} alt="social media" />
                   <img src={twitter} alt="social media" />
                   <img src={youtube} alt="social media" />

                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}