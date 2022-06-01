import Todos from "./components/Todos";
import "./App.css";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";

function App() {
  const { isAuthorized,login,logout } = useContext(AuthContext);

 

  return (
    <div className="App">
      <button
        onClick={() => {
          if (isAuthorized) logout();
          else login("R", "Z");
        }}
      >


        {isAuthorized ? "Logout" : "Login"}
      </button>
      
      {isAuthorized && <Todos />}
      
    </div>
  );
}
export default App;
