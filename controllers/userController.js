const data = require("./../data/user.json");
const fs = require("fs");
const path = require("path");

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

module.exports.saveUser = (req, res, next) => {
  const user = req.body;

  const allUser = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, "../data/user.json"))
  );

  allUser.push(user);

  fs.writeFileSync(
    path.resolve(__dirname, "../data/user.json"),
    JSON.stringify(allUser)
  );

  res.status(200).send({
    message: "User saved successfully",
  });
};

module.exports.updateUser = (req, res, next) => {
  const { id } = req.params;
  const user = req.body;

  const userToUpdate = data.find(item => item.Id == id);
  const remaining = data.filter(item => item.Id !== parseInt(id));

  userToUpdate.photoUrl = user.photoUrl;

  const updatedData = [userToUpdate, ...remaining];

  fs.writeFileSync(
    path.resolve(__dirname, "../data/user.json"),
    JSON.stringify(updatedData)
  );

  res.send(updatedData);
};
