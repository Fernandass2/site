/**
 *  ano automático
 * @author Fernanda Batista Neris
 */

// Inserindo o ano na tag<span>
let ano = document.getElementById('copyrightYear')
// A Linha abaixo obtém o ano atual do sistema
let anoAtual = new Date().getFullYear()

// A Linha abaixo atribui o ano a tag <span>
ano.innerHTML = anoAtual

const main = document.querySelector('main')
const backgrounds = ['url(img/inteligencia_artificial.jpg)','url(img/unesco.jpg)','url(img/robot.jpg)']

let indice = 0

function slider(){
    indice ++
    if (indice >= backgrounds.length) {
        indice = 0
    }
    //troca da imagem de background no CSS
main.style.backgroundImage = backgrounds[indice]
main.style.transition = 'background-image 1s ease-in-out'
}

setInterval(slider, 3000)