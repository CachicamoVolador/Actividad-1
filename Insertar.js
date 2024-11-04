import Database from "better-sqlite3";
const db = new Database('ap.db')


const insertarDepartamento = (nombre) => {
    const stmt = db.prepare('INSERT INTO departamentos (nombre) VALUES (?)');
    stmt.run(nombre);
    console.log('Departamento insertado');
};

insertarDepartamento('Recursos Humanos');
insertarDepartamento( 'Limpieza');  // Cambia el nombre según necesites

const insertarEmpleado = (nombre, correo, departamento) => {
    const stmt = db.prepare('INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?)');
    stmt.run(nombre, correo, departamento);
    console.log('Empleado insertado');
};

insertarEmpleado('Juan Perez', 'juan.perez@example.com', 1);
insertarEmpleado('jose Pepino', 'jose.pepino@example.com', 2);
  // Cambia los datos según necesites

db.close()