import Database from "better-sqlite3";
const db = new Database('ap.db')


const insertarDepartamento = (nombre) => {
    const stmt = db.prepare('INSERT INTO departamentos (nombre) VALUES (?)');
    stmt.run(nombre);
    console.log('Departamento insertado');
};

insertarDepartamento('Recursos Humanos');
insertarDepartamento( 'Finanzas');  

const insertarEmpleado = (nombre, correo, departamento) => {
    const stmt = db.prepare('INSERT INTO empleados (nombre, correo, departamento) VALUES (?, ?, ?)');
    stmt.run(nombre, correo, departamento);
    console.log('Empleado insertado');
};

insertarEmpleado('Luis Hernandez', 'luis.hernandez@example.com', 1);
insertarEmpleado('Maria Lopez', 'maria.lopez@example.com', 2);


db.close()
