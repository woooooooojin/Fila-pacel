import subData from "./sub_data.js";







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


// header wheel, add remove class event
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

//gnb search box  click event
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



///////////////////////////////////////////////////////////



const subList = document.querySelector('.sublist')



function madeDiv(val) {
    for (let i = 0; i < val.length; i++) {

        const subDiv = document.createElement('div')
        subDiv.setAttribute('class', 'subBox')

        // for (let j = 0; j < subData.length; j++) {
        //     subDiv.setAttribute('id', 'sub_sort')

        // } //아이디값 부여


        const subImgWrap = document.createElement('div')
        subDiv.appendChild(subImgWrap)
        subImgWrap.setAttribute('class', 'subimg_wrap')



        // hover likes and cart
        const hoverBox = document.createElement('div')
        subImgWrap.appendChild(hoverBox)
        hoverBox.setAttribute('class', 'hoverBox')

        const hoverWrap = document.createElement('div')
        hoverBox.appendChild(hoverWrap)
        hoverWrap.setAttribute('class', 'hoverWrap')

        const like = document.createElement('div')
        const likeTxt = document.createElement('i')

        likeTxt.setAttribute('class', 'fas fa-heart')
        like.setAttribute('class', 'like')
        like.appendChild(likeTxt)
        hoverWrap.appendChild(like)

        const cart = document.createElement('div')
        const cartTxt = document.createElement('i')
        cartTxt.setAttribute('class', 'fas fa-shopping-cart')
        cart.appendChild(cartTxt)
        cart.setAttribute('class', 'cart')
        hoverWrap.appendChild(cart)


        //detail link a tag
        const linkA = document.createElement('a')
        linkA.setAttribute('href', '../detailpage/detail.html')
        linkA.setAttribute('class', 'sub_link')
        //img
        const subImg = document.createElement('img')
        subImg.setAttribute('src', val[i].src)
        subImgWrap.appendChild(linkA)
        subImg.setAttribute('class', 'subimg')
        linkA.appendChild(subImg)





        //상품설명
        const itemWrap = document.createElement('div')
        subDiv.appendChild(itemWrap)
        itemWrap.setAttribute('class', 'item_wrap')

        const itemDescWrap = document.createElement('div')
        itemWrap.appendChild(itemDescWrap)
        itemDescWrap.setAttribute('class', 'item_desc_wrap')



        const itemCategory = document.createElement('p')
        const itemCategoryTxt = document.createTextNode(val[i].category)
        itemCategory.appendChild(itemCategoryTxt)
        itemDescWrap.appendChild(itemCategory)
        itemCategory.setAttribute('class', 'item_category')


        const itemName = document.createElement('p')
        const itemNameTxt = document.createTextNode(val[i].name)
        itemName.appendChild(itemNameTxt)
        itemDescWrap.appendChild(itemName)
        itemName.setAttribute('class', 'item_name')


        const itemPrice = document.createElement('p')
        const itemPriceTxt = document.createTextNode(val[i].price)
        itemPrice.appendChild(itemPriceTxt)
        itemDescWrap.appendChild(itemPrice)
        itemPrice.setAttribute('class', 'item_price')


        //구매버튼
        const buyBox = document.createElement('div')
        itemWrap.appendChild(buyBox)
        buyBox.setAttribute('class', 'buy_box')

        const buyBtn = document.createElement('div')
        const buyTxt = document.createTextNode('BUY')
        buyBtn.appendChild(buyTxt)
        buyBox.appendChild(buyBtn)
        buyBtn.setAttribute('class', 'buy_btn')



        subList.appendChild(subDiv)






    }




}
// madeDiv(subData)


////////////////////pagenation/////////////////////////
let nowPage = 0
const showPerPage = 20; //화면에 보여질 개수



function createPage(val) {
    //const subItems = document.querySelectorAll('.subBox')
    const numOfContent = val.length; // 컨텐츠 개수
    const pageCount = Math.ceil(numOfContent / showPerPage); //페이지 버튼 개수
    const start = nowPage * showPerPage
    const end = start + showPerPage
    const newSub = val.slice(start, end)
    madeDiv(newSub)


    let paging = document.querySelector('.paging_ex') //page 들어갈곳
    for (let i = 1; i <= pageCount; i++) {
        paging.innerHTML += `<li><a href="#!">${i}</a></li>`

    } // li 생성

    const pageCountBtn = paging.querySelectorAll('a') //페이지네이션 a

    pageCountBtn.forEach((item, idx) => {
        item.addEventListener('click', () => {
            for (let value of pageCountBtn) {
                value.classList.remove('active')
            }
            if (nowPage !== idx) {

                nowPage = idx
                paging.innerHTML = ''

                sublist.innerHTML = ''
                createPage(val)
            }



        })

        if (nowPage === idx) {
            pageCountBtn[idx].classList.add('active')


        }




        // // //맨앞 맨뒤 페이지 좀더 고민,,,
        // const prevBtn = document.querySelector('.prev_btn')
        // const nextBtn = document.querySelector('.next_btn')


        // prevBtn.addEventListener('click', function () {

        //     nowPage = 0
        //     paging.innerHTML = ''

        //     sublist.innerHTML = ''
        //     createPage(val)

        // })
        // nextBtn.addEventListener('click', function () {

        //     nowPage = pageCount
        //     paging.innerHTML = ''

        //     sublist.innerHTML = ''
        //     createPage(val)

        // })

    })






}
createPage(subData)



//////////////////select 필터////////////////////////////

const selectBox = document.getElementById('select_sort'); //select box
const sublist = document.querySelector('.sublist')
let paging = document.querySelector('.paging_ex')
selectBox.addEventListener('change', function () {
    if (selectBox.value === 'expensive') {
        let exp = subData.sort((a, b) => {
            return (a.price01 - b.price01) * -1
        })
        sublist.innerHTML = ''
        paging.innerHTML = ''
        nowPage = 0
        createPage(exp)


    } else if (selectBox.value === 'cheap') {
        let cheap = subData.sort((a, b) => {
            return (a.price01 - b.price01)
        })
        sublist.innerHTML = ''
        paging.innerHTML = ''
        nowPage = 0
        createPage(cheap)
        //낮은가격순
    } else if (selectBox.value === 'basic') {
        let basic = subData.sort((a, b) => {
            return (a.id - b.id)
        })
        sublist.innerHTML = ''
        paging.innerHTML = ''
        nowPage = 0
        createPage(basic)
        // 기본
    } else if (selectBox.value === 'pop') {
        let pop = subData.sort((a, b) => {
            return (a.pop - b.pop)
        })
        sublist.innerHTML = ''
        paging.innerHTML = ''
        nowPage = 0
        createPage(pop) //인기순
    } else if (selectBox.value === 'new') {
        let newarrival = subData.sort((a, b) => {
            return new Date(a.day).getTime() - new Date(b.day).getTime()
        }) //신상날짜순
        sublist.innerHTML = ''
        paging.innerHTML = ''
        nowPage = 0
        createPage(newarrival) //신상순
    }

})


//검은색 필터 기능

const blackColor = document.getElementById('color_chk02')
const whiteColor = document.getElementById('color_chk12')
const grayColor = document.getElementById('color_chk06')

const defaultVal = document.getElementById('color_chk14')
const itemlist = document.querySelectorAll('.subBox')

const priceChk01 = document.getElementById('price_chk01')
const priceChk02 = document.getElementById('price_chk02')
const priceChk03 = document.getElementById('price_chk03')
const priceChk04 = document.getElementById('price_chk04')
const priceChk05 = document.getElementById('price_chk05')
const priceChkDefault = document.getElementById('price_chk06')

const bk = subData.filter((a) => {
    return a.color === 'black'
})

const gr = subData.filter((a) => {
    return a.color === 'gray'
})

const wht = subData.filter((a) => {
    return a.color === 'white'
})
const price01 = subData.filter((a) => {
    return a.price01 <= 39000
})
const price02 = subData.filter((a) => {
    return a.price01 >= 39000 && a.price01 <= 49000
})
const price03 = subData.filter((a) => {
    return a.price01 >= 49000 && a.price01 <= 59000
})
const price04 = subData.filter((a) => {
    return a.price01 >= 59000 && a.price01 <= 79000
})
const price05 = subData.filter((a) => {
    return a.price01 >= 79000
})



blackColor.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(bk)


})

whiteColor.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(wht)


})
grayColor.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(gr)


})

defaultVal.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(subData)

})

priceChk01.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(price01)


})

priceChk02.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(price02)


})

priceChk03.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(price03)

})

priceChk04.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(price04)


})

priceChk05.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(price05)


})
priceChkDefault.addEventListener('click', function () {
    sublist.innerHTML = ''
    paging.innerHTML = ''
    nowPage = 0
    createPage(subData)

})

















const filterOpen = document.querySelector('.filter_open')
const filterClose = document.querySelector('.filter_close')
const filterList = document.querySelector('.filter_box_list')

//제이쿼리로 slide up down구현함
// filterOpen.addEventListener('click', () => {

//     filterList.style.display = 'block'


// })
// filterClose.addEventListener('click', () => {
//     filterList.style.display = 'none'
// })





const grid01 = document.querySelector('.grid_01')
const grid02 = document.querySelector('.grid_02')
let subBox = document.querySelectorAll('.subBox')
const wrapping = document.querySelector('.sublist_wrap')

grid01.addEventListener('click', function () {

    wrapping.classList.add('gridchange01')
    wrapping.classList.remove('gridchange02')
    grid02.style.color = '#ccc'
    grid01.style.color = 'black'

})

grid02.addEventListener('click', function () {
    wrapping.classList.add('gridchange02')
    wrapping.classList.remove('gridchange01')
    grid02.style.color = 'black'
    grid01.style.color = '#ccc'

})







const popclose = document.querySelector('.popclose')
const pop01 = document.querySelector('.pop01')
popclose.addEventListener('click', function () {
    pop01.style.display = 'none'
})



//장바구니 카트 클릭이벤트
const cart2 = document.querySelectorAll('.fa-shopping-cart')
const cartCount = document.querySelector('.count')
let cnt = 0

cart2.forEach((value) => {
    value.addEventListener('click', function () {
        cnt++
        cartCount.innerHTML = cnt
    })
})

const heart = document.querySelectorAll('.fa-heart')
const heartCnt = document.querySelector('.heart_cnt')
let cntheart = 0

heart.forEach((value) => {
    value.addEventListener('click', function () {
        cntheart++
        heartCnt.innerHTML = cntheart
    })
})





// //paging
// const showPerPage = 20; //화면에 보여질 개수
// const subItems = document.querySelectorAll('.subBox')
// const numOfContent = subItems.length; // 컨텐츠 개수
// const pageCount = Math.ceil(numOfContent / showPerPage); //페이지 버튼 개수



// let paging = document.querySelector('.paging_ex') //page 들어갈곳
// for (let i = 1; i <= pageCount; i++) {
//     paging.innerHTML += `<li><a href="#!">${i}</a></li>`

// } // li 생성

// const pageCountBtn = paging.querySelectorAll('a') //페이지네이션 a

// pageCountBtn.forEach((item, idx) => {
//     item.addEventListener('click', (e) => {
//         e.preventDefault()

//         //출력
//         displayItem(idx);
//     })

// })


// function displayItem(idx) {
//     let start = idx * showPerPage // 20개 기준 idx = 0 * 20 = 0, idx=1 * 20 =20 ,,, 
//     let end = start + showPerPage // 20개 기준 start = 20, 40 , 60
//     let subArr = [...subItems] //새로운 배열로 만듬 console에 찍히는 nodelist는 slice 못씀

//     for (let val of subArr) {
//         val.style.display = 'none'
//     }

//     let newSub = subArr.slice(start, end) //새로운 배열로 만듬, start ~ end 구간 slice

//     for (let val of newSub) {
//         val.style.display = ''
//     }
//     for (let value of pageCountBtn) {
//         value.classList.remove('active')

//     }
//     pageCountBtn[idx].classList.add('active')


// }
// displayItem(0)