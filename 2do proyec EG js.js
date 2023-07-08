const menuItems = document.querySelectorAll('.menu-item');
menuItems.forEach(function (el){
    el.addEventListener('click', function(e) {
        const currentItem = document.querySelector('.active');
        currentItem.classList.remove('active');
        e.target.classList.add('active');
});
});

///lo anterior es sin llamar a alguna etiqueta del css///



/*boton que cambia estilos */
const changeFontBtn = document.querySelector('#change-font');
changeFontBtn.addEventListener('click', function() {
  document.body.classList.toggle('change-font');
});

///lo anterior es llamando a alguna etiqueta del css///


