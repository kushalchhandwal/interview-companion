import Welcome from "../components/Welcome";
import TopicList from "../components/TopicList";
import StatsSection from "../components/StatsSection";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";

function Dashboard({ name, solved, total }) {
    const navigate = useNavigate();
    return ( 
        <>
            <Welcome name={name} />

            <TopicList />

            <StatsSection
                solved={solved}
                total={total}
            />

            <Button
                text="Start Practice"
                onClick={()=>navigate("/practice")}
            />
        </>
    );
}

export default Dashboard;