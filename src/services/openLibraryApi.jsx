import axios from 'axios';

const API_BASE_URL = 'https://openlibrary.org/api'; // Replace with your API base URL

const apiService = axios.create({
  baseURL: API_BASE_URL,
});

export const getBookByISBN = async (id) => {
  try {
    const response = await apiService.get('/books?bibkeys=ISBN%3A'+id+'&format=json&jscmd=viewapi');
        return response.data;
    } catch (error) {
        console.error(error);
    }
};