'use strict'


//Botões
var button_one = document.getElementById('button-1')
var button_two = document.getElementById('button-2')
var button_three = document.getElementById('button-3')

//Conteúdo
var categoria_h1 = document.getElementById('categoria-title')
var categoria_p = document.getElementById('categoria-desc')

//Imagem
var picture_box = document.getElementById('picture-box')

//ponteiro de cores
var color_pointer = 0

button_one.addEventListener('click', function() {
    // Conteudo da categoria #01
    categoria_h1.innerText = "Mesa Industrial Decorativa"
    picture_box.src = 'assets/imagens/banners/mesa-industrial-1.png'

    //cor de fundo do botão
    button_two.style.backgroundColor = 'lightgray'
    button_three.style.backgroundColor = 'lightgray'
    button_one.style.backgroundColor = 'crimson'

    color_pointer = 0

})


button_two.addEventListener('click', function() {
    // Conteudo da categoria #02
    categoria_h1.innerText = "Mesa Industrial para Escritório"
    picture_box.src = 'assets/imagens/banners/mesa-industrial-2.png'

    //cor de fundo do botão

    button_one.style.backgroundColor = 'lightgray'
    button_three.style.backgroundColor = 'lightgray'
    button_two.style.backgroundColor = 'crimson'

    color_pointer = 0

})


button_three.addEventListener('click', function() {
    // Conteudo da categoria #03
    categoria_h1.innerText = "Decoração Industrial"
    picture_box.src = 'assets/imagens/banners/mesa-industrial-3.png'

    //cor de fundo do botão
    button_one.style.backgroundColor = 'lightgray'
    button_two.style.backgroundColor = 'lightgray'
    button_three.style.backgroundColor = 'crimson'

    color_pointer = 0


})