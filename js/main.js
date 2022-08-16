const btnEL = document.querySelector('.surch_btn');
const inputEl = document.querySelector('.form-control');
const headerEl = document.querySelector('.header__string');
const headerCloseEl = document.querySelector('.header__string__close');
const imgEl = document.querySelector('.img_search');
const formEl = document.querySelector('.form');
const imgCloseEl = document.querySelector('.imgClose');
const buttonEl = document.querySelector('.button');
const formMainEl = document.querySelector('.for');
;
const contact = document.querySelector('.contact');
const remove = document.querySelector('.remove');

const sendBtnTexts = document.querySelectorAll('.send__btns__text');
const navBar = document.querySelector('.navbar-toggler');
const logo = document.querySelector('.header__logo');
const none = document.querySelector('.header__logo__block')
const headercard = document.querySelector('.header__card'); 
const mainBtn = document.querySelector('.button');
btnEL.addEventListener('click', event => {
    inputEl.style.display = 'block'
    event.preventDefault()
});

headerCloseEl.addEventListener('click', event => {
    headerEl.style.display = 'none';
})

buttonEl.addEventListener('click', event => {
    formEl.style.display = 'block'
    formMainEl.style.display = 'block'
});

imgCloseEl.addEventListener('click', event => {
    formEl.style.display = 'none';
    formMainEl.style.display = 'none'
});



for(const sendBtnText of sendBtnTexts) {
    sendBtnText.addEventListener('click', event => {
            if(contact.style.display === 'none') {
                contact.style.display = 'block'
            } 
            if(!event.target.classList.contains('remove')){
                return;
            } contact.style.display = 'none'
    });
}


    const secondForm = document.querySelector('.second');
    const sendbBtnsTex = document.querySelector('.send__btns__tex');
    const removeAdd = document.querySelector('.remove__add');
   
    sendbBtnsTex.addEventListener('click', event => {
        secondForm.classList.remove('hidden')
        
    })
    removeAdd.addEventListener('click', event => {
        secondForm.classList.add('hidden')
    })

    const threeForm = document.querySelector('.three');
    const sendbBtnsTe = document.querySelector('.send__btns__te');
    const removeAdded = document.querySelector('.remove__added');
    sendbBtnsTe.addEventListener('click', event => {
        threeForm.classList.remove('hidden')
    })
    removeAdded.addEventListener('click', event => {
        threeForm.classList.add('hidden')
    })

    const fourForm = document.querySelector('.four');
    const sendbBtnsT = document.querySelector('.send__btns__t')
    const removeAddFour = document.querySelector('.remove__add__four');
    sendbBtnsT.addEventListener('click', event => {
        fourForm.classList.remove('hidden')
    })
    removeAddFour.addEventListener('click', event => {
        fourForm.classList.add('hidden')
    })





navBar.addEventListener('click', event => {
    headercard.classList.toggle('hidden');
    mainBtn.classList.toggle('hidden');
    logo.classList.toggle('hidden');

});


const viewEl = document.querySelector('.view');
const postsBloks = document.querySelectorAll('.posts__blok:nth-last-child(-n+3)')


   for(const postsBlok of postsBloks){
    viewEl.addEventListener('click', () =>{
        postsBlok.classList.toggle('hidden')
    })
   }
   
 


