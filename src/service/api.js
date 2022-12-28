import axios from 'axios';
axios.defaults.baseURL = 'https://pixabay.com/api/';

const API_KEY = '31498114-afd850579f929b713e5d5f459';
axios.defaults.baseURL = 'https://pixabay.com/api/';
axios.defaults.params = {

  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
};

export const getImages = async (query, page) => {
  const { data } = await axios.get(`?q=${query}&page=${page}&key=${API_KEY}`);

  return data;
};
