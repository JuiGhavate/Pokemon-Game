

// // start sol
// let p1_name = "john";
// let p2_name = "Alice";
// function getPokemon(){
//         fetch("https://pokeapi.co/api/v2/pokemon/")
//         .then((response)=> response.json())
//         .then((response)=>{
//                 let x =Math.floor(((Math.random())*20));
//                 return fetch(response.results[x].url)
//         })
//         .then((response)=> response.json())
//         .then((response)=> {
//                 displayPlayer1(response)
//                 return fetch("https://pokeapi.co/api/v2/pokemon/")
//         })
//         .then((response)=> response.json())
//         .then((response)=>{
//                 let x =Math.floor(((Math.random())*20));
//                 return fetch(response.results[x].url)
//         })
//         .then((response)=> response.json())
//         .then((response)=> {
//                 displayPlayer2(response)
//         })
// }
// function displayPlayer1(response){
//         document.getElementById('p1_name').innerHTML = p1_name;
//         document.getElementById('p1_score').textContent = `Score: ${score1}`;
//                 const card1 = document.querySelector('#card1');
//                 card1.querySelector('#name').textContent = response.name;
//                 const imgc = document.createElement('img');
//                 imgc.setAttribute('src',response.sprites.other.dream_world.front_default);
//                 imgc.style.height = '300px';
//                 imgc.style.width = '300px';
//                 card1.querySelector('#img').innerHTML='';
//                 card1.querySelector('#img').append(imgc);
//                 const lst = card1.querySelector('#abilities');
//                 lst.innerHTML='';
//                 const abilities = response.abilities;
//                 for(let i of abilities){
//                         const li = document.createElement('li');
//                         li.textContent = i.ability.name;
//                         lst.append(li);
//                 }
//                 const exp = card1.querySelector('#experience')
//                 exp.textContent = response.base_experience;
                
// }
// function displayPlayer2(response){
//         document.getElementById('p2_name').textContent = p2_name;
//         document.getElementById('p2_score').textContent = `Score: ${score2}`;
//                 const card2 = document.querySelector('#card2');
//                 card2.querySelector('#name').textContent = response.name;
//                 const imgc = document.createElement('img');
//                 imgc.setAttribute('src',response.sprites.other.dream_world.front_default);
//                 imgc.style.height = '300px';
//                 imgc.style.width = '300px';
//                 card2.querySelector('#img').innerHTML='';
//                 card2.querySelector('#img').append(imgc);
//                 const lst = card2.querySelector('#abilities');
//                 lst.innerHTML='';
//                 const abilities = response.abilities;
//                 for(let i of abilities){
//                         const li = document.createElement('li');
//                         li.textContent = i.ability.name;
//                         lst.append(li);
//                 }
//                 card2.querySelector('#experience').textContent = response.base_experience;
// }
// let score1 = 0;
// let score2 = 0;
// const btn = document.getElementById('fight')
// btn.addEventListener('click',()=>{
//         getPokemon();
//         setTimeout(()=>{                
//         let crd1 = document.getElementById('card1');
//         let scr1 = crd1.querySelector('#experience').textContent;
//         let crd2 = document.querySelector('#card2');
//         let src2 = crd2.querySelector('#experience').textContent;
//         scr1 = Number(scr1);
//         src2 = Number(src2);
//         console.log(scr1,src2);
//         if(scr1>src2){
//                 score1= score1+1;
//                 document.querySelector('#p1_score').textContent = `Score: ${score1}`;
//         }
//         else if(scr1<src2){
//                 score2 = score2 +1;
//                 document.querySelector('#p2_score').textContent = `Score: ${score2}`;        
//         }
    
// },1000)       
// })

// end sol


function getPoki(){
    fetch('https://pokeapi.co/api/v2/pokemon/')

    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        let x = Math.floor(((Math.random())*20));
        return fetch(response.results[x].url)
    })
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayUser1(response)
        return fetch('https://pokeapi.co/api/v2/pokemon/')
    })
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        let x = Math.floor(((Math.random())*20));
        return fetch(response.results[x].url)
    })
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        displayUser2(response)
    })
}


let p1_name = "john";
let p2_name = "Alice";

let score1 = 0;
let score2 = 0;

function displayUser1(response){
    document.getElementById('player1').innerHTML=`<div id="card_header">
                        <span id="p1_name">${p1_name}</span>
                        <span class='score1' id="p1_score">${score1}</span>
                
                </div>
                <div id="card1">
                        <div id = "img">
                        	<img src="${response.sprites.other.dream_world.front_default}" height='300px' width='300px' alt="">
                        </div>
                        <span id="name">${response.name}</span>
                        <span class='exp1' id="experience">${response.base_experience}</span>
                        <ul class='abli' id="abilities"></ul>
                </div>`
    
    let abli = document.querySelector('.abli');
    
    const abilities = response.abilities;
    abilities.forEach((ablit)=>{
        let option = document.createElement('li');
        option.textContent= ablit.ability.name;
        abli.appendChild(option)
    })
    
}


function displayUser2(response){
    document.getElementById('player2').innerHTML=`<div id="card_header">
                       <span id="p2_name">${p2_name}</span>
                        <span class='score2' id="p2_score">${score2}</span>
                
                </div>
                <div id="card1">
                        <div id = "img">
                        	<img src="${response.sprites.other.dream_world.front_default}" height='300px' width='300px' alt="">
                        </div>
                        <span id="name">${response.name}</span>
                        <span class='exp2' id="experience">${response.base_experience}</span>
                        <ul class='abli2' id="abilities"></ul>
                </div>`
    
    let abli = document.querySelector('.abli2');
    
    const abilities = response.abilities;
    abilities.forEach((ablit)=>{
        let option = document.createElement('li');
        option.textContent= ablit.ability.name;
        abli.appendChild(option)
    })
    
}

document.getElementById('fight').addEventListener('click',()=>{
    getPoki();
    
    setTimeout(()=>{
        
    let scr1= document.querySelector('.exp1').textContent;
    let scr2= document.querySelector('.exp2').textContent;
    
    let numScr1 =Number(scr1);
    let numScr2 =Number(scr2);
    
    if(numScr1>numScr2){
        score1++;
        document.querySelector('#p1_score').textContent= score1;
    }else if(numScr1<numScr2){
        score2++;
        document.querySelector('#p2_score').textContent= score2;
    }
    },1000)
})




















