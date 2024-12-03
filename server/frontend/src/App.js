import LoginPanel from "./components/Login/Login"
import { Routes, Route } from "react-router-dom";
import Register from "./components/Register/Register";
import Dealers from './components/Dealers/Dealers';
import Dealer from './components/Dealers/Dealer';
import PostReview from "./components/Dealers/PostReview";


function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPanel />} />
    </Routes>
  );
}
export default App;
