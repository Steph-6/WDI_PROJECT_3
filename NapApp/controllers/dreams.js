module.exports = {
  create: dreamsCreate,
  show: dreamsShow
};

const Dream  = require('../models/dream');
const User   = require('../models/user');


function dreamsCreate(req, res){
  User.findById(req.params.id,(err, user) => {
    if (err) return res.status(500).json(err);
    if (!dream) return res.status(404).json({ error: 'No Dreams found.'});

    const dream = new Dream(req.body);

    dream.save((err, dream) => {
      if (err) return res.status(500).json(err);

      user.dreams.push(dream);

      user.save(err => {
        if (err) return res.status(500).json(err);
        return res.status(201).json(dream);

      });
    });
  });
}

function dreamsShow(req, res){
  Dream.findById(req.params.id, (err, dream) => {
    if (err) return res.status(500).json(err);
    if (!dream) return res.status(404).json({ error: 'No Dreams found.'});
    return res.status(200).json(dream);
  });
}
