﻿//Funcion para mostrar usuarios(admin)
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

//Funcion para cargar los datos del usuario elegido(admin)

async function cargarDatosUsuario(id_usuario) {
    try {
        const response = await fetch('');
        if (!response.ok) throw new Error('Error al intentar cargar los datos del usuario');

        const usuario = await response.json();

        document.getElementById('id_usuario').value = usuario.id_usuario;
        document.getElementById('usuario').value = usuario.usuario;
        document.getElementById('contraseña').value = usuario.contraseña;
        document.getElementById('email').value = usuario.email;
        document.getElementById('telefono').value = usuario.telefono;
        document.getElementById('dni').value = usuario.dni;
        document.getElementById('estado').value = usuario.estado;
        document.getElementById('id_punto_control').value = usuario.id_punto_control;
    } catch (error) {
        console.error('Error al intentar cargar los datos del usuario', error);
    }
}

//Funcion para guardar los cambios del usuario elegido(admin)

async function guardarCambiosUsuario() {
    const id_usuario = document.getElementById('id_usuario').value;
    const usuarioEditado = {
        Nombre: document.getElementById('usuario').value,
        Contraseña: document.getElementById('contraseña').value;
        EMAIL: document.getElementById('email').value;
        Telefono: document.getElementById('telefono').value;
        DNI: document.getElementById('dni').value;
        Estado: document.getElementById('estado').value;
        ID punto de Control: document.getElementById('id_punto_control').value
    };
    try {
        const response = await fetch('api', {
            method: 'PUT',
            headers: {
                'Content.Type': 'application/json'
            },
            body: JSON.stringify(usuarioEditado)
        });

        if (response.ok) {
            alert('Usuario actualizado exitosamente!');

        } else {
            alert('Error al intentar actualizar el usuario');
        }

    } catch (error) {
        console.error('Error al guardar cambios del usuario:', error);
    }
}