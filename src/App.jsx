import { useState ,useEffect} from "react";
import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import PracticePage from "./pages/PracticePage"; // Use the correct filename
import { Routes, Route } from "react-router-dom";


function App() {
    const name = "Kushal";
    const total = 200;

    const [solved, setSolved] = useState(120);
   
    


     useEffect(()=>{const savedSolved=localStorage.getItem("solved");
    if(savedSolved!==null){
        setSolved(Number(savedSolved));}
    },
    []
);

        useEffect(()=>{localStorage.setItem("solved",solved);},[solved]);

    return (
        <>
            <Header />

           <Routes>

    <Route
        path="/"
        element={
            <Dashboard
                name={name}
                solved={solved}
                total={total}
            />
        }
    />

    <Route
        path="/practice"
        element={
            <PracticePage
                onSolved={() =>
                    setSolved(previous => previous + 1)
                }
            />
        }
    />
    <Route
    path="/question/:id"
    element={
        <PracticePage
            onSolved={() =>
                setSolved(previous => previous + 1)
            }
        />
    }
/>

</Routes>
        </>
    );
}

export default App;