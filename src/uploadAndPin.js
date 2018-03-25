const ipfsAPI = require('ipfs-api');

var ipfs = ipfsAPI({host: 'localhost', port: '5001', protocol: 'http'})

async function uploadAndPin(buffer) {
  const resp = await ipfs.files.add(buffer);

  const hash = resp[0].hash;

  await ipfs.pin.add(hash);

  return hash;
}

module.exports = uploadAndPin;
