import Database from 'better-sqlite3';

const db = new Database('ap.db');

const modificarEmpleado = (id, nombre, correo, departamento) => {
    const stmt = db.prepare('UPDATE empleados SET nombre = ?, correo = ?, departamento = ? WHERE id = ?');
    stmt.run(nombre, correo, departamento, id);
    console.log('Empleado modificado');
};

modificarEmpleado(1, 'Juan Perez', 'juan.perez@company.com', 2); 
modificarEmpleado(2, 'jose Pepino', 'jose.pepino@example.com', 1);  // Cambia los datos según necesites


const modificarDepartamento = (id, nombre) => {
    const stmt = db.prepare('UPDATE departamentos SET nombre = ? WHERE id = ?');
    stmt.run(nombre, id);
    console.log('Departamento modificado');
};

modificarDepartamento(1, 'RRHH');
modificarDepartamento(2, 'Clean');
  // Cambia el ID y el nombre según necesites

db.close();
