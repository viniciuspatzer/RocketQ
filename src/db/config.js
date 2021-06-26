const sqlite3 = require('sqlite3');
const { open } = sqlite = require('sqlite');

module.exports = () => {
    return open({
        filename: './src/db/rocketq.sqlite',
        driver: sqlite3.Database,
    })
}