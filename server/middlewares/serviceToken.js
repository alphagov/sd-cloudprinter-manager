const { auth } = require('google-auth-library');
const fs = require('fs');

module.exports = {
  testCreds: async id => {
    const keys = await readThisFile();
    const client = auth.fromJSON(JSON.parse(keys));

    client.scopes = ['https://www.googleapis.com/auth/cloudprint'];
    await client.authorize();
    const url = `https://www.google.com/cloudprint/search`;
    const res = await client.request({ url });
    console.log(res.data);
  }
};

async function readThisFile() {
  return await fs.readFileSync('/usr/src/app/config/gcpmanager.json', 'utf8');
}
