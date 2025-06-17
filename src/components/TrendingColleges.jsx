import CollegeCard from "./CollegeCard";

export default function TrendingColleges() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <h1 className="font-bold text-2xl mb-4 space-x-2">
                <span>Trending</span>
                <span className="text-[#7848F3]">colleges</span>
            </h1>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3].map(n => <CollegeCard key={n} />)}
            </div>
            <div>
                <button className="bg-primary rounded-md py-2 px-4 text-white">Load more...</button>
            </div>
        </section>
    );
}