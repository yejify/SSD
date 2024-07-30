import axios from 'axios';

export const getCategory = () => {
  return axios
    .get('/ssdc/v2/admin/bot/command/list')
    .then((response) => {
      // console.log(response.data.data)
      return response.data.data;
    })
    .catch((error) => {
      console.error(error);
      return [];
    });
};

export const getCommand = (obj) => {
  const idx = '/ssdc/v2/admin/bot/command/list/' + obj;
  return axios
  .get(idx)
    .then((response) => {
      // console.log(response.data.data)
      return response.data.data;
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
