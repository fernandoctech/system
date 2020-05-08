import axios from 'axios';

const api = axios.create({
  baseURL: "http://192.168.30.230:81/consultas_big.php/"
});
export default api;