import Database from 'better-sqlite3';

const db = new Database('ap.db');

const modificarEmpleado = (id, nombre, correo, departamento) => {
    const stmt = db.prepare('UPDATE empleados SET nombre = ?, correo = ?, departamento = ? WHERE id = ?');
    stmt.run(nombre, correo, departamento, id);
    console.log('Empleado modificado');
};

modificarEmpleado(1, 'Luis Hernandez 'luis.hernandez@example.com', 2); 
modificarEmpleado(2, 'Maria Lopez', 'maria.lopez@example.com', 1); 


const modificarDepartamento = (id, nombre) => {
    const stmt = db.prepare('UPDATE departamentos SET nombre = ? WHERE id = ?');
    stmt.run(nombre, id);
    console.log('Departamento modificado');
};

modificarDepartamento(1, 'RRHH');
modificarDepartamento(2, 'Finance');


db.close();
