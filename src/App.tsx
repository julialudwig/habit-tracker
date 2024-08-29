import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddHabit from "./components/AddHabit";
import ViewWeekly from "./components/ViewWeekly";

const App = () => {
  return (
    <>
      <NavBar title="Habit Tracker"></NavBar>
      <div className="container mt-5">
        <Routes>
          <Route path="/" element={<AddHabit />}></Route>
          <Route path="/view-weekly" element={<ViewWeekly />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default App;
