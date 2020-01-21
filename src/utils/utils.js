const https = require('https');

const httpGetRequest = url => {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        let data = '';
        res.on('data', d => {
          data += d;
        });
        res.on('end', () => {
          if (res.statusCode !== 200) {
            reject({ msg: 'url not found' });
          } else {
            resolve(JSON.parse(data));
          }
        });
      })
      .on('error', e => {
        reject(e);
      });
  });
};

module.exports = {
  httpGetRequest
};
