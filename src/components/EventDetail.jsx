export default function EventDetail() {
    return (
        <div className="flex flex-col gap-[40px] bg-gray-50 min-h-[690px] w-[813px] mx-auto  ">
            <h2 className="text-big-heading font-bold items-center flex flex-col pt-6">Event Description</h2>
            <div>
            <label className="text-sm mb-1" htmlFor="">Event Image</label>
            < input className="min-h-[254px] bg-gray-200 rounded-lg w-full" type="" accept="" placeholder="" />
            </div>

            <div>
            <label className="text-sm mb-1" htmlFor="">Event Description</label>
            <textarea
                id="description"
                placeholder="Type here..."
                class="w-full h-[173px] p-3 border border-gray-100 rounded-md placeholder:text-gray-400 resize-none bg-white "
            ></textarea>
            </div>

           
        </div>
    );
}