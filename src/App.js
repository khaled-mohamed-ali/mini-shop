// import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Outlet} from "react-router-dom";
import {Main} from "./pages/mainPage/main"

import {useSelector} from "react-redux";
import { redirect } from "react-router-dom";
import {NotificationBar} from "./components/notificationBar/notificationBar";

function App() {


  return (
    <div className="App">
        <Main/>
        <Outlet/>
    </div>
  );
}

export default App;
