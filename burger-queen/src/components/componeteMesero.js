import React from 'react';
//props son propiedad que pueden recibir los componentes
function Nav() {
  return (
    <div className='container-principal'>
    <div className='contenedor-header'>
      <header>
        <img className='imagen-header' alt='imagen de hamburguesa'
          src={require('../images/logoheader.png')} />
          <div className='contenedor-links'>
        <nav className='links-navegacion'>
          <h1 className='titulo-menu'>Burge Queen Menu</h1>
          <ul>
            <li> <a href="http://localhost:3000/"> Administrador </a></li>
            <li><a href="http://localhost:3000/">Mesero </a></li>
            <li><a href="http://localhost:3000/"> Cocina </a></li>
          </ul>
        </nav>
        </div>

      </header>
    </div>
    </div>
  );
}
export default Nav;