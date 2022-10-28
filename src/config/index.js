const token = JSON.parse(sessionStorage.getItem(process.env.REACT_APP_SESSION_SECRET));
exports.REACT_APP_SESSION_SECRET = process.env.REACT_APP_SESSION_SECRET || '';
exports.REACT_APP_API = process.env.REACT_APP_API || '';
exports.PRIVATE_HEADERS = {
  headers: {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    Authorization: `${token}`,
  },
};
