import { useEffect, useState } from "react";

const Mcq = ({ setSel, qn, options }) => {
    const [selected, setSelected] = useState(0);

    useEffect(() => {
        if (selected === 0) setSel(false);
        else setSel(true);
    }, [selected]);

    useEffect(() => {
        setSelected(0);
    }, [qn]);

    return (
        <div className="flex flex-col gap-7 mt-8">
            {options.map((option, index) => (
                <div
                    key={index}
                    onClick={() => setSelected(index + 1)}
                    className={`w-[335px] md:w-[500px] p-4 ${selected === index + 1
                        ? "bg-[#45C486] text-[#E9F0EF]"
                        : "bg-white text-black"
                        } flex items-center gap-7 font-semibold text-[20px] rounded-xl cursor-pointer`}
                >
                    <div
                        className={`text-center w-[50px] h-[50px] bg-[#EDE8E3] ${selected === index + 1 ? "text-[#45C486]" : "text-black"
                            } p-2 rounded-full`}
                    >
                        {selected === index + 1 ? "✓" : String.fromCharCode(65 + index)}
                    </div>
                    {option}
                </div>
            ))}
        </div>
    );
};

export default Mcq;
