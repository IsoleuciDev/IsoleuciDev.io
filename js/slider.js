(function(){

    const sliders=[...document.querySelectorAll('.integrantes__body')];
    const buttonNext=document.querySelector('#next');
    const buttonBefore= document.querySelector('#before');
    let value;

    buttonNext.addEventListener('click', ()=>{
        changePosition(1);
    });

    buttonBefore.addEventListener('click', ()=>{
        changePosition(-1);
    });

    const changePosition =(add)=>{
        const currentValue= document.querySelector('.integrantes__body--show').dataset.id;
        value = Number(currentValue);
        value+= add;

        sliders[Number(currentValue)-1].classList.remove('integrantes__body--show');
        if(value === sliders.length+1 || value === 0 ){
            value = value === 0 ? sliders.length : 1;
        }

        sliders[value-1].classList.add('integrantes__body--show');

    }
})();  

