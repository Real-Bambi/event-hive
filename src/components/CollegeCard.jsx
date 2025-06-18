export default function CollegeCard() {
    return (
        <div className="border-gray-700 bg-[#EDC7B8] shadow-2xl">
            <img src={'https://images.unsplash.com/photo-1603437119287-4a3732b685f9?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'} alt="College Card" />
            <h1 className="text-lg font-bold p-2">Harvard University</h1>
            <h2 className="text-[12px] italic p-2 mb-2">Cambridge, Massachusetts, UK</h2>
        </div>
    );
}