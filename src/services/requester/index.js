import axios from 'axios';

const requester = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

requester.interceptors.response.use((response) => (
  response.data
), (error) => {
  const { status, message } = error.response;
  return `${status} - ${message}`;
}); 

export default requester;
