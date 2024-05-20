const users = [
  {
    id: 1,
    name: "Mussie Teshome",
  },
  {
    id: 2,
    name: "Minilik Shumete",
  },
];

function getOneUser(id) {
  const user = users.filter((item) => item.id == id);
  if (!user) return;

  return user[0];
}

module.exports = getOneUser;
