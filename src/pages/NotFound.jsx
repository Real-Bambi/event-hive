import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Picture from "../assets/images/notfound.jpg"

export default function NotFound() {
    return (
        <>
            <Navbar />
            <section>
                <div className="w-[80%] flex flex-col items-center justify-center ">
                    <img src={Picture} alt="notfound" className="pb-8" />
                    <div className=" justify-center">
                        <p className="font-bold pb-8">OOPS!</p>
                        <h5 className="">We cannot seem to find the page you are looking for</h5>
                        <button className="bg-[#7848F4] text-white rounded-2xl p-4">Back to homepage</button>
                        <p>Follow us on</p>
                    </div>
                    <div>


                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}