import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Mcq from "../components/Mcq";
import Calendar from "../components/Calendar";
import ColorPicker from "../components/ColorPicker";

const Quiz = ({ qn, setSelected }) => {
    const questions = [
        "When’s your birthday?",
        "What’s your favorite color?",
        "Do you prefer warm or cool weather?",
        "What’s your zodiac sign, if you know it?"
    ]

    const [currentQuestion, setCurrentQuestion] = useState("");

    useEffect(() => {
        setCurrentQuestion(questions[qn - 1]);
    }, [qn]);

    return (
        <div className="flex flex-col flex-grow p-6 items-center md:mt-20 overflow-hidden">
            <div className="md:text-[28px] text-[22px] font-semibold text-[#191D63]">
                {currentQuestion}
            </div>
            <div className="overflow-y-scroll max-h-[500px]">
                {qn === 1
                    ? <Calendar setSel={setSelected} qn={qn} /> :
                    qn == 2
                        ? <ColorPicker setSel={setSelected} qn={qn} /> :
                        qn == 3
                            ? <Mcq setSel={setSelected} qn={qn} options={["Warm", "Cool"]} /> :
                            <Mcq setSel={setSelected} qn={qn} options={["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"]} />

                }
            </div>
        </div>
    )
}
export default Quiz