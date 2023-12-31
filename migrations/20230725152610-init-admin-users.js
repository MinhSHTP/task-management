const bcrypt = require("bcrypt");
const { BCRYPT_ROUNDS } = require("../utils/Constants");

module.exports = {
  async up(db, client) {
    console.log("Being add admin users");
    const salt = bcrypt.genSaltSync(BCRYPT_ROUNDS);
    const adminUsers = [
      {
        username: "admin01",
        password: bcrypt.hashSync("admin01", salt),
        email: "admin01@yopmail.com",
        display_name: "Administrator 01",
        role: "admin",
        joined_group: [],
        joining_group: [],
        created_at: new Date(),
      },
      {
        username: "admin02",
        password: bcrypt.hashSync("admin02", salt),
        email: "admin02@yopmail.com",
        display_name: "Administrator 02",
        role: "admin",
        joined_group: [],
        joining_group: [],
        created_at: new Date(),
      },
    ];

    const addUserPromises = adminUsers.map(
      (user) =>
        new Promise((resolve, reject) => {
          try {
            db.collection("users").insertOne(user).then(resolve).catch(reject);
          } catch (err) {
            reject(err);
          }
        })
    );
    await Promise.all(addUserPromises);
    console.log("Added admin users");
  },

  async down(db, client) {},
};
