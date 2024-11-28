import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://your-api-endpoint.com', // Укажите URL сервера
  withCredentials: true, // Для отправки куки (например, auth_token)
  headers: {
    'Content-Type': 'application/json',
  },
});

// --- Сессия ---
export const createSession = async () => {
  try {
    const response = await apiClient.post('/session/create');
    return response.data;
  } catch (error) {
    console.error('Error creating session:', error);
    throw error;
  }
};

// --- LLM ---
// Загрузка файла
export const loadFile = async (file) => {
  const formData = new FormData();
  formData.append('file', file);

  try {
    const response = await apiClient.post('/llm/load_file', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error loading file:', error);
    throw error;
  }
};

// Загрузка по URL
export const loadUrl = async (url) => {
  try {
    const response = await apiClient.post('/llm/load_url', { url });
    return response.data;
  } catch (error) {
    console.error('Error loading URL:', error);
    throw error;
  }
};

// Запрос к LLM
export const requestToLLM = async () => {
  try {
    const response = await apiClient.post('/llm/request');
    return response.data;
  } catch (error) {
    console.error('Error making LLM request:', error);
    throw error;
  }
};

// --- Параметры ---
// Получение параметров
export const getParams = async () => {
  try {
    const response = await apiClient.get('/params/get');
    return response.data;
  } catch (error) {
    console.error('Error fetching parameters:', error);
    throw error;
  }
};

// Обновление параметров
export const updateParams = async (params) => {
  try {
    const response = await apiClient.put('/params/change', params);
    return response.data;
  } catch (error) {
    console.error('Error updating parameters:', error);
    throw error;
  }
};
