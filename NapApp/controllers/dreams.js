module.exports = {
  create: dreamsCreate,
  show: dreamsShow
};

const Dream  = require('../models/dream');

function dreamsCreate(req, res){
  const dream = new Dream(req.body.dream);
  dream.user  = req.user._id;
  dream.save((err, dream) => {
    if (err) return res.status(500).json(err);
    return res.status(201).json(dream);
  });
}

function dreamsShow(req, res){
  Dream.findById(req.params.id, (err, dream) => {
    if (err) return res.status(500).json(err);
    if (!dream) return res.status(404).json({ error: 'No Dreams found.'});
    return res.status(200).json(dream);
  });
}
