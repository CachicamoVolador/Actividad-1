import Database from 'better-sqlite3';

const db = new Database('ap.db');

const mostrarEmpleados = () => {
    const stmt = db.prepare('SELECT * FROM empleados');
    const empleados = stmt.all();
    console.log(empleados);
};

mostrarEmpleados();

const mostrarDepartamentos = () => {
    const stmt = db.prepare('SELECT * FROM departamentos');
    const departamentos = stmt.all();
    console.log(departamentos);
};

mostrarDepartamentos();
db.close();
