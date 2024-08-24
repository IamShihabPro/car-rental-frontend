import { Outlet } from "react-router-dom";
import Navbar from "./component/Navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Outlet/>
      </div>
    </div>
  );
};

export default App;