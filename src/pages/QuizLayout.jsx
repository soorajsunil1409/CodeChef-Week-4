import { useEffect, useRef, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const QuizLayout = ({ setQn, qn = 1, selected = false }) => {
    const [percent, setPercent] = useState(0.25);
    const navigate = useNavigate();
    const buttonRef = useRef(null);

    useEffect(() => {
        setPercent(qn / 4);
    }, [qn]);

    useGSAP(() => {
        gsap.from("#main", {
            translateX: "100%",
            duration: 0.5
        });
    }, []);

    const nextPage = (e) => {
        const tl = gsap.timeline({ duration: 0.1, ease: 'power3.out' });
        tl.to("#question", {
            scale: "0.9"
        }).to("#question", {
            translateX: "-100%", onComplete: () => {
                const new_page = qn + 1;
                if (new_page > 4) {
                    setQn(1)
                    tl.to("#main", {
                        translateX: "-100%"
                    })
                    navigate("/results");
                } else {
                    setQn(new_page);
                }
            }
        })


        tl.set("#question", { x: "100%" })
            .to("#question", { x: 0 })
            .to("#question", { scale: 1 })
    }

    return (
        <div id="main" className="w-[100vw] h-[100vh] flex flex-col overflow-x-hidden">
            <div id="div" className="flex flex-col bg-[#EDE8E3]">
                <div className="text-center p-10 md:text-[24px] text-[18px] font-semibold">
                    Fortune Quiz
                    <Link to="/" className="absolute font-light md:top-10 md:right-20 top-9 right-5 h-10 w-10 bg-white rounded-full cursor-pointer text-center text-3xl">×</Link>
                </div>
                <div className="md:hidden flex gap-6 justify-center items-center text-[#757575] p-6">
                    <div className="w-full h-[15px] bg-white rounded-2xl">
                        <div style={{ width: `${percent * 100}%` }} className="h-full bg-[#31CD63] rounded-2xl transition-all ease-out duration-700"></div>
                    </div>
                    {qn}/4
                </div>
            </div>
            <div id="question" className="h-[100vh] bg-[#EDE8E3] flex flex-col">
                <Outlet />
            </div>
            <div className="p-6 md:bg-white flex justify-center gap-[160px] w-full">
                <div className="md:flex hidden gap-6 justify-center items-center text-[#747475] p-6 font-semibold">
                    <div className="w-[243px] h-[15px] bg-[#EDE8E3] rounded-2xl">
                        <div style={{ width: `${percent * 100}%` }} className="h-full bg-[#31CD63] rounded-2xl transition-all ease-out duration-700"></div>
                    </div>
                    {qn}/4
                </div>
                <button
                    ref={buttonRef}
                    onClick={nextPage}
                    disabled={!selected}
                    className={`${selected ? "bg-[#31CD63]" : "bg-[#747475]"} md:w-max sm:w-[60%] md:mb-0 mb-10 w-full px-[100px] py-5 rounded-xl ${selected ? "text-white" : "text-[#EDE8E2]"}`}
                >
                    Continue
                </button>
            </div>
        </div>
    )
}
export default QuizLayout