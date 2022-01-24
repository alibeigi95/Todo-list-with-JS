let input = document.querySelector('.input'),
    btn = document.querySelector('.btn'),
    chid2 = document.querySelector('.chid2');

btn.addEventListener("click", getValue);



function getValue(e) {
    e.preventDefault()
    chid2.innerHTML += input.value
    input.value = ''
}