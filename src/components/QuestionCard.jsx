import Button from "./Button";
import { useNavigate } from "react-router-dom";
function QuestionCard({ question }) {
        const navigate = useNavigate();
    return (
        <div className="Card">
            <h3>{question.title}</h3>

            <p>Topic: {question.topic}</p>
            <p>Difficulty: {question.difficulty}</p>
            <p>Company: {question.company}</p>

            {question.solved && <p>✅ Solved</p>}

       

<Button
 text="Start Practice"
    onClick={() => navigate(`/question/${question.id}`)}
/>
        </div>
    );
}

export default QuestionCard;