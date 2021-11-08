import axios from 'axios';

const getAccounts = (member_num) => {
  return new Promise((resolve, reject) =>
  {
    axios.get(`http://localhost:8000/api/accounts?member_num=${member_num}`).then((res) =>
    {
      console.log(res.data)
      resolve(res.data);
    }).catch((err) =>
    {
      reject(err);
    });
  });
};

export default {getAccounts};