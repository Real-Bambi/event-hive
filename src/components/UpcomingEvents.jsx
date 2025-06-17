import EventCard from "./EventCard";

export default function UpcomingEvents() {
    return (
        <section className="mt-20 w-[90%] mx-auto">
            <div>
                <h1 className="font-bold text-2xl mb-4 space-x-2">
                    <span>Upcoming</span>
                    <span className="text-[#7848F3]">Events</span>
                </h1>
            </div>
            <div className="grid grid-cols-3 gap-5">
                {[1, 2, 3, 4, 5, 6].map(n => <EventCard key={n} />)}
            </div>
            <div>
                <button className="bg-primary rounded-md py-2 px-4 text-white">Load more...</button>
            </div>
        </section>
    );
}