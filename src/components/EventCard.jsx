export default function EventCard() {
    return (
        <div className="border-gray-700 bg-[#EDC7B8] shadow-2xl">
            <img src={'https://plus.unsplash.com/premium_photo-1661306437817-8ab34be91e0c?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZXZlbnRzfGVufDB8fDB8fHww'} alt="Event Card" />
            <h1 className="text-lg font-bold p-2">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</h1>
            <h2 className="text-[12px] italic p-2">Saturdat, March 18, 9.30PM</h2>
            <h3 className="p-2 text-[15px] mb-2"><button className="bg-[#8157BA] py-2 px-2 rounded-b-sm font-bold text-white text-[10px]">ONLINE EVENT</button> - Attend anywhere</h3>
        </div>
    );
}