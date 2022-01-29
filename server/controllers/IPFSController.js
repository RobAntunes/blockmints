const getImage = (hash) =>
  new Promise((resolve, reject) => {
    const options = {
      hostname: `${hash}.ipfs.infura-ipfs.io`,
      path: "#x-ipfs-companion-no-redirect",
      protocol: "https",
    };

    let data;
    const req = require("request").defaults({ encoding: null });
    req
      .get(
        `${options.protocol}://${options.hostname}/${options.path}`,
        (err, res, body) => {
          if (!err && res.statusCode == 200) {
            data =
              "data:" +
              res.headers["content-type"] +
              ";base64," +
              Buffer.from(body).toString("base64");
            resolve(data);
          }
        }
      )
      .on("error", (error) => {
        reject(error);
      });
  });

module.exports = {
  getImage,
};
