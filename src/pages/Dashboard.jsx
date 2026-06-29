import Welcome from "../components/Welcome";
import TopicList from "../components/TopicList";
import StatsSection from "../components/StatsSection";
import { useState } from "react";
import Button from "../components/Button";

function Dashboard({name,solved,total}){
    const [started, setStarted] = useState(false);
    
    return (
        started
        ? <><p>Practice Session Started!</p>
        <Button
    text="Back to Dashboard"
    onClick={() => setStarted(false)}
/>
        </>
    
        
        : 
        
        
        <>
        
        <Welcome 
            name={name}
           />
          <TopicList/>
          <StatsSection
           solved={solved}
           total={total}/>
           <Button
           text="Start Practice"
           onClick={()=>setStarted(true)}/>
           
            
        </>
         
    );
}
export default Dashboard;