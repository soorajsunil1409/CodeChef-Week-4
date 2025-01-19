import { Link, useNavigate } from "react-router-dom";
import Icon from "../assets/icon.png";
import gsap from "gsap";
import { useRef } from "react";

const Home = () => {
    const buttonRef = useRef(null);
    const navigate = useNavigate();

    const handleEnter = () => {
        gsap.to(buttonRef.current, {
            translateX: "7px",
            translateY: "-7px",
            boxShadow: "-7px 7px 0px rgba(0, 0, 0, 1)", // Sharp shadow
            duration: 0.4,
            ease: "power4.out",
        });
    };

    const handleExit = () => {
        gsap.to(buttonRef.current, {
            translateX: 0,
            translateY: 0,
            boxShadow: "0px 0px 0px rgba(0, 0, 0, 0)", // No shadow
            duration: 0.2,
            ease: "power2.out",
        });
    };

    const goToQuiz = () => {
        gsap.to("#main", {
            translateX: "-100%",
            duration: 0.5,
            onComplete: () => {
                navigate("/quiz")
            }
        });
    }

    return (
        <div id="main" className="flex bg-[#EDE8E3] flex-col justify-center items-center w-[100vw] h-[100vh] gap-10">
            <div className="flex md:flex-row flex-col justify-center lg:gap-[180px] md:gap-[50px] gap-[20px] items-center">
                <img src={Icon} alt="Icon" className="md:w-[270px] w-[180px]" />
                <div className="flex flex-col justify-center items-center">
                    <div className="md:text-[60px] text-[40px] font-semibold md:w-[400px] w-[300px] text-center">
                        The Watching&nbsp;Glass
                    </div>
                    <div className="md:text-[36px] text-[24px] text-center">Your Path, Clearly Seen</div>
                </div>
            </div>
            <button
                className="bg-[#31CD63] w-max text-[#F4F3F6] px-[80px] p-4 rounded-xl"
                ref={buttonRef}
                onMouseEnter={handleEnter}
                onMouseLeave={handleExit}
                onClick={goToQuiz}
            >
                READ MY FUTURE!
            </button>
        </div>
    );
};

export default Home;
