import axios from 'axios';
import { Configuration, VendorApiFactory, OrderApiFactory, UserApiFactory, ProductApiFactory, SupportApiFactory, CustomersApiFactory } from '../../api';

const API_BASE_URL = 'https://pardomart-node-api-vaje.onrender.com/api/v1/';
const FIXED_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODViZDlkMi0zMjIwLTQ3ZjQtYjhiYy1lZGFhNDAzMzY3YzUiLCJyb2xlIjoiYWRtaW4iLCJ2ZW5kb3JJZCI6bnVsbCwiaWF0IjoxNzYxNzM2MDk2LCJleHAiOjE3NjQzMjgwOTZ9.BHXyX-UHeKohy1D85EbEK2V6Omf-vWTxI-5FAnaETVM';

const axiosInstance = axios.create({
  baseURL: API_BASE_URL,
});

// Add token interceptor with fixed token
axiosInstance.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${FIXED_TOKEN}`;
  return config;
});

const configuration = new Configuration({
  basePath: API_BASE_URL,
  accessToken: () => FIXED_TOKEN,
  baseOptions: {
    headers: {
      'Content-Type': 'application/json',
    },
  },
});

export const vendorApi = VendorApiFactory(configuration, API_BASE_URL, axiosInstance);
export const orderApi = OrderApiFactory(configuration, API_BASE_URL, axiosInstance);
export const userApi = UserApiFactory(configuration, API_BASE_URL, axiosInstance);
export const productApi = ProductApiFactory(configuration, API_BASE_URL, axiosInstance);
export const supportApi = SupportApiFactory(configuration, API_BASE_URL, axiosInstance);
export const customersApi = CustomersApiFactory(configuration, API_BASE_URL, axiosInstance);

export { axiosInstance, configuration };
