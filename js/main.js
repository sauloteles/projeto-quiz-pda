const btn1 = document.getElementById('btn-1')
const btn2 = document.getElementById('btn-2')
const btn3 = document.getElementById('btn-3')
const btn4 = document.getElementById('btn-4')
const title = document.getElementsByClassName('main__title')[0]


const listaGabarito = ['btn-1','btn-4','btn-2','btn-3']
const listaPerguntas = ["da Inglaterra", "de Portugal","de Noruega "]
const listaOpcoes = [
    ["Moscou", "Bogotá","Madrí",'Londres'],
    ["Oslo", "Lisboa","Madrí",'Moscou'],
    ["Madrí", "Caracas","Oslo",'Bogotá']]
const listaBtns = [btn1,btn2,btn3,btn4]
let c = 0
function renderConteudo(){
    let str = "Capital " + listaPerguntas[0]
    title.innerHTML = str
    for(let i = 0; i < 4; ++i){
        listaBtns[i].innerHTML = listaOpcoes[c][i]
    }
    ++c;
    listaPerguntas.shift()
    listaGabarito.shift()
}
btn1.addEventListener('click',()=>{
    if(btn1.id == listaGabarito[0]){
        console.log(listaGabarito)
        renderConteudo()
    }
})

btn2.addEventListener('click',()=>{
    if(btn2.id == listaGabarito[0]){
        console.log('acertou')
        renderConteudo()
    }
})
btn3.addEventListener('click',()=>{
    if(btn3.id == listaGabarito[0]){
    console.log('acertou')
    renderConteudo()
    }
})
btn4.addEventListener('click',()=>{
    if(btn4.id == listaGabarito[0]){
        renderConteudo()
    console.log('acertou')
    }
})
