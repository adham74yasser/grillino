
// start icon_fixed
let root = document.documentElement
let styleRoot = getComputedStyle(root)
let activeMode = 1
$('.title_icon').css('cursor','pointer')
$('.title_icon').click(()=> {
    if(activeMode === 0){
        $(".fa-moon").css("opacity" , "0")
        $(".fa-sun").css("opacity" , "1")
        activeMode = 1
        root.style.setProperty('--bg1-color', '#fa8507')
        root.style.setProperty('--bg2-color', '#b80011')
        root.style.setProperty('--bg3-color', '#ffe9b5')
        root.style.setProperty('--text-color', '#000')
        root.style.setProperty('--rug-color', '#fff')
        root.style.setProperty('--bg4-color', '#F6F6F6')
        document.body.style.background = '#fff'
    }else if (activeMode === 1){
        $(".fa-moon").css("opacity" , "1")
        $(".fa-sun").css("opacity" , "0")
        document.body.style.background = '#000'
        root.style.setProperty('--bg1-color', '#b80011')
        root.style.setProperty('--bg2-color', '#fa8507')
        root.style.setProperty('--text-color', '#fff')
        root.style.setProperty('--rug-color', '#000')
        root.style.setProperty('--bg3-color', '#756644')
        root.style.setProperty('--bg4-color', '#222222')
        activeMode = 0
    }
})
// end icon_fixed
// start mainList
$(".fa-bars-staggered").click(()=>{
    $('.mainList').toggleClass('active')
})
// end mainList


// start up
let upTop = document.querySelector('.fa-angle-up')
let iconFixed = document.querySelector('.icon_fixed')
// let navigationFixed = document.querySelector('.navigation_fixed')
window.addEventListener('scroll' , ()=> {
    if(this.scrollY <= 700){
        upTop.classList.add('opy')
        iconFixed.classList.add('active')
        // navigationFixed.classList.add('active')
    }else {
        iconFixed.classList.remove('active')
        upTop.classList.remove('opy')
        // navigationFixed.classList.remove('active')
    }
})

upTop.addEventListener('click' , ()=> {
    window.scrollTo({
        top:0,
        behavior :'smooth'
    })
})
// end up


