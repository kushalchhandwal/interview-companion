import "./App.css";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";




function App() {

    const name = "Kushal";
    const solved = 120;
    const total = 200;

    return (
        <>
            <Header />

            
<Dashboard
name={name}
solved={solved}
total={total}/>
         

          

          

        </>
    );
}

export default App;