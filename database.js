"use strict";
// Require better-sqlite.
const Database = require('better-sqlite3');

// Connect to a database or create one if it doesn't exist yet.
const db = new Database('user.db');

// create users database
const stmt = db.prepare(`SELECT name FROM sqlite_master WHERE type='table' and name='userinfo';`);
let row = stmt.get();
if (row === undefined) {
// Echo information about what you are doing to the console.
    console.log('Your database appears to be empty. I will initialize it now.');
// Set a const that will contain your SQL commands to initialize the database.
    const sqlInit = `
        CREATE TABLE userinfo ( id INTEGER PRIMARY KEY, email TEXT, user TEXT, pass TEXT );
		INSERT INTO userinfo (email, user, pass) VALUES ('someone@live.unc.edu', 'admin','bdc87b9c894da5168059e00ebffb9077')

    `;
// Execute SQL commands that we just wrote above.
    db.exec(sqlInit);
// Echo information about what we just did to the console.
    console.log('Your database has been initialized with a new table and one entry containing an email, a username, and password.');
} else {
// Since the database already exists, echo that to the console.
    console.log('Database exists.');
}
// Export all of the above as a module so that we can use it elsewhere.
module.exports = db;