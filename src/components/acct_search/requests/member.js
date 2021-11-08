import axios from 'axios'

const getMembers = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get('http://localhost:8000/api/members/').then((res) =>
    {
      resolve(res.data)
    }).catch((err) =>
    {
      reject(err)
    });
  });
};

const getMember = (id) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`http//localhost:8000/api/members/${id}`).then((res) =>
    {
      resolve(res.data)
      console.log(res.data)
    }).catch((err) =>
    {
      reject(err)
    });
  });
};

export default {getMembers, getMember};