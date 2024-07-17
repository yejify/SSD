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

export const getCommand = (obj) => {
  const idx = '../../data/'+obj+'.json';
  return axios
  .get(idx)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.error(error);
    });
};

// export const postCommand = () => {
//   return axios
//     .post(
//       'https://api2.sssd.co.kr/ssdc/v2/admin/bot/command/list',
//       {
//         //보낼 데이터
//       },
//       {
//         headers: {
//           'Content-type': 'application/json',
//           Accept: 'application/json',
//         },
//       }
//     )
//     .then((response) => {
//       // return response;
//       console.log(response.data);
//     })
//     .catch((error) => {
//       console.error(error);
//     });
// };
