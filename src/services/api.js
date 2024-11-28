import axios from 'axios';

export const getCookie = (name) => {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([.$?*|{}()[$$\\/+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
};

const apiClient = axios.create({
  baseURL: 'http://localhost:5173', // Укажите URL сервера
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
// --- UUID ---
export const getUUID = async () => {
  try {
    const response = await apiClient.get('/session/get_uuid', );
    return response.data;
  } catch (error) {
    console.error('Error fetching parameters:', error);
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
export const requestToLLM = async (question, uuid) => {
  try {
    const response = await apiClient.post(`/llm/request?question=${question}&uuid_token=${uuid}`);
    return response.data;
  } catch (error) {
    console.error('Error making LLM request:', error);
    throw error;
  }
};

// --- Параметры ---
// Получение параметров
export const getParams = async (uuid) => {
  try {
    const response = await apiClient.get(`/params/get?uuid_token=${uuid}`);
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
