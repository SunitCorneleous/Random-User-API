const data = require("./../data/user.json");

module.exports.getRandomUser = (req, res, next) => {
  const randomId = Math.floor(Math.random() * data.length) + 1;

  const randomUser = data.find(item => item.Id == randomId);

  res.send(JSON.stringify(randomUser));
};

module.exports.getAllUser = (req, res, next) => {
  const { limit } = req.query;

  const allUser = data.slice(0, limit);

  //   console.log(allUser);

  res.send(allUser);
};
