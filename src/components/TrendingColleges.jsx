import CollegeCard from "./CollegeCard";
import useSWR from "swr";
import { apiFetcher } from "../api/client";
import { ClipLoader } from "react-spinners";

export default function TrendingColleges() {
    const { data, error, isLoading } = useSWR('/colleges?limit=3&skip=4', apiFetcher);
    console.log(data)
   

    if (isLoading) {
        return
        <div>
            <ClipLoader size={50} />
        </div>
    }

    if (error) {
        return (
            <div className="flex justify-center items-center">
                <p className="text-red-700 text-6xl">
                    Something went wrong
                </p>
            </div>
        );
    }

    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="font-bold text-2xl mb-4 space-x-2">
                <span>Trending</span>
                <span className="text-[#7848F3]">colleges</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {data.data.map(college => <CollegeCard
                    key={college.id}
                    college={college}
                />)}
            </div>
            <div className="text-center mt-4">
                <button className="bg-primary rounded-sm text-white text-[10px] border-0 px-4 py-1.5 mt-3 ">Load more...</button>
            </div>
        </section>
    );
}