import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <h1 className="text-center text-3xl font-semibold" >Meal DB Project</h1>
      <Outlet></Outlet>
    </>
  );
}

export default App;
