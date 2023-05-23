const naviconel = document.querySelector('.nav__icon');
const navcloseel = document.querySelector('.nav__close');
const navlist = document.querySelector('.nav__list');
const navbgoverlayel = document.querySelector('.nav__bgOverlay');

const navopen = ()  => {
    navlist.classList.add('show');
    navbgoverlayel.classList.add('active');
    document.body.style='visibility:visible;height:100vh;width:100vw;overflow:hidden'
}
const navclose = () => {
    navlist.classList.remove('show');
    navbgoverlayel.classList.remove('active');
    document.body.style='visibility:visible;height:initial;width:100%;overflow-x:hidden'
}
naviconel.addEventListener('click',navopen);
navcloseel.addEventListener('click',navclose);
navbgoverlayel.addEventListener('click',navclose);

//AOS
AOS.init({
    offset:200,
    delay:100,
    duration:400,
    easing:'ease',
    once:false,
    mirror:false,
    anchorPlacement:'top-bottom'
})