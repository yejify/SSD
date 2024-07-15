import axios from 'axios';

const getCategory = () => {
  return axios
    .get('../../data/categoryData.json')
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export default getCategory;
