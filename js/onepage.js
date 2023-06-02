const swiper = new Swiper('.swiper01', {
    loop: false,
    slidesPerView: 3,
    // slidesPerGroup:1,
    spaceBetween: 20,


});
const swiper2 = new Swiper('.swiper02', {
    loop: false,
    slidesPerView: 3,
    // slidesPerGroup:1,
    spaceBetween: 20,


});


const radio01 = document.getElementById('radio01')
const radio02 = document.getElementById('radio02')
const swiper01 = document.querySelector('.swiper01')
const swiper02 = document.querySelector('.swiper02')

radio01.addEventListener('click', function () {

    if (radio01.checked) {
        swiper01.style.display = 'block'
        swiper02.style.display = 'none'
    }

})

radio02.addEventListener('click', function () {

    if (radio02.checked) {
        swiper02.style.display = 'block'
        swiper01.style.display = 'none'
    }

})


$(function () {


    $('.pagebtn').css('top', $(window).height() / 2 - $('.pagebtn').height() / 2);
    $(window).scroll(function () {

        let point = $(this).scrollTop() + ($(window).height() / 2 - $('.pagebtn').height() /
            2)

        $('.pagebtn').stop().animate({
            top: point,
        }, 300)
    })



    // const btn = $('.pagebtn ul li');
    // const page = $('section');


    // let index = 0;
    // let top = 0; //각페이지의 맨위 좌표

    // btn.click(function () {

    //     index = $(this).index();

    //     top = page.eq(index).offset().top;

    //     $('html, body').stop().animate({
    //         scrollTop: top
    //     }, 1000, 'easeOutBounce');
    // })





    // $('.lnb_women').click(function () {
    //     $('.drop_women').slideToggle(300);
    //     $('.drop_men').css('display', 'none');
    //     $('.drop_kids').css('display', 'none');
    //     $('.drop_brand').css('display', 'none');
    //     // $('header').css('backgroundColor','#fff')
    //     // $('.head_lnb ul li a').css('color','black')
    //     // $('.head_logo .imgwrap img').attr('src','./img/LOGO/01(1).png')

    // })


    // $('.lnb_men').click(function () {
    //     $('.drop_men').slideToggle(300);
    //     $('.drop_women').css('display', 'none');
    //     $('.drop_kids').css('display', 'none');
    //     $('.drop_brand').css('display', 'none');
    //     // $('header').css('backgroundColor','#fff')
    //     // $('.head_lnb ul li a').css('color','black')
    // })

    // $('.lnb_kids').click(function () {
    //     $('.drop_kids').slideToggle(300);
    //     $('.drop_women').css('display', 'none');
    //     $('.drop_men').css('display', 'none');
    //     $('.drop_brand').css('display', 'none');
    //     // $('header').css('backgroundColor','#fff')
    //     // $('.head_lnb ul li a').css('color','black')
    // })

    // $('.lnb_brand').click(function () {
    //     $('.drop_brand').slideToggle(300);
    //     $('.drop_women').css('display', 'none');
    //     $('.drop_men').css('display', 'none');
    //     $('.drop_kids').css('display', 'none');
    //     // $('header').css('backgroundColor','#fff')
    //     // $('.head_lnb ul li a').css('color','black')
    // })

})


// window.addEventListener('mouseover', () => {

//     const mainLogo = document.querySelector('.logoimg');
//     const lnbA = document.querySelectorAll('.head_lnb li');
//     const head = document.querySelector('header');
//     const aTag = document.querySelectorAll('.head_lnb li a')
//     const gnbI = document.querySelectorAll('.head_gnb li a i')




//     if (window.scrollY === 0) {

//         // head.style.backgroundColor = '#fff'

//         mainLogo.setAttribute('src', '../img/LOGO/logo01.png')



//     }


// })


// window.addEventListener('scroll', (e) => {


//     const mainLnb = document.querySelectorAll('.head_lnb ul li a');
//     const mainGnb = document.querySelectorAll('.head_gnb ul li a');
//     const mainLogo = document.querySelector('.head_logo .imgwrap img');

//     if (window.scrollY > 100) {
//         document.querySelector('header').style.backgroundColor = '#fff'
//         mainLogo.setAttribute('src', '../img/LOGO/logo01.png')
//         for (let i = 0; i < mainLnb.length; i++) {
//             mainLnb[i].style.color = 'black'
//         }
//         for (let i = 0; i < mainGnb.length; i++) {
//             mainGnb[i].style.color = 'black'
//         }

//     } else if (window.scrollY <= 100) {
//         document.querySelector('header').style.backgroundColor = ''
//         mainLogo.setAttribute('src', '../img/LOGO/logo03.png')
//         for (let i = 0; i < mainLnb.length; i++) {
//             mainLnb[i].style.color = '#fff'
//         }
//         for (let i = 0; i < mainGnb.length; i++) {
//             mainGnb[i].style.color = '#fff'
//         }

//     }




// })

// // header wheel, add remove class event
// window.addEventListener('wheel', (e) => {

//     const headFix = document.querySelector('header');
//     const dropDown = document.querySelector('.dropdown_menu');

//     if (e.deltaY > 10) {
//         headFix.classList.remove("head_up");
//         headFix.classList.add("head_down");


//     } else if (e.deltaY == 0) {
//         headFix.classList.add("head_down");


//     } else if (e.deltaY < -10) {
//         headFix.classList.remove("head_down");
//         headFix.classList.add("head_up");
//     }

// })


// //gnb search box  click event
// document.addEventListener('DOMContentLoaded', () => {
//     const searchClose = document.querySelector('.search_close')
//     const searchBox = document.querySelector('.search_box')

//     searchClose.addEventListener('click', () => {
//         searchBox.style.display = 'none';
//     })

//     const gnbSearch = document.querySelector('.gnb_search')

//     gnbSearch.addEventListener('click', () => {
//         searchBox.style.display = 'block'
//     })

//     const searchInput = document.getElementById('searchbox')
//     const recentList = document.querySelector('.recent_search ul')
//     const recentNo = document.querySelector('.noresearch')

//     //검색창 검색어 추가/삭제
//     searchInput.addEventListener('change',function(){
//         recentNo.style.display = 'none'

//         const searchLi = document.createElement('li')
//         searchLi.setAttribute('class','searchli')
//         recentList.appendChild(searchLi)
//         searchLi.innerHTML = searchInput.value
//         searchInput.value = ''
//         searchInput.focus()

//         const liDel = document.createElement('span')
//         liDel.setAttribute('class','lidel')
//         searchLi.appendChild(liDel)
//         liDel.innerHTML = 'X'

//         liDel.addEventListener('click',function(){
//             recentList.removeChild(searchLi)
//         })

//         const researchAllDel = document.querySelector('.delete_history')
//         researchAllDel.addEventListener('click',function(){

//             recentList.innerHTML = ''
//             recentNo.style.display = 'block'

//         })

        
//     })


    
    



// })



//장바구니 카트 클릭이벤트
// const cart2 = document.querySelectorAll('.fa-shopping-cart')
// const cartCount = document.querySelector('.count')
// let cnt = 0

// cart2.forEach((value) => {
//     value.addEventListener('click', function () {
//         cnt++
//         cartCount.innerHTML = cnt
//     })
// })



const bgcChange = document.querySelector('.pagebtn ul li')
const bgcChangeA = document.querySelectorAll('.pagebtn ul li a')


for (let i = 0; i < bgcChangeA.length; i++) {
    bgcChangeA[i].addEventListener('click', function () {
        bgcChangeA[0].classList.remove('on')
        bgcChangeA[1].classList.remove('on')
        bgcChangeA[2].classList.remove('on')
        bgcChangeA[3].classList.remove('on')
        bgcChangeA[i].classList.add('on')
    })

    

}




// topBtn.addEventListener('click',()=>{
//     gsap.to(window,0.3,{
//         scrollTo: 0,
//     })
// })

const btn01 = document.getElementById('btn01')
const btn02 = document.getElementById('btn02')
const btn03 = document.getElementById('btn03')
const btn04 = document.getElementById('btn04')
const section01 = document.querySelector('.section01')
const section02 = document.querySelector('.section02')
const section03 = document.querySelector('.section03')
const section04 = document.querySelector('.section04')


btn01.addEventListener('click',()=>{
    gsap.to(window,0.3,{
        scrollTo: section01,
    })

})

btn02.addEventListener('click',()=>{
    gsap.to(window,0.3,{
        scrollTo: section02,
    })

})

btn03.addEventListener('click',()=>{
    gsap.to(window,0.3,{
        scrollTo: section03,
    })

})

btn04.addEventListener('click',()=>{
    gsap.to(window,0.3,{
        scrollTo: section04,
    })

})