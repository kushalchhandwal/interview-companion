function TopicList() {
    const topics = [
    "Arrays",
    "Hashing",
    "Binary Search",
    
];
    return (
        <>
            <h2>Topics Completed</h2>

            <ul>
                {topics.map((topic)=>(
    <li key={topic}>{topic}</li>
))}
            </ul>
        </>
    );
}

export default TopicList;