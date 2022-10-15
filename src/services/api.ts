import axios from "axios";
export const api = axios.create({
  baseURL: "https://react-finance-two.vercel.app/api",
});
