const BACK4APP_APP_ID = 'JFNojTiRlSZJj59FA9WOLUlbNCan2INiJEsz3GFr';
const BACK4APP_REST_KEY = '06Vo4lvHm8kDzZgpWnyjIzyEHav8PkGQPPQ1LDVx';
const BASE_URL = 'https://parseapi.back4app.com/classes';

const headers = {
  'X-Parse-Application-Id': BACK4APP_APP_ID,
  'X-Parse-REST-API-Key': BACK4APP_REST_KEY,
  'Content-Type': 'application/json',
};

export const fetchClassData = async (className) => {
  try {
    const response = await fetch(`${BASE_URL}/${className}`, { headers });
    const data = await response.json();
    return data.results || [];
  } catch (error) {
    console.error(`Erro ao buscar ${className}:`, error);
    return [];
  }
};

// Adicione esta função para que o createRecord fique disponível para o feedback.js
export const createRecord = async (className, data) => {
  try {
    const response = await fetch(`${BASE_URL}/${className}`, {
      method: 'POST',
      headers,
      body: JSON.stringify(data),
    });
    return await response.json();
  } catch (error) {
    console.error(`Erro ao criar registo em ${className}:`, error);
    throw error;
  }
};