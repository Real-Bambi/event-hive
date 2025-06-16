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

   <button className="bg-primary h-[49px] w-full rounded-md text-white" type="submit">Create Event</button>
</div>

                
                
               

                <EventDetail />
            </section>
        </>
    );
}