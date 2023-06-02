
//푸터 패밀리사이트 링크 event

const family = document.getElementById('family_site')
family.addEventListener('change', (event) => {

    let options = event.currentTarget.options
    let index = options.selectedIndex

    location.href = options[index].value

})





//gnb search box  click event 헤더 검색창 이벤트
document.addEventListener('DOMContentLoaded', () => {
    const searchClose = document.querySelector('.search_close')
    const searchBox = document.querySelector('.search_box')

    searchClose.addEventListener('click', () => {
        searchBox.style.display = 'none';
    })

    const gnbSearch = document.querySelector('.gnb_search')

    gnbSearch.addEventListener('click', () => {
        searchBox.style.display = 'block'
    })

    const searchInput = document.getElementById('searchbox')
    const recentList = document.querySelector('.recent_search ul')
    const recentNo = document.querySelector('.noresearch')

    //검색창 검색어 추가/삭제
    searchInput.addEventListener('change', function () {
        recentNo.style.display = 'none'

        const searchLi = document.createElement('li')
        searchLi.setAttribute('class', 'searchli')
        recentList.appendChild(searchLi)
        searchLi.innerHTML = searchInput.value
        searchInput.value = ''
        searchInput.focus()

        const liDel = document.createElement('span')
        liDel.setAttribute('class', 'lidel')
        searchLi.appendChild(liDel)
        liDel.innerHTML = 'X'

        liDel.addEventListener('click', function () {
            recentList.removeChild(searchLi)
        })

        const researchAllDel = document.querySelector('.delete_history')
        researchAllDel.addEventListener('click', function () {

            recentList.innerHTML = ''
            recentNo.style.display = 'block'

        })


    })



})



// header wheel, add remove class event 헤더
window.addEventListener('wheel', (e) => {

    const headFix = document.querySelector('header');
    const dropDown = document.querySelector('.dropdown_menu');

    if (e.deltaY > 10) {
        headFix.classList.remove("head_up");
        headFix.classList.add("head_down");


    } else if (e.deltaY == 0) {
        headFix.classList.add("head_down");


    } else if (e.deltaY < -10) {
        headFix.classList.remove("head_down");
        headFix.classList.add("head_up");
    }

})


//헤더 스크롤 이벤트
window.addEventListener('scroll', (e) => {


    const mainLnb = document.querySelectorAll('.head_lnb ul li a');
    const mainGnb = document.querySelectorAll('.head_gnb ul li a');
    const mainLogo = document.querySelector('.head_logo .imgwrap img');

    if (window.scrollY > 100) {
        document.querySelector('header').style.backgroundColor = '#fff'
        mainLogo.setAttribute('src', '../img/LOGO/logo01.png')
        for (let i = 0; i < mainLnb.length; i++) {
            mainLnb[i].style.color = 'black'
        }
        for (let i = 0; i < mainGnb.length; i++) {
            mainGnb[i].style.color = 'black'
        }

    } else if (window.scrollY <= 100) {
        document.querySelector('header').style.backgroundColor = ''
        mainLogo.setAttribute('src', '../img/LOGO/logo03.png')
        for (let i = 0; i < mainLnb.length; i++) {
            mainLnb[i].style.color = '#fff'
        }
        for (let i = 0; i < mainGnb.length; i++) {
            mainGnb[i].style.color = '#fff'
        }

    }




})



//헤더 마우스오버 이벤트

window.addEventListener('mouseover', () => {

    const mainLogo = document.querySelector('.logoimg');
    const lnbA = document.querySelectorAll('.head_lnb li');
    const head = document.querySelector('header');
    const aTag = document.querySelectorAll('.head_lnb li a')
    const gnbI = document.querySelectorAll('.head_gnb li a i')




    if (window.scrollY === 0) {

        // head.style.backgroundColor = '#fff'

        mainLogo.setAttribute('src', '../img/LOGO/logo01.png')



    }


})



// quickmenu ////
$(function () {

    $('.quick_menu').css('top', $(window).height() / 2 - $('.quick_menu').height() / 2);
    $(window).scroll(function () {

        let point = $(this).scrollTop() + ($(window).height() / 2 - $('.quick_menu').height() /
            2)

        $('.quick_menu').stop().animate({
            top: point,
        }, 300)
    })
}) 





///////lnb slide toggle function/////
$(function () {

    




    $('.lnb_women').click(function () {
        $('.drop_women').slideToggle(300);
        $('.drop_men').css('display', 'none');
        $('.drop_kids').css('display', 'none');
        $('.drop_brand').css('display', 'none');
        // $('header').css('backgroundColor','#fff')
        // $('.head_lnb ul li a').css('color','black')
        // $('.head_logo .imgwrap img').attr('src','./img/LOGO/01(1).png')

    })


    $('.lnb_men').click(function () {
        $('.drop_men').slideToggle(300);
        $('.drop_women').css('display', 'none');
        $('.drop_kids').css('display', 'none');
        $('.drop_brand').css('display', 'none');
        // $('header').css('backgroundColor','#fff')
        // $('.head_lnb ul li a').css('color','black')
    })

    $('.lnb_kids').click(function () {
        $('.drop_kids').slideToggle(300);
        $('.drop_women').css('display', 'none');
        $('.drop_men').css('display', 'none');
        $('.drop_brand').css('display', 'none');
        // $('header').css('backgroundColor','#fff')
        // $('.head_lnb ul li a').css('color','black')
    })

    $('.lnb_brand').click(function () {
        $('.drop_brand').slideToggle(300);
        $('.drop_women').css('display', 'none');
        $('.drop_men').css('display', 'none');
        $('.drop_kids').css('display', 'none');
        // $('header').css('backgroundColor','#fff')
        // $('.head_lnb ul li a').css('color','black')
    })



    $('.new_info').click(function () {
        $('.new_info_desc').css('display', 'block')
    })

    // $('.new_box_close').click(function(){
    //     $('.new_info_desc').css('display','none')
    // })

    // $(window).scroll(function(){
    //     if($(window).scrollTop() > 100){
    //         $('.head_logo .imgwrap img').attr('src','./img/00. LOGO/01(1).png');
    //         $('header').css('backgroundColor','#fff')
    //         $('.head_lnb ul li a').css('color','black')
    //         $('.head_gnb ul li a').css('color','black')
    //     }else{
    //         $('.head_logo .imgwrap img').attr('src','./img/00. LOGO/01(3).png')
    //         $('header').css('backgroundColor','')
    //         $('.head_lnb ul li a').css('color','#fff')
    //         $('.head_gnb ul li a').css('color','#fff')
    //     }
    // })



    //dir btn event
    $(window).scroll(function () {

        if ($(window).scrollTop() >= 500) {
            $('.dir_btn').stop().animate({
                right: 0,
            }, 500)
        } else {
            $('.dir_btn').stop().animate({
                right: -50,
            }, 500)
        }
    })

    $('.top_btn').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: 0,
        }, 300)
    })

    $('.bot_btn').click(function (e) {
        e.preventDefault();

        $('html, body').stop().animate({
            scrollTop: $(document).height(),
        }, 300)
    })






})