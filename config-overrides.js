const path = require('path');

module.exports = function override(config, env) {
    config["resolve"] = {
        alias: {
            src: path.resolve(__dirname, 'src/'),
            public: path.resolve(__dirname, 'public/'),
        },
        extensions: ['.js']
    }

    return config;
}