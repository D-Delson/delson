import { IoIosArrowDown } from "react-icons/io";

type DropDownItem = {
    label: string;
    value: string;
};

type HoverDropDownProps = {
    value: string;
    items: DropDownItem[];
    onSelect: (value: string) => void;
};

export default function HoverDropDown({
    value,
    items,
    onSelect,
}: HoverDropDownProps) {
    return (
        <div className="relative group text-gray-500">
            {/* Trigger */}
            <button className="flex items-center cursor-pointer">
                {value}
                <IoIosArrowDown className="transition-transform duration-200 group-hover:rotate-180"/>
            </button>

            {/* Dropdown */}
            <div
                className="absolute left-0 min-w-10
                           border border-white
                         text-gray-500
                           invisible opacity-0 group-hover:visible group-hover:opacity-100
                           transition-all duration-200"
            >
                {items.map((item) => (
                    <button
                        key={item.value}
                        onClick={() => onSelect(item.value)}
                        className="block w-full px-3 py-2 hover:text-white cursor-pointer"
                    >
                        {item.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
