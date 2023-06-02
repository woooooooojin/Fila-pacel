//장바구니 카트 클릭이벤트
const cart2 = document.querySelectorAll('.fa-shopping-cart')
const cartCount = document.querySelector('.count')
let cnt = 0
cartCount.innerHTML = cnt

cart2.forEach((value) => {
    value.addEventListener('click', function () {
        cnt++
        cartCount.innerHTML = cnt
    })
})

const heart = document.querySelectorAll('.fa-heart')
const heartCnt = document.querySelector('.heart_cnt')
let cntheart = 0
heartCnt.innerHTML = cntheart

heart.forEach((value) => {
    value.addEventListener('click', function () {
        cntheart++
        heartCnt.innerHTML = cntheart
    })
})
