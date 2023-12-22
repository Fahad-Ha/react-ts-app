import { useEffect, useState } from "react";
import "./App.css";
import ReminderList from "./components/ReminderList";
import logo from "./logo.svg";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";
import NewReminder from "./components/NewReminder";

function App() {
  const [reminders, setReminders] = useState<Reminder[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    const res = await reminderService.getReminders();
    setReminders(res);
  }

  function removeReminder(id: number) {
    setReminders(reminders.filter((reminder) => reminder.id !== id));
  }

  return (
    <div className="grid items-center justify-center h-screen grid-rows-4 p-10 text-center bg-indigo-400">
      <h1 className="font-bold text-white text-7xl">Hello!</h1>
      <NewReminder />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
