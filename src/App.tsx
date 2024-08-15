import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import AddHabit from "./components/AddHabit";
import ViewWeekly from "./components/ViewWeekly";

const App = () => {
  return (
    <>
      <NavBar title="Habit Tracker"></NavBar>
      <Routes>
        <Route path="/" element={<AddHabit />}></Route>
        <Route path="/view-weekly" element={<ViewWeekly />}></Route>
      </Routes>
    </>
  );
};

export default App;
