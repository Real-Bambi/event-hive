import { imageBaseURL } from "../api/client";
import { Link } from "react-router";

export default function EventCard({event}) {
    return (
        <div className="border-gray-700 bg-[#EDC7B8] shadow-2xl">
            <img src={`${imageBaseURL}/${event.image}`} alt="Event Card" />
            <Link to={`/view-event?id=${event.id}`} className="text-lg font-bold p-2">{event.title}</Link>
            <h2 className="text-[12px] italic p-2">Saturdat, March 18, 9.30PM</h2>
            <h3 className="p-2 text-[15px] mb-2"><button className="bg-[#8157BA] py-2 px-2 rounded-b-sm font-bold text-white text-[10px]">ONLINE EVENT</button> - Attend anywhere</h3>
        </div>
    );
}