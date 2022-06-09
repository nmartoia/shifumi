function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
const jouer = document.querySelector("#jouer")
const signe = document.querySelectorAll('.signe')
const p = document.querySelector('.interval')
let ordi = 0
let choixJoueur;
const joueur = document.querySelector('.joueur')
joueur.parentElement.style.display='none'
const rejouer = document.getElementById('rejouer')
const scoreJoueur = document.querySelector('#scoreJoueur')
const scoreOrdi = document.querySelector('#scoreOrdi')
scoreJoueur.textContent= localStorage.getItem('localscoreJ');
scoreOrdi.textContent = localStorage.getItem('localscoreO');
const allsigne = ["pierre","ciseaux","feuille"]
jouer.addEventListener('click',()=>{
    joueur.parentElement.style.display='block'
    for(let i=0;i<signe.length;i++){
        signe[i].style.display='block'
        signe[i].addEventListener('click',()=>{
            choixJoueur=signe[i].textContent
            joueur.textContent=signe[i].textContent
            if(ordi!=0){
                alert('la partie est fini')
            }
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
            choixOrdi.textContent='l\'ordinateur a choisie : '+ordi
            choixOrdi.className='choixOrdi'
            document.body.appendChild(choixOrdi)
            rejouer.style.display='block'
            if(choixJoueur==undefined||ordi=='ciseaux'&&choixJoueur=='feuille'||ordi=='feuille'&&choixJoueur=='pierre'||ordi=='pierre'&&choixJoueur=='ciseaux'){
                p.textContent='vous avez perdu'
                scoreOrdi.textContent++
            }
            else if(ordi===choixJoueur){
                p.textContent='match nul'
            }
            else{
                p.textContent='vous avez gagner'
                scoreJoueur.textContent++
            }
            localStorage.setItem('localscoreJ',scoreJoueur.textContent)
            localStorage.setItem('localscoreO',scoreOrdi.textContent)
        }
    },1000)   
})
rejouer.addEventListener('click',()=>{
    rejouer.style.display='none'
    jouer.style.display='block'
    for (let i = 0; i < signe.length; i++) {
        signe[i].style.display='none'
    }
    p.textContent='5'
    joueur.parentElement.style.display='none'
    joueur.textContent=''
    p.style.display='none'
    document.querySelector('.choixOrdi').style.display='none'
    ordi=0
})