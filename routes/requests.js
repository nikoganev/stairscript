const router = require('express').Router();
let Request = require('../models/request.model');

router.route('/').get((req, res) => {
  Request.find()
    .then(requests => res.json(requests))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const campaignName = req.body.campaignName;
  const operationalUnit = req.body.operationalUnit;
  const therapeuticArea = req.body.therapeuticArea;
  const product = req.body.product;

  const newRequest = new Request({
    campaignName,
    operationalUnit,
    therapeuticArea,
    product
  });

  newRequest.save()
    .then(() => res.json('Request added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Request.findById(req.params.id)
    .then(request => res.json(request))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Request.findByIdAndDelete(req.params.id)
    .then(() => res.json('Request deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Request.findById(req.params.id)
    .then(request => {
      request.username = req.body.username;
      request.description = req.body.description;
      request.duration = Number(req.body.duration);
      request.date = Date.parse(req.body.date);

      request.save()
        .then(() => res.json('Request updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
