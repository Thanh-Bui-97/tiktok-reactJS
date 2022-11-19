// Đây là file chứa "công cụ" làm việc với API (axios).
// VD: get, push, cancel,...
import axios from 'axios';

const httpRequest = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  const response = await httpRequest.get(path, options);

  return response.data;
};

export default httpRequest;
