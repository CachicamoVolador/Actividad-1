import Database from 'better-sqlite3';

const db = new Database('ap.db');

const buscarEmpleado = (id) => {
    const stmt = db.prepare('SELECT * FROM empleados WHERE id = ?');
    const empleado = stmt.get(id);
    console.log(empleado);
};

buscarEmpleado(1);  


const buscarDepartamento = (id) => {
    const stmt = db.prepare('SELECT * FROM departamentos WHERE id = ?');
    const departamento = stmt.get(id);
    console.log(departamento);
};

buscarDepartamento(1);  
db.close();
