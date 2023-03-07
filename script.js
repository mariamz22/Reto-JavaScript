const capital = document.querySelector('#capital');
const tea = document.querySelector('#tea');
const tiempo = document.querySelector('#tiempo');
const calcular = document.querySelector('.calcular');
const result = document.querySelector('.resultado');
const result2 = document.querySelector('.resultado2');

function calcInteresSimple(){
    
    let total = 0;
    let cap = Number(capital.value);
    let tasa = Number(tea.value);
    let time = Number(tiempo.value);
    simple = cap*(tasa/100)*time;
    total = cap + simple;
    result.innerHTML = "Los intereses ganados son S/. " + simple;
    result2.innerHTML = "Al finalizar " + time + " años usted recibirá S/. " + (simple + cap);
}

