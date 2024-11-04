import Database from 'better-sqlite3';

const db = new Database('ap.db');

const eliminarEmpleado = (id) => {
    const stmt = db.prepare('DELETE FROM empleados WHERE id = ?');
    stmt.run(id);
    console.log('Empleado eliminado');
};

eliminarEmpleado(3);  // Cambia el ID según necesites


const eliminarDepartamento = (id) => {
    const stmt = db.prepare('DELETE FROM departamentos WHERE id = ?');
    stmt.run(id);
    console.log('Departamento eliminado');
};

eliminarDepartamento(3); 
eliminarDepartamento(4); 
 // Cambia el ID según necesites
db.close()
