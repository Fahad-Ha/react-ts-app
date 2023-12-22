import { useEffect, useState } from "react";
import "./App.css";
import NewReminder from "./components/NewReminder";
import ReminderList from "./components/ReminderList";
import Reminder from "./models/reminder";
import reminderService from "./services/reminder";

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

  async function addReminder(title: string) {
    const newReminder = await reminderService.addReminder(title);
    setReminders([newReminder, ...reminders]);
  }

  return (
    <div className="grid items-center justify-center h-screen grid-rows-4 p-10 text-center bg-indigo-400">
      <h1 className="font-bold text-white text-7xl">Hello!</h1>
      <NewReminder onAddReminder={addReminder} />
      <ReminderList items={reminders} onRemoveReminder={removeReminder} />
    </div>
  );
}

export default App;
