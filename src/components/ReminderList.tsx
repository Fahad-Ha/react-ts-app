import Reminder from "../models/reminder";

// need interface for the props
interface ReminderListProps {
  items: Reminder[];
  onRemoveReminder: (id: number) => void;
}

function ReminderList({ items, onRemoveReminder }: ReminderListProps) {
  return (
    <div className="pt-2 text-white">
      <table className="w-96 bg-[rgb(255,255,255,0.2)] border-collapse rounded-md overflow-hidden border-4">
        <thead>
          <tr>
            <th className="p-2 border">Title</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id} className="border">
              <td className="p-2 font-semibold border">{item.title}</td>
              <td className="p-2 border">
                <button
                  onClick={() => onRemoveReminder(item.id)}
                  className="p-2 font-semibold bg-red-400 rounded-md"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ReminderList;
