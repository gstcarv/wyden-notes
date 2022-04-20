require("dotenv").config();

const config = {
    PORT: process.env.PORT || 3000,
    DATABASE: {
        URL: process.env.DB_URL,
        NAME: process.env.DB_NAME,
        USER: process.env.DB_USER,
        PASSWORD: process.env.DB_PASSWORD,

        getConnectionString: () => `mongodb+srv://${config.DATABASE.USER}:${config.DATABASE.PASSWORD}@${config.DATABASE.URL}/${config.DATABASE.NAME}?retryWrites=true&w=majority`,
    },
};

module.exports = config;
