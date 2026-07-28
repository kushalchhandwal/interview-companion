import { useState } from "react";
import PracticeLibrary from "../components/PracticeLibrary";
import QuestionView from "../components/QuestionView";
import questionsData from "../data/questions";
import { useParams } from "react-router-dom";

const difficultyOrder = {
        Easy: 1,
        Medium: 2,
        Hard: 3
    };

function PracticePage({ onSolved}) {
    
    const [questions, setQuestions] = useState(questionsData);
const { id } = useParams();
    const selectedQuestion = questions.find(
    (question) => question.id === Number(id)
);
    const[search, setSearch]=useState("");
    const [sortBy,setSortBy]=useState("None");
   
const [difficulty,setDifficulty]=useState("All");

const [topic,setTopic]=useState("All");

const filteredQuestions = questions.filter((question) =>
    question.title
        .toLowerCase()
        .includes(search.toLowerCase()) &&
    (
        difficulty === "All" ||
        question.difficulty === difficulty
    ) &&
    (
         topic === "All" ||
        question.topic === topic

    )
);
const sortedQuestions = [...filteredQuestions];

if (sortBy === "Alphabetical") {
    sortedQuestions.sort((a, b) =>
        a.title.localeCompare(b.title)
    );
}

else if (sortBy === "Company") {
    sortedQuestions.sort((a, b) =>
        a.company.localeCompare(b.company)
    );
}

else if (sortBy === "Difficulty") {
    

    sortedQuestions.sort((a, b) =>
        difficultyOrder[a.difficulty] -
        difficultyOrder[b.difficulty]
    );
}

    function handleSolved() {
        if (!selectedQuestion || selectedQuestion.solved) return;

        setQuestions(
            questions.map((question) =>
                question.id === selectedQuestion.id
                    ? { ...question, solved: true }
                    : question
            )
        );

       

        onSolved();
    }
    if (id && !selectedQuestion) {
    return <p>Question not found.</p>;
}

        return id ? (
    <QuestionView
        question={selectedQuestion}
        
        onSolved={handleSolved}
    />
) 
    
     : (
        <PracticeLibrary
            questions={sortedQuestions}
        
        
            search={search}
            setSearch={setSearch}
            difficulty={difficulty}
            setDifficulty={setDifficulty}
            topic={topic}
            setTopic={setTopic}
            sortBy={sortBy}
            setSortBy={setSortBy}
            
        />
    );}
export default PracticePage;