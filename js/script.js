window.onload = function() {
    this.alert('carregou tudo');
}


const element_nb_name = document.getElementById('navbar-name');
if (element_nb_name) {
    element_nb_name.addEventListener('click', function() {
        alert('isso é um alerta')
    });
}

