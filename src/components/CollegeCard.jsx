import { imageBaseURL } from "../api/client";

export default function CollegeCard({college}) {
    return (
        <div className="border-gray-700 bg-[#EDC7B8] shadow-2xl">
            <img src={`${imageBaseURL}/${college.image}`} alt={college.name} />
            <h1 className="text-lg font-bold p-2">{college.address}</h1>
            <h2 className="text-[12px] italic p-2 mb-2">{college.rating}</h2>
        </div>
    );
}