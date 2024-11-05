//Funcion para mostrar usuarios(admin)
async function mostrarUsuarios() {

    //En el Front poner <body onload="mostrarUsuarios()"> para que se llame automaticamente cuando carga la pag
    //En el Front crear un boton para llamar a la funcion
    try {
        const response = await fetch('api/Usuario/obtener');

        if (!response.ok) {
            throw new Error('Hubo un error al obtener los datos');
        }

        const usuarios = await response.json();
        const tabla = document.getElementById('usuariosTable');

        tabla.innerHTML = '';

        tabla.innerHTML += '
            < tr >

                <th> ID </th>
                <th> Usuario </th>
                <th> Contraseña </th>
                <th> Email </th>
                <th> Telefono </th>
                <th> DNI </th>
                <th> Estado </th>
                <th> Id punto de Control </th>

            </tr > ';

        usuarios.forEach(usuario => {
            const fila = document.createElement('tr');
            fila.innerHTML = '
                < td > ${ usuario.id_usuario }</td >
                < td > ${usuario.usuario}</td>
                < td > ${usuario.contraseña}</td>
                < td > ${usuario.email}</td>
                < td > ${usuario.telefono}</td>
                < td > ${usuario.dni}</td>
                < td > ${usuario.estado}</td>
                < td > ${usuario.id_punto_control}</td>
            ';
            tabla.appendChild(fila);
        });
    } catch (error) {
        console.error('Error al mostrar usuarios:', error);
    }
}