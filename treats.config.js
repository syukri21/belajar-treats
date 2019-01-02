const path = require("path");

const config = {
    app: {
        name: "treats-example",
        slug: "treats-example"
    },
    alias: {
        "@page": path.resolve(__dirname, "./src/page")
    }
};

module.exports = config;
