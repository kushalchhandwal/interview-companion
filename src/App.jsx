import "./App.css";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import TopicList from "./components/TopicList";
import StatsSection from "./components/StatsSection";

function App() {

    const name = "Kushal";
    const solved = 120;
    const total = 200;

    return (
        <>
            <Header />

            <Welcome 
            name={name}
           />

         

            <TopicList/>

           <StatsSection
           solved={solved}
           total={total}/>

        </>
    );
}

export default App;