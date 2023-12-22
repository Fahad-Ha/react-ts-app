import { useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import logo from "./logo.svg";
import Reminder from "./models/reminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([
    { id: 1, title: "Just Do It" },
  ]);
  const test = () => {
    setReminders([...reminders, { id: 2, title: "Just Do 2" }]);
  };

  const api = () => {
    console.log(reminder);
  };

  return (
    <div className="grid items-center justify-center h-screen grid-rows-3 p-10 bg-indigo-400 App">
      <img
        src={logo}
        className="bg-red-300 shadow-xl App-logo w-72 rounded-xl"
        alt="logo"
      />
      <div className="grid gap-12 pt-12">
        <h1 className="font-bold text-white text-7xl">Hello!</h1>
        <ReminderList items={reminders} />
        <button
          onClick={api}
          className="h-16 mx-auto text-4xl font-semibold text-white bg-teal-500 rounded-md shadow-xl w-44"
        >
          Test
        </button>
      </div>
    </div>
  );
}

export default App;
