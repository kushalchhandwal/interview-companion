import Button from "./Button";
import { useNavigate } from "react-router-dom";

function QuestionView({ question,onSolved}) {
    const navigate = useNavigate();
    return (
        <div className="Card">
            <h2>{question.title}</h2>

            <p>Topic: {question.topic}</p>
            <p>Difficulty: {question.difficulty}</p>
            <p>Company: {question.company}</p>

            {question.solved ? (
                <p>✅ Solved</p>
            ) : (
                <Button
                    text="Mark as Solved"
                    onClick={onSolved}
                />
            )}

            <Button
                text="Back"
                onClick={() => navigate("/practice")}
            />
        </div>
    );
}

export default QuestionView;