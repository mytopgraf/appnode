export default async ({ req, res, log, error }) => {
  log(req.method);

  if (req.method === 'GET') {
    return res.send('Hi there');
  }

  if (req.method === 'POST') {
    return res.json({
      'sendData': req.body,
      'DOGENV': process.env.DOGENV,
      'CATENV': process.env.CATENV
    })
  }
};
