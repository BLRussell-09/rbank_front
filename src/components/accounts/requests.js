import axios from 'axios';

const getAccounts = (user_id) => {
  return new Promise((resolve, reject) =>
  {
    axios.get(`/accounts?user_id=${user_id}`).then((res) =>
    {
      resolve(res.data);
    }).catch((err) =>
    {
      reject(err);
    });
  });
};

const getAccount = (id) => {
  return new Promise((resolve, reject) => {
    axios.get(`/accounts/${id}`).then((res) => {
      var account = fixDate(res.data);
      resolve(account);
    }).catch((err) => {
      reject(err);
    });
  });
};


const fixDate = (account) => {
  let created = new Date(account.created_at);
  let updated = new Date(account.updated_at);

  account.created_at = created.toDateString();
  account.updated_at = updated.toDateString();
  return account
}

export default {getAccounts, getAccount};