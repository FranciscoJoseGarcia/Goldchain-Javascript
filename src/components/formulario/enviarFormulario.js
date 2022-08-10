const formulario = document.getElementById('form');

const arrayFormulario = [];

formulario.addEventListener('submit', (e)=> {

    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const mail = document.getElementById('mail').value;
    const mensaje = document.getElementById('multi').value;

    const usuario  = {
        
        nombre, 
        mail,
        mensaje
    }
    /* Verifico si está ok */
    if ((mail.length > 0 && mail.includes('@') && mail.includes('.')) && (nombre.length > 0) && (mensaje.length > 0)) {
        arrayFormulario.push(usuario);

        guardarUsuarioEnStorage(usuario);  
    
        swal({
                title: 'Enviado',
                text: 'Tu formulario se ha enviado correctamente!',
                icon: 'success',
                buttons: false, 
                timer: 2000
            })
    } else {
        swal({
            title: 'Formulario no enviado',
            text: 'Falta completar algún campo',
            icon: 'warning',
            buttons: false, 
            timer: 2000
        })
    }    
});

// guardo en Storage
const guardarUsuarioEnStorage = (usuario) => {
    localStorage.setItem("usuario", JSON.stringify(usuario));
};

// agrego sweet alert al borrar
const btnBorrarFormulario = document.querySelector('.borrar');

btnBorrarFormulario.addEventListener("click", () => {
    swal({
        title: 'Borrado',
        text: 'Tu formulario ha sido borrado',
        icon: 'success',
        buttons: false, 
        timer: 2000
    })
    const errorMulti = document.getElementById('errorMulti');
    errorMulti.innerHTML = '<p> </p>';
    const errorNombre = document.getElementById('errorNombre');
    errorNombre.innerHTML = '<p> </p>';
    const errorEmail = document.getElementById('errorEmail');
    errorEmail.innerHTML = '<p> </p>';
});

/* validaciones */
const email = document.getElementById('mail');
const nombre = document.getElementById('nombre');
const multi = document.getElementById('multi');


email.addEventListener('blur', () => {

    if(email.value.length > 0 && email.value.includes('@') && email.value.includes('.')){   
        const error = document.getElementById('errorEmail');
        error.innerHTML = '<p class="text-muted">Campo completo</p>';

    }else {
        const error = document.getElementById('errorEmail');
        error.innerHTML = '<p class="text-danger">El email tiene errores</p>';
    }
});

nombre.addEventListener('blur', () => {

    if(nombre.value.length > 0){
        const error = document.getElementById('errorNombre');
        error.innerHTML = '<p class="text-muted">Campo completo</p>';

    }else {
        const error = document.getElementById('errorNombre');
        error.innerHTML = '<p class="text-danger">El nombre tiene errores</p>';
    }
});

multi.addEventListener('blur', () => {

    if(multi.value.length > 0){
        const error = document.getElementById('errorMulti');
        error.innerHTML = '<p class="text-muted">Campo completo</p>';

    }else {
        const error = document.getElementById('errorMulti');
        error.innerHTML = '<p class="text-danger">El campo está vacío</p>';
    }
});