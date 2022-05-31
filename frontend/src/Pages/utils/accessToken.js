import axios from "axios";

export async function set_access_token() {
   let refresh_token = localStorage.getItem("refresh_token");
   let response = await axios.post("http://127.0.0.1:8000/api/token/refresh/", { refresh: refresh_token });
   if (response.status == 200) {
      // console.log("token is", response.data.access);
      localStorage.setItem("access_token", response.data.access);
   }
}
