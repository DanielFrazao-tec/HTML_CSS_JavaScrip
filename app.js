'use strict'

// Usando o documnet.querySelector para obter referencia do botao
const switcher = document.querySelector('.btn');

// // Adicionado um ouvinte e o manipulador do evento click
switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

// // // Atualizando o rotulo do botao 
var className = document.body.className;

if(className == "light-theme"){
    this.textContent = "Dark";
}
else{
    this.textContent = "Light"
}

console.log('current class name:' + className);

});

