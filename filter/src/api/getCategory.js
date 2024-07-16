import axios from 'axios';

export const getCategory = () => {
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

export const getCommand = () => {
  return axios
    .get('https://api2.sssd.co.kr/ssdc/v2/admin/bot/command/list')
    .then((response) => {
      return response;
      // console.log(response.data)
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};
