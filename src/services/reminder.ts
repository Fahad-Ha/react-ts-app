import axios from "axios";

class ReminderService {
  http = axios.create({
    baseURL: "http://jsonplaceholder.typeicode.com/",
  });

  async getReminders() {
    // await because it return a promise
    const response = await this.http.get(
      "https://jsonplaceholder.typeicode.com"
    );
    return response.data();
  }
}
