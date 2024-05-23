const users = require("@server/mock/dbdata.json");

function getOneUser(id) {
  const user = users.filter((item) => item.id == id);
  if (!user) return;

  return user[0];
}

module.exports = getOneUser;
