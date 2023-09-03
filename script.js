let text =document.getElementById('text');
let city =document.getElementById('city');

window.addEventListener('scroll',()=>{

    let value= window.scrollY;

    text.style.marginTop = value * 2.5 + 'px';
    
}

)
