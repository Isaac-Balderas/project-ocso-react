import { LuStore } from "react-icons/lu";

export default function Sidebar(){
    return (
        <nav className="w-[10vw] h-[90vh] bg-orange-200 flex flex-col items-center py-20">
            <LuStore className="text-4xl" />
        </nav>
    );
}