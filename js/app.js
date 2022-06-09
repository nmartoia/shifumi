function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }  
const jouer = document.querySelector("#jouer")
const signe = document.querySelectorAll('.signe')
const p = document.querySelector('.interval')
let ordi = 0
let choixJoueur;
const rejouer = document.getElementById('rejouer')
const allsigne = ["pierre","ciseaux","feuille"]
jouer.addEventListener('click',()=>{
    for(let i=0;i<signe.length;i++){
        signe[i].style.display='block'
        signe[i].addEventListener('click',()=>{
            choixJoueur=signe[i].textContent
        })
    }
    jouer.style.display='none'
    p.style.display='block'
    const interval = setInterval(function(){
        if(p.textContent!='0'){
            p.textContent--
        }
        else{
            clearInterval(interval)
            ordi = allsigne[getRandomInt(2)]
            const choixOrdi=document.createElement('p')
            choixOrdi.textContent=ordi
            document.body.appendChild(choixOrdi)
            console.log(choixJoueur)
            rejouer.style.display='block'
            if(choixJoueur==undefined||ordi=='ciseaux'&&choixJoueur=='feuille'||ordi=='feuille'&&choixJoueur=='pierre'||ordi=='pierre'&&choixJoueur=='ciseaux'){
                console.log('vous avez perdu')
            }
            else if(ordi===choixJoueur){
                console.log('match nul')
            }
            else{
                console.log('vous avez gagner')
            }
        }
    },1000)   
})
rejouer.addEventListener('click')