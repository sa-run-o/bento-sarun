import axios from "axios";

// Base URL and credentials from environment variables
const BASE_URL = process.env.REACT_APP_BACKEND_URL;
const username = process.env.REACT_APP_BACKEND_USER_NAME || "";
const password = process.env.REACT_APP_BACKEND_PASSWORD || "";

// Encode username and password using btoa
const encoded = btoa(`${username}:${password}`);

// Create Axios instance with basic auth header
const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Basic ${encoded}`,
  },
});

export default instance;
