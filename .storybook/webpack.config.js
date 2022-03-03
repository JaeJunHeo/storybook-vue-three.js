const path = require("path");

module.exports = async ({ config, mode }) => {
    config.resolve.extensions.push(".ts", ".tsx", ".vue", ".css", ".less", ".scss", ".sass", ".html");

    config.module.rules.push({
        test: /\.scss$/,
        use: ['vue-style-loader', "style-loader", "css-loader", {
            loader: "sass-loader",
            options: {
                additionalData:`@import "src/stories/config.scss";`
            }
        }],
        include: path.resolve(__dirname, "../")
    });

    config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src/'),
        vue$: 'vue/dist/vue.esm.js'
    };

    return config;
}