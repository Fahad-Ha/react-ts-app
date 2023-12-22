import Reminder from "../models/reminder";

// need interface for the props
interface ReminderListProps {
  items: Reminder[];
}

function ReminderList({ items }: ReminderListProps) {
  return (
    <div className="pt-2">
      <table className="w-full bg-[rgb(255,255,255,0.2)] border-collapse rounded-md overflow-hidden border-4">
        <thead>
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border">
              <td className="p-2 border">{item.title}</td>
              <td className="p-2 border">
                <button className="p-1 bg-red-300 rounded-md">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReminderList;
