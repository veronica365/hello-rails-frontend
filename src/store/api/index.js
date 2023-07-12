import axios from "axios";
import { API_URL } from "../../contants/env";

axios.defaults.baseURL = API_URL || 'http://localhost:3000'
const get = (path) => axios.get(path);

export { get };
