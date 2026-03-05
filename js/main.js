// // start loading
let lod = document.querySelector('.loading')
document.body.classList.add('loading-active');

setTimeout(() => {
    lod.classList.add('hide')
    document.body.classList.remove('loading-active')
    window.scrollTo(0, 0);
}, 2000);

// // end loading
// start header slider
let prev = document.querySelector('#prev')
let next = document.querySelector('#next')
let container = document.querySelector('.container')
let h1 = document.querySelector('h1')
let img = document.querySelector('#img')
let header = document.querySelector('header')
let data_title = document.querySelector('.data_title')
let parent = document.querySelector('.parent')

let hero = [
    {
        head :'Super Delicious',
        img :'img/hero-img-7-1.png',
        bg : 'img/hero-img-bg-7-1.jpg' 
    },
    {
        head :'Natural Healthy',
        img :'img/hero-img-7-2.png',
        bg : 'img/hero-img-bg-6-1.jpg' 
    },
    {
        head :'Fresh & Grilled',
        img :'img/hero-img-7-3.png',
        bg : 'img/hero-img-bg-6-1.jpg' 
    }
]
let index = 0
function show(index) {
    h1.innerHTML = `${hero[index].head}<br> Foods`
    img.src = hero[index].img
    if(index === 1) {
        img.classList.add('rotate')
    }else if (index === 0) {
        img.classList.remove('rotate')
    }else if (index === 2) {
        img.classList.remove('rotate')
    }
    header.style.background = `url(${hero[index].bg}) center / cover`
}

function animate(){
    data_title.classList.remove(
        'animate__animated',
        'animate__fadeInLeft'
    );

    parent.classList.remove(
        'animate__animated',
        'animate__fadeInRight'
    );

    void data_title.offsetWidth; 

    data_title.classList.add('animate__animated');
    data_title.classList.add('animate__fadeInLeft');
    parent.classList.add('animate__animated');
    parent.classList.add('animate__fadeInRight');

}


next.onclick = function (){
    animate()
    index++;
    if(index >= hero.length){
        index = 0
    }
    show(index) 
}
prev.onclick = function (){
    animate()
    index--;
    if(index < 0){
        index = hero.length - 1
    }
    show(index) 
}
// end header slider
// start header panner rotate
let panner = document.querySelector('.panner')

panner.addEventListener('mousemove' , e =>{
    const react = panner.getBoundingClientRect()

    const x = e.clientX - react.left;
    const y = e.clientY - react.top;

    const centerX = react.width / 2 ;
    const centerY = react.height / 2 ;

    let  rotateX =  ((centerY - y) / centerY ) * 10
    let  rotateY = ((x - centerX) / centerX ) * 10 
 

    panner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) `;
})

panner.addEventListener('mouseleave', () => {
    panner.style.transform = 'rotateX(0) rotateY(0)';
});

// end header panner rotate
// start slider_one

let data_slider = [
    {
        title : 'Beef Shawarma ',
        titleCom : 'Wrap',
        price : '$19.99',
        img : 'img/food-menu-img-10-5.png'
    },
    {
        title : 'Classic Tomato  ',
        titleCom : 'and Mozzarella',
        price : '$25.99',
        img : 'img/food-menu-img-10-1.png'
    },
    {
        title : 'White Pizza ',
        titleCom : 'with Spinach',
        price : '$15.99',
        img : 'img/food-menu-img-10-2.png'
    },
    {
        title : 'Beef Shawarma ',
        titleCom : 'Wrap',
        price : '$19.99',
        img : 'img/food-menu-img-10-3.png'
    },
    {
        title : 'Beef Shawarma ',
        titleCom : 'Wrap',
        price : '$19.99',
        img : 'img/food-menu-img-10-4.png'
    },
    {
        title : 'Pizza ai Frutti  ',
        titleCom : 'di Mare ',
        price : '$10.99',
        img : 'img/food-menu-img-8-1.png'
    },
]

let res = '' 
for (let i = 0; i < data_slider.length; i++) {
    res += `
        <div class="slide">
            <div class="data">
                <p>${data_slider[i].title}<br> ${data_slider[i].titleCom}</p>
                <b>${data_slider[i].price}</b>
            </div>
            <div class="img_slide">
                <img src="${data_slider[i].img}" alt="">
            </div>
        </div>
    `
    document.querySelector('.slider').innerHTML = res 
}

$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay :true,
    autoplaySpeed :3000 , 
    arrows : false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        // {
        //     breakpoint: 992,
        //     settings: {
        //         slidesToShow: 2
        //     }
        // },
        {
            breakpoint: 768, 
            settings: {
                slidesToShow: 1,
            }
        }
    ]
  });
});

$(document).ready(function(){
  $('.slider_food').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay :true,
    autoplaySpeed :3000 , 
    arrows : false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        // {
        //     breakpoint: 992,
        //     settings: {
        //         slidesToShow: 2
        //     }
        // },
        {
            breakpoint: 768, 
            settings: {
                slidesToShow: 1,
            }
        }
    ]
  });
});

$(document).ready(function(){
  $('.slider_best').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay :true,
    autoplaySpeed :3000 , 
    arrows : false,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1
            }
        }
    ]
  });
});
// end slider_one
new WOW().init();