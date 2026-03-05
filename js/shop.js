// start head_container sort 
let listHead = document.querySelector('.sort h4')
let listPara = document.querySelector('.sort h4 p')
let list = document.querySelector('.list')
let iconDown = document.querySelector('.fa-angles-down')
let latest = document.querySelectorAll('#latest')
// let recent = document.querySelector('#recent')
// let popular = document.querySelector('#popular')
// let relevant = document.querySelector('#relevant')
let opy = ''
listHead.addEventListener('click' , ()=>{
    if(opy === '') {
        list.style.transform ='scale(1)';
        iconDown.classList.add('rot') 
        opy = 'scale'
    }else if(opy === 'scale') {
        list.style.transform ='scale(0)';
        iconDown.classList.remove('rot') 
        opy = ''
    }
})


latest.forEach(item =>{
    item.addEventListener('click' , e =>{
        listPara.innerHTML = e.target.innerHTML
    })
})
// end head_container sort 

// start cards
let cardBox = document.querySelector('.cards')
let cart = [
    {
        img:'img/shop/food-menu-img-3-1.jpg',
        price:'800.00',
        del:'920.00',
        dic:'Bacon Ranch Pasta Salad'
    },
    {
        img:'img/shop/food-menu-img-3-2.jpg',
        price:'800',
        del:'920.00',
        dic:'Buttermilk Fried Chicken'
    },
    {
        img:'img/shop/food-menu-img-3-3.jpg',
        price:'220.00',
        del:'440.00',
        dic:'Parmesan Vegetable Pasta'
    },
    {
        img:'img/shop/food-menu-img-3-4.jpg',
        price:'323.00',
        del:'400.00',
        dic:'Mustard Chicken with Rice.'
    },
    {
        img:'img/shop/food-menu-img-3-5.jpg',
        price:'110.00',
        del:'299.00',
        dic:'Egg Salad for Sandwiches'
    },
    {
        img:'img/shop/food-menu-img-3-6.jpg',
        price:'560.00',
        del:'940.00',
        dic:'Meat Vegetables Gemuesepiess'
    },
    {
        img:'img/shop/food-menu-img-3-7.jpg',
        price:'99.00',
        del:'100.00',
        dic:'Grilled Rosemary Chicken'
    },
    {
        img:'img/shop/food-menu-img-3-8.jpg',
        price:'125.00',
        del:'150.00',
        dic:'Bruschetta Chicken Bake'
    },
    {
        img:'img/shop/food-menu-img-3-9.jpg',
        price:'999.00',
        del:'1100.00',
        dic:'Homemade Pizza Sauce'
    }
]

let res = ' '

cart.forEach((e , index)=>{
    res += `
                <div class="card">
                    <div class="img_card">
                        <img src="${e.img}" alt="">
                    </div>
                    <div class="dic flex">
                        <p>$${e.price}<del>$${e.del}</del></p>
                        <b>${e.dic}</b>
                        <div class="order_btn">
                            <span class="Order" data-id="${index}">Order Now</span>
                            <i class="fa-solid fa-cart-shopping flex"></i>
                        </div>
                    </div>
                </div>
    `
    
})
cardBox.innerHTML = res

// end cards

// start mainCard
let mainCards = document.querySelector('#mainCards')
let cartInMain = {};
let cartArray = []
$('.Order').click(function(){
    let id = $(this).data('id');
    let product = cart[id];
    cartArray.push({ ...product, id: id });
    if(cartInMain[id] ){
        cartInMain[id] += 1;
        $(`#mainCards .card_main[data-id='${id}'] span.flex`).text(cartInMain[id]);    
    }else {
        function display(){
            cartInMain[id] = 1;
            let resCard = `
                <div class="card_main flex"  data-id="${id}">
                    <div class="imgCard">
                        <img src="${product.img}" alt="">
                    </div>
                    <div class="dicCard flex">
                        <p>$${product.price}<del>$${product.del}</del></p>
                        <b>${product.dic}</b>
                        <div class="connate flex">
                            <i class="fa-solid fa-square-plus"></i>
                            <span class="flex">${cartInMain[id]}</span>
                            <i class="fa-solid fa-square-minus"></i>
                        </div>
                    </div>
                    <div class="order_btn">
                        <i class="fa-regular fa-trash-can" onclick = "deleteProduct(${id})"></i>
                    </div>
                </div>
            `
            $('#mainCards').append(resCard);
        }
        display()
        
    }
    
    $('#main').css("transform","translateX(0%)")
    $('.hidden').css("display","block")
    
})

function deleteProduct(id){
    cartArray = cartArray.filter(item => item.id !== id);
    delete cartInMain[id];
    $(`#mainCards .card_main[data-id='${id}']`).remove();
    
}
// end mainCard
$('.hidden').click(()=>{
    $('#main').css("transform","translateX(110%)")
    $('.hidden').css("display","none")
})

// 
$('.bag').click(()=>{
    $('#main').css("transform","translateX(0%)")
    $('.hidden').css("display","block")
})
// 