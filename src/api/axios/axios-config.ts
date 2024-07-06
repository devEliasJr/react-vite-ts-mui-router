import axios from "axios";
import Cookies from "js-cookie";
import useToast from "../../componentes/toast/useToast";


const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


// Add an interceptor to include the access token in the Authorization header
apiClient.interceptors.request.use((config) => {
  const accessToken = Cookies.get("accessToken");

  if (accessToken) {
    // Provide a default value for the headers object if it is undefined
    config.headers = config.headers || {};
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      Cookies.remove('access_token', { path: '/' });
      localStorage.setItem("userData", "");
      window.location.href = "/";
    } else if (error.response && error.response.status > 401 && error.response.status < 500) {
      console.log("ERRO:" + error.response.data["message"]);
      useToast({message: error.response.data["message"], type: "error"});
    }
    return Promise.reject(error);
  }
);

export default apiClient;