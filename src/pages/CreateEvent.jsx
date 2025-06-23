import EventDetail from "../components/EventDetail";
import Navbar from "../components/Navbar";
import useSWR from "swr";
import { apiFetcher, apiClient } from "../api/client";
import SubmitButton from "../components/SubmitButton";
import { Navigate, useNavigate } from "react-router";

export default function CreateEvent() {
  const navigate = useNavigate();

  const { data, isLoading, error } = useSWR("/colleges", apiFetcher);

  const postEvent = async (data) => {
    try {
      const response = await apiClient.post("/events", data, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("ACCESS_TOKEN")}`
        }
      });
      console.log(response.data);
      navigate(`/view-event?id = ${response.data.data.id}`);

    } catch (error) {
      console.log(error)

    }
  }

if(!localStorage.getItem("ACCESS_TOKEN")) {
  return <Navigate to={"/login"} />;
}

return (
  <>
    <Navbar />
    <section className="bg-gray-50  ">

        <div className=" ">
          <h1 className="text-big-heading font-bold text-center mb-4 pt-16">Create Event</h1>

          <form action={postEvent} className=" w-[816px] min-h-[460px] flex flex-col p-5 mx-auto gap-[33px] ">

            <div>
              <label className=" text-sm mb-2">College</label>
              <select name="college" id="" className="w-full p-3 rounded-md  bg-white">
                {isLoading ? <option value="">loading...</option> :
                  error ? <option value="">Something went wrong</option> :
                    data.data.map((college) => {
                      return <option key={college.id} value={college.id}>
                        {college.name}</option>
                    })}
              </select>
            </div>

            <div>
              <label className=" text-sm mb-2">Event Title</label>
              <input type="text" name="title" placeholder="Enter your title" className="w-full p-3 rounded-md  bg-white" />
            </div>


            <div>
              <label className=" text-sm mb-2">Event Venue</label>
              <input type="text" name="venue" placeholder="Enter your venue" className="w-full p-3 rounded-md  bg-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className=" text-sm mb-2">Start date</label>
                <input type="datetime-local" name="start" placeholder="Date" className="w-full p-3 rounded-md  bg-white" />
              </div>
              <div>
                <label className=" text-sm mb-2">End date</label>
                <input type="datetime-local" name="end" placeholder="Date" className="w-full p-3 rounded-md bg-white" />
              </div>
            </div>
            <div className="flex flex-col gap-[40px] bg-gray-50 min-h-[690px] w-[813px] mx-auto  ">
              <h2 className="text-big-heading font-bold items-center flex flex-col pt-6">Event Description</h2>
              <div>
                <label className="text-sm mb-1" htmlFor="">Event Image</label>
                < input className="min-h-[254px] bg-gray-200 rounded-lg w-full" type="file" name="image" accept="image/*" />
              </div>

              <div>
                <label className="text-sm mb-1" htmlFor="">Event Description</label>
                <textarea
                  id="description"
                  type="text" name="description"
                  placeholder="Type here..."
                  class="w-full h-[173px] p-3 border border-gray-100 rounded-md placeholder:text-gray-400 resize-none bg-white "
                ></textarea>
              </div>

              <div>
                <label className="text-sm mb-1" htmlFor="">Event Tags</label>
                <select
                  id="description"
                  type="text" name="tags"
                  placeholder="Type here..."
                  multiple
                  class="w-full h-[173px] p-3 border border-gray-100 rounded-md placeholder:text-gray-400 resize-none bg-white ">
                  <option value="social">Social</option>
                  <option value="fun">Fun</option>
                  <option value="education">Education</option>
                  <option value="programming">Programming</option>
                  <option value="business">Business</option>
                </select>
              </div>
            </div>

            <SubmitButton title="Create Event" className="bg-primary h-[49px] w-[813px] rounded-md text-white mx-auto flex flex-col justify-center" />
          </form>

        </div>

      </section>
    </>
  );
}