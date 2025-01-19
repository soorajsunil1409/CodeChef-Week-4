import { useEffect, useState } from "react";

const ColorPicker = ({ qn, setSel }) => {
    const [selected, setSelected] = useState(0);
    const [customColor, setCustomColor] = useState("#ffffff");

    useEffect(() => {
        if (selected === 0) setSel(null);
        else if (selected === 1) setSel(customColor);
    }, [selected, customColor]);

    useEffect(() => {
        setSelected(0);
    }, [qn]);

    return (
        <div className="flex flex-col gap-7 mt-10">

            {/* Custom Color Option */}
            <div
                className={`w-[335px] md:w-[500px] p-4 ${selected === 1
                    ? "bg-[#45C486] text-[#E9F0EF]"
                    : "bg-white text-black"
                    } flex items-center gap-7 font-semibold text-[20px] rounded-xl cursor-pointer`}
            >
                <label className="flex items-center gap-7 w-full cursor-pointer">
                    <input
                        type="color"
                        value={customColor}
                        onChange={(e) => {
                            setCustomColor(e.target.value);
                            setSelected(1);
                        }}
                        className="w-[50px] h-[50px] border-none rounded-full cursor-pointer"
                    />
                    <span>Select Custom Color</span>
                </label>
            </div>
        </div>
    );
};

export default ColorPicker;
