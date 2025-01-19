import { Link } from "react-router-dom"
import Result from "../assets/result.png"
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Results = () => {
    useGSAP(() => {
        gsap.from("#main", {
            translateX: "100%",
            duration: 0.5
        });
    }, []);
    return (
        <div id="main" className="h-[100vh]">
            < Link to="/" className="absolute font-light md:top-10 md:right-20 top-9 right-5 h-10 w-10 bg-white rounded-full cursor-pointer text-center text-3xl" >×</Link >
            <div className="flex md:h-[calc(100vh-113px)] flex-col md:flex-row justify-center items-center gap-6 md:gap-[150px] md:p-[100px] lg:p-[160px] xl:p-[230px] p-5">
                <div className="flex flex-col items-center gap-12 md:gap-16 md:mt-0 mt-[100px]">
                    <div className="w-[143px] md:w-max"><img src={Result} alt="" /></div>
                    <div className="md:text-[33px] text-[22px] font-semibold">Results</div>
                </div>
                <div className="flex flex-col gap-8 xl:text-[33px] lg:text-[30px] md:text-[25px] text-[22px] font-semibold text-center">
                    <div>You are blah blah blah and you do blah blah, you wish you could blah blah.</div>
                    <div>Do blah blah and everything will be amazing and beautiful and perfect and pay me $12031231 for doing this service for you, and I’ll give you 3 more predictions.</div>
                </div>
            </div>
            <div className="p-6 md:h-[113px] md:bg-white flex justify-center gap-[160px] text-center w-[300vw] translate-x-[-100vw]">
                <Link to="/" className="bg-[#31CD63] md:w-max sm:w-[60%] md:mb-0 mb-10 w-full px-[140px] py-5 rounded-xl text-white">OKAY</Link>
            </div>
        </div >
    )
}
export default Results