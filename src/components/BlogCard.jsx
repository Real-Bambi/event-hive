export default function BlogCard() {
    return (
        <div className="border-gray-700 bg-[#EDC7B8] shadow-2xl">
            <img src={'https://plus.unsplash.com/premium_photo-1682434403587-1313db01ed02?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="Event Card" />
            <h1 className="text-lg font-bold p-2">BestSelller Book Bootcamp -write, Market & Publish Your Book -Lucknow</h1>
            <h2 className="text-[12px] italic p-2">Saturdat, March 18, 9.30PM</h2>
            <h3 className="p-2 text-[15px] mb-2"><button className="bg-[#8157BA] py-2 px-2 rounded-b-sm font-bold text-white text-[10px]">ONLINE EVENT</button> - Attend anywhere</h3>
        </div>
    );
}