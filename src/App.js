import { Route, Routes } from "react-router-dom";
import Calendar, {Error, Main} from "./components/Calendar"; //캘린더 
//import Modal from "./components/Modal";

const App = () => (
  <Routes>
    <Route path='/' element={<Main />}/>
    <Route path='/Calendar' element={<Calendar />}/>
    <Route path='*' element={<Error />}/>
  </Routes>
);
export default App;
