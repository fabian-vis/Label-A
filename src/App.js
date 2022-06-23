
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
  
// import Home component
import Home from "./components/Home";
// import About component
import Detail from "./components/Detail";

  
function App() {
  return (
    <>
        <Routes>
          <Route exact path="/" element={Home()} />
          <Route path="/detail" element={Detail()} />
        </Routes>
    </>
  );
}
  
export default App;

