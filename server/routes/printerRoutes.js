const axios = require('axios');
const requireLogin = require('../middlewares/requireLogin');
const checkToken = require('../middlewares/checkToken');

module.exports = app => {
  app.get('/api/google/printer/search', requireLogin, async (req, res) => {
    let uri = 'https://www.google.com/cloudprint/search';

    // get the admin token from the db
    // will use this for OAuth
    const cToken = await checkToken();

    // headers: {
    //   Authorization: `OAuth ${req.user.accessToken}`;
    // }

    const response = await axios.get(uri, {
      headers: {
        Authorization: `OAuth ${req.user.accessToken}`
      }
    });

    if (response.data.success) {
      res.send(response.data.printers);
    }
  });
  app.get('/api/google/printer/:id', requireLogin, async (req, res) => {
    let uri = `https://www.google.com/cloudprint/printer`;

    // get the admin token from the db
    // will use this for OAuth
    const cToken = await checkToken();

    const response = await axios.get(uri, {
      headers: {
        Authorization: `OAuth ${req.user.accessToken}`
      },
      params: {
        printerid: req.params.id
      }
    });

    if (response.data.success) {
      res.send(response.data.printers[0]);
    }
  });

  app.get(
    '/api/google/printer/jobs/:printerId',
    requireLogin,
    async (req, res) => {
      let uri = `https://www.google.com/cloudprint/jobs`;

      // get the admin token from the db
      // will use this for OAuth
      const cToken = await checkToken();

      const response = await axios.get(uri, {
        headers: {
          Authorization: `OAuth ${req.user.accessToken}`
        },
        params: {
          printerid: req.params.printerId
        }
      });

      if (response.data.success) {
        res.send(response.data.jobs);
      }
    }
  );

  app.get(
    '/api/google/printer/deletejob/:jobId',
    requireLogin,
    async (req, res) => {
      let uri = `https://www.google.com/cloudprint/deletejob`;

      // get the admin token from the db
      // will use this for OAuth
      const cToken = await checkToken();

      const response = await axios.get(uri, {
        headers: {
          Authorization: `OAuth ${req.user.accessToken}`
        },
        params: {
          jobid: req.params.jobId
        }
      });
      if (response.data.success) {
        console.log(response.data);
        res.send(response.data);
      }
    }
  );

  app.get('/api/google/mdm', requireLogin, async (req, res) => {
    // console.log(req.user);
    try {
      const customerId = 'C01ppujwc';
      let uri = `https://www.googleapis.com/admin/directory/v1/customer/${customerId}/devices/mobile`;
      const resM = await axios.get(uri, {
        headers: {
          Authorization: `OAuth ${req.user.accessToken}`
        }
      });
      // console.log(res.status);
      return res.send(resM.data);
    } catch (error) {
      console.log(error);
      res.status(418).send(res.error);
    }
  });

  // app.get('/api/printer/token', requireLogin, (req, res) => {
  //   // fetch token from location to be determined
  //   console.log('we are here');
  //   res.send('nothing here just yet');
  // });
};
