import { imageBaseURL } from "../api/client";


export default function CollegeCard({college}) {

    return (
        <div className="border">
            <img 
            src={`${imageBaseURL}/${college.image}`} alt={college.name} />
            <h1>{college.name}</h1>
            <h2>{college.address }</h2>
        </div>
    );
}