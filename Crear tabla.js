import Database from 'better-sqlite3';

// Conectar a la base de datos
const db = new Database('ap.db');

// Crear tablas
db.exec(`
    CREATE TABLE IF NOT EXISTS departamentos (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT
    );
    
    CREATE TABLE IF NOT EXISTS empleados (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        nombre TEXT,
        correo TEXT,
        departamento INTEGER,
        FOREIGN KEY (departamento) REFERENCES departamentos(id)
    );
`);
db.close();