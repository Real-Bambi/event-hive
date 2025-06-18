import EventDetail from "../components/EventDetail";
import Navbar from "../components/Navbar";

export default function CreateEvent() {
    return (
        <>
            <Navbar />
            <section className="bg-gray-50  ">

                <div className=" ">
  <h1 className="text-big-heading font-bold text-center mb-4 pt-16">Create Event</h1>

  <form className=" w-[816px] min-h-[460px] flex flex-col p-5 mx-auto gap-[33px] ">
  
    <div>
      <label className=" text-sm mb-2">Event Title</label>
      <input type="text" placeholder="Enter your mail" className="w-full p-3 rounded-md  bg-white" />
    </div>

   
    <div>
      <label className=" text-sm mb-2">Event Venue</label>
      <input type="text" placeholder="Enter your mail" className="w-full p-3 rounded-md  bg-white" />
    </div>

    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className=" text-sm mb-2">Start time</label>
        <input type="text" placeholder="Enter your mail" className="w-full p-3 rounded-md  bg-white" />
      </div>
      <div>
        <label className=" text-sm mb-2">End time</label>
        <input type="text" placeholder="Enter your mail" className="w-full p-3 rounded-md  bg-white" />
      </div>
    </div>

   
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div>
        <label className=" text-sm mb-2">Start date</label>
        <input type="text" placeholder="Enter your mail" className="w-full p-3 rounded-md  bg-white" />
      </div>
      <div>
        <label className=" text-sm mb-2">End date</label>
        <input type="text" placeholder="Enter your mail" className="w-full p-3 rounded-md bg-white" />
      </div>
    </div>
  </form>

  
</div>
                
                 <div className="flex flex-col gap-[40px] bg-gray-50 min-h-[690px] w-[813px] mx-auto  ">
            <h2 className="text-big-heading font-bold items-center flex flex-col pt-6">Event Description</h2>
            <div>
                <label className="text-sm mb-1" htmlFor="">Event Image</label>
                < input className="min-h-[254px] bg-gray-200 rounded-lg w-full" type="" accept="" placeholder="" />
            </div>

            <div>
                <label className="text-sm mb-1" htmlFor="">Event Description</label>
                <textarea
                    id="description"
                    placeholder="Type here..."
                    class="w-full h-[173px] p-3 border border-gray-100 rounded-md placeholder:text-gray-400 resize-none bg-white "
                ></textarea>
            </div>
           

        </div>
              <button className="bg-primary h-[49px] w-[813px] rounded-md text-white mx-auto flex flex-col justify-center" type="submit ">Create Event</button>   
            </section>
        </>
    );
}