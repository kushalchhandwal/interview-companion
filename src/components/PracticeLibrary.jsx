import QuestionCard from "./QuestionCard";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

function PracticeLibrary({ questions, onPractice,search,setSearch , difficulty , setDifficulty,topic ,setTopic,sortBy,setSortBy}) {
    const navigate = useNavigate();
    return (
        <>
        <input
    type="text"
    placeholder="Search questions..."
    value={search}
    onChange={(event) =>
        setSearch(event.target.value)
    }
    
/>
<select
    value={difficulty}
    onChange={(event) => setDifficulty(event.target.value)}
>
    <option value="All">All</option>
    <option value="Easy">Easy</option>
    <option value="Medium">Medium</option>
    <option value="Hard">Hard</option>
</select>
<select
    value={sortBy}
    onChange={(event) => setSortBy(event.target.value)}
>
    <option value="None">Default Order</option>
    <option value="Alphabetical">Alphabetical</option>
    <option value="Company">Company</option>
    <option value="Difficulty">Difficulty</option>
</select>
<select
    value={topic}
    onChange={(event) => setTopic(event.target.value)}
>
    <option value="All">All</option>
    <option value="Binary Search">Binary Search</option>
    <option value="Strings">Strings</option>
    <option value="Linked List">Linked Lists</option>
</select>


   {questions.length === 0 
   ?
    ( <p>No questions found.</p>) 
: 
( questions.map((question) => (
        <QuestionCard
            key={question.id}
            question={question}
            onPractice={onPractice}
        />
    ))
)}

            <Button
                text="Back to Dashboard"
                onClick={() => navigate("/")}
            />
        </>
    );
}

export default PracticeLibrary;