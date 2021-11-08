import axios from 'axios'

const fluffData = (arr) =>
{
  var data = [];

  arr.forEach(elem =>
    {
      var mem = {
        acct_num: elem.id,
        first_name: elem.first_name,
        last_name: elem.last_name
      }
      data.push(mem)
    });

  return(data);
};

const getMembers = () =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get('http://localhost:8000/api/members/').then((res) =>
    {
      resolve(fluffData(res.data));
    }).catch((err) =>
    {
      reject(err);
    });
  });
};

const getMember = (memberNum) =>
{
  return new Promise((resolve, reject) =>
  {
    axios.get(`http://localhost:8000/api/members/${memberNum}/`).then((res) =>
    {
      resolve(res.data);
    }).catch((err) => {
      reject(err);
    })
  })
}

export default {getMembers, getMember};