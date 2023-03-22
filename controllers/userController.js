const data = require("./../data/user.json");

module.exports.getRandomUser = (req, res, next) => {
  const randomId = Math.floor(Math.random() * data.length) + 1;

  const randomUser = data.find(item => item.Id == randomId);

  res.send(JSON.stringify(randomUser));
};
