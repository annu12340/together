import axios from "axios";

export async function set_access_token() {
   let refresh_token = localStorage.getItem("refresh_token");
   let response = await axios.post("http://127.0.0.1:8000/api/token/refresh/", { refresh: refresh_token });
   if (response.status == 200) {
      // console.log("token is", response.data.access);
      localStorage.setItem("access_token", response.data.access);
   }
}

// access: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjUzOTkyMjUzLCJpYXQiOjE2NTM5OTE5NTMsImp0aSI6IjVjMzRlODU0YjBlYTRjZGJhZGJjMWYyZTg0YzgzNjhlIiwidXNlcl9pZCI6Nn0.W2aEv7z0FCLiEJd2jpg1_xxoWYArhhNbwmXOS_LuaGg"
// refresh: "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoicmVmcmVzaCIsImV4cCI6MTY1NDA3ODM1MywiaWF0IjoxNjUzOTkxOTUzLCJqdGkiOiJkNzgxM2Q3NGI4OWY0YzFhODk5YzBmOTYwNjk3YmRhOCIsInVzZXJfaWQiOjZ9.Uf15Hhk43FCsbmVZN4ycla-C-UKUeNJgK3t42PN0fg8"
