module.exports = {
  async up(db, client) {
    console.log("Being add groups");
    const groups = [
      {
        name: "Front-end Group",
        members: [],
        created_at: new Date(),
      },
      {
        name: "Back-end Group",
        members: [],
        created_at: new Date(),
      },
    ];

    const addGroupPromises = groups.map(
      (group) =>
        new Promise((resolve, reject) => {
          try {
            db.collection("groups")
              .insertOne(group)
              .then(resolve)
              .catch(reject);
          } catch (err) {
            reject(err);
          }
        })
    );
    await Promise.all(addGroupPromises);
    console.log("Added groups");
  },

  async down(db, client) {},
};
