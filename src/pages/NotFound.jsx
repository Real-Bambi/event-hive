import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import NotFound from "../assets/images/notfound.jpg"

export default function NotFound() {
    return (
        <>
            <Navbar />
            <section>
                <div className="w-[80%] flex items-center">
                    <img src={NotFound} alt="notfound" />
                    <p>OOPS</p>
                    <h5>We can't seem to find the page you are looking for</h5>
                    <button>Back to homepage</button>
                    <div>
                        <p>Follow us on</p>
                        
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}