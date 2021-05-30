import axios from "axios";

const authApi = {
   login: () => axios.get("users.json"),
};

export default authApi;
