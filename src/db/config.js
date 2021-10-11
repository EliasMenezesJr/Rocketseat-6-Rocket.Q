const sqlite3 = require("sqlite3");
const { open } = require("sqlite") // importante só a função open do sqlite

module.exports = () => 
    open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    });
