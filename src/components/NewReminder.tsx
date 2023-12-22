import React, { useState } from "react";

// Added JSX.Element to avoid errors
function NewReminder(): JSX.Element {
  const [title, setTitle] = useState("");

  return (
    <form className="flex flex-col gap-2">
      <label className="text-xl font-semibold text-white" htmlFor="title">
        Title
      </label>
      <input
        className="h-8 px-2 bg-[rgb(255,255,255,0.6)] rounded-md"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="title"
        type="text"
      />
      <button
        className="h-16 mx-auto text-xl font-bold text-white bg-teal-500 rounded-md shadow-xl w-44"
        type="submit"
      >
        Add Reminder
      </button>
    </form>
  );
}

export default NewReminder;
