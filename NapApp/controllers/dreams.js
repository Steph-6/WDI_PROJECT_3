module.exports = {
  index: dreamsIndex,
  create: dreamsCreate,
  show: dreamsShow,
  update: dreamsUpdate,
  delete: dreamsDelete
};

const Dream  = require('../models/dream');

function dreamsIndex(req, res){
  const query = {};
  if(req.query.user) query.user = req.query.user;
  Dream.find(query, (err, dreams) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.status(200).json(dreams);
  });
}

function dreamsCreate(req, res){
  const dream = new Dream(req.body.dream);
  dream.user  = req.user._id;
  dream.save((err, dream) => {
    console.log(err);
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

function dreamsUpdate(req, res){
  Dream.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, dream) => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    if (!dream) return res.status(404).json({ message: 'User not found.' });
    return res.status(200).json(dream);
  });
}

function dreamsDelete(req, res){
  Dream.findByIdAndRemove(req.params.id, err => {
    if (err) return res.status(500).json({ message: 'Something went wrong.' });
    return res.sendStatus(204);
  });
}
