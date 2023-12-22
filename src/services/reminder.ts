import axios from "axios";
import Reminder from "../models/reminder";

class ReminderService {
  http = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
  });

  async getReminders() {
    // await because it return a promise
    const response = await this.http.get<Reminder[]>("/todos?_limit=4");
    return response.data;
  }

  async addReminder(title: string) {
    const response = await this.http.post<Reminder[]>("/todos", { title });
    return response.data;
  }

  async removeReminder(id: number) {
    const response = await this.http.delete(`/todos/${id}`);
    return response.data;
  }
}

export default new ReminderService();
