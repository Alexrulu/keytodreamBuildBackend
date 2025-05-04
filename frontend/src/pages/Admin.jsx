import React, { useEffect, useState } from 'react';

const Admin = () => {
  const [users, setUsers] = useState([]);
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/users')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error al cargar los usuarios:', error));
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/properties')
      .then(response => response.json())
      .then(data => setProperties(data))
      .catch(error => console.error('Error al cargar las propiedades:', error));
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {users.length > 0 ? (
          users.map(user => (
            <li key={user.id}>
              <p>Nombre: {user.name}</p>
              <p>Email: {user.email}</p>
              <p>Teléfono: {user.phone}</p>
              <p>DNI: {user.dni}</p>
              <hr />
            </li>
          ))
        ) : (
          <p>No hay usuarios disponibles.</p>
        )}
      </ul>
      <h1>Lista de Propiedades</h1>
      <ul>
        {properties.length > 0 ? (
          properties.map(property => (
            <li key={property.id}>
              <p>Tipo: {property.type}</p>
              <p>Ubicación: {property.city}</p>
              <p>Descripción: {property.description}</p>
              <p>Precio: {property.price}</p>
              <img src={`http://localhost:5000${property.principalImage}`} alt="" />
              <hr />
            </li>
          ))
        ) : (
          <p>No hay propiedades disponibles.</p>
        )}
      </ul>
    </div>
  );
}

export default Admin
