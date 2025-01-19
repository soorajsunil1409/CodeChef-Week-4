import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Home from "./pages/Home";
import Quiz from "./pages/Quiz";
import QuizLayout from "./pages/QuizLayout";
import { useEffect, useState } from "react";
import Results from "./pages/Results";

const App = () => {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [selected, setSelected] = useState(false);

  useEffect(() => {
    setQuestionNumber(1);
    setSelected(false);
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index path="/" element={<Home />} />
        <Route path="/quiz" element={<QuizLayout qn={questionNumber} setQn={setQuestionNumber} selected={selected} />}>
          <Route index element={<Quiz qn={questionNumber} setSelected={setSelected} />} />
        </Route>
        <Route index path="/results" element={<Results />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}
export default App