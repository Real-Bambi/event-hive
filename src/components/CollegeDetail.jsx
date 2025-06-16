import Roorkee from "../assets/images/Roorkee.png"

export default function CollegeDetail() {
    return (
        <div className="flex flex-col">
            <img src={Roorkee} alt="" />
            <p className="font-bold">IIT ROORKEE</p>
            <p>DesignHub organized a 3D Modeling Workshop using Blender on 16th February at 5 PM. The workshop taught participants the magic of creating stunning 3D models and animations using Blender. It was suitable for both beginners and experienced users. The event was followed by a blender-render competition, which added to the excitement.</p>
        </div>
    );
}