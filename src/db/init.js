const Database = require("./config")

const initDb = {
    async init (){ 
        const db = await Database() // await = esperar rodar Database() para rodar a próxima linha de código  ** a função tem que ser async par ausar await

        await db.exec(`CREATE TABLE rooms (
            id INTEGER PRIMARY KEY, 
            pass TEXT
        )`);

        await db.exec(`CREATE TABLE questions (
            id INTERGER PRIMARY KEY AUTOINCREMENT, 
            title TEXT,
            read INT
        )`);

        await db.close()
    }
} 

initDb.init(); 

