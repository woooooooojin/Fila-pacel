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
    searchInput.addEventListener('change',function(){
        recentNo.style.display = 'none'

        const searchLi = document.createElement('li')
        searchLi.setAttribute('class','searchli')
        recentList.appendChild(searchLi)
        searchLi.innerHTML = searchInput.value
        searchInput.value = ''
        searchInput.focus()

        const liDel = document.createElement('span')
        liDel.setAttribute('class','lidel')
        searchLi.appendChild(liDel)
        liDel.innerHTML = 'X'

        liDel.addEventListener('click',function(){
            recentList.removeChild(searchLi)
        })

        const researchAllDel = document.querySelector('.delete_history')
        researchAllDel.addEventListener('click',function(){

            recentList.innerHTML = ''
            recentNo.style.display = 'block'

        })

        
    })


    
    



})



document.addEventListener('DOMContentLoaded', function () {






    const pdcInfoLi = document.querySelectorAll('.pdc_info_tit li')
    const infoBox01 = document.querySelector('.infobox_01')
    const infoBox02 = document.querySelector('.infobox_02')
    const infoBox03 = document.querySelector('.infobox_03')
    pdcInfoLi[0].addEventListener('click', function () {
        pdcInfoLi[2].classList.remove("on")
        pdcInfoLi[1].classList.remove("on")
        pdcInfoLi[0].classList.add("on")
        infoBox01.style.display = 'block'
        infoBox02.style.display = 'none'
        infoBox03.style.display = 'none'
    })
    pdcInfoLi[1].addEventListener('click', function () {
        pdcInfoLi[2].classList.remove("on")
        pdcInfoLi[0].classList.remove("on")
        pdcInfoLi[1].classList.add("on")
        infoBox01.style.display = 'none'
        infoBox02.style.display = 'block'
        infoBox03.style.display = 'none'
    })
    pdcInfoLi[2].addEventListener('click', function () {
        pdcInfoLi[0].classList.remove("on")
        pdcInfoLi[1].classList.remove("on")
        pdcInfoLi[2].classList.add("on")
        infoBox01.style.display = 'none'
        infoBox02.style.display = 'none'
        infoBox03.style.display = 'block'
    })





    const sizeInfo = document.querySelector('.size_info')
    const sizeClose = document.querySelector('.size_close')
    const realSize = document.querySelector('.real_size')
    sizeInfo.addEventListener('click', () => {

        realSize.style.display = 'block'

    })
    sizeClose.addEventListener('click', () => {
        realSize.style.display = 'none'

    })







    const reviewTab = document.querySelectorAll('.review_tab ul li')
    const reviewBox = document.querySelector('.review_box01')
    const noticeBox = document.querySelector('.notice_box01')

    reviewTab[0].addEventListener('click', function () {

        reviewTab[1].classList.remove('on1')
        reviewTab[0].classList.add('on1')
        reviewBox.style.display = 'block'
        noticeBox.style.display = 'none'
    })
    reviewTab[1].addEventListener('click', function () {

        reviewTab[0].classList.remove('on1')
        reviewTab[1].classList.add('on1')
        reviewBox.style.display = 'none'
        noticeBox.style.display = 'block'
    })






    //리뷰 등록

    const reviewBtn = document.getElementById('review_btn') //리뷰버튼
    const reviewName = document.getElementById('rename') //리뷰아이디
    const reviewTxt = document.getElementById('retxt') //리뷰본문
    const R_List = document.querySelector('.R_list')


    reviewBtn.addEventListener('click', function () {

        const Li = document.createElement('li')
        Li.setAttribute('class', 'review_inner')

        const numberBox = document.createElement('div')
        numberBox.setAttribute('class', 'inner_number')
        Li.appendChild(numberBox)

        const numberSpan = document.createElement('span')
        numberSpan.setAttribute('class', 'review_txt')
        numberBox.appendChild(numberSpan)

        let Rcnt = 1;
        const Lis = document.querySelectorAll('.review_inner')

        function plusCnt() {
            for (i = 0; i < Lis.length; i++) {
                Rcnt++
            }

            numberSpan.innerHTML = Rcnt

        }
        plusCnt()






        const starBox = document.createElement('div')
        starBox.setAttribute('class', 'inner_stars')
        Li.appendChild(starBox)


        // 별
        const star1 = document.createElement('i')
        star1.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star1)

        const star2 = document.createElement('i')
        star2.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star2)
        const star3 = document.createElement('i')
        star3.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star3)
        const star4 = document.createElement('i')
        star4.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star4)
        const star5 = document.createElement('i')
        star5.setAttribute('class', 'fas fa-star')
        starBox.appendChild(star5)


        const txtBox = document.createElement('div')
        txtBox.setAttribute('class', 'inner_txt')
        Li.appendChild(txtBox)

        const txtspan = document.createElement('span')
        txtspan.setAttribute('class', 'txt_span')
        txtBox.appendChild(txtspan)
        txtspan.innerHTML = reviewTxt.value
        reviewTxt.value = ''



        const idBox = document.createElement('div')
        idBox.setAttribute('class', 'inner_id')
        Li.appendChild(idBox)

        const idSpan = document.createElement('span')
        idSpan.setAttribute('class', 'id_span')
        idBox.appendChild(idSpan)
        idSpan.innerHTML = reviewName.value
        reviewName.value = ''

        const dateBox = document.createElement('div')
        dateBox.setAttribute('class', 'inner_date')
        Li.appendChild(dateBox)

        const dateSpan = document.createElement('span')
        dateSpan.setAttribute('class', 'date_span')
        dateBox.appendChild(dateSpan)

        //날짜 넣기
        let nowDate = new Date().toLocaleDateString();
        dateSpan.innerHTML = nowDate


        const closeBox = document.createElement('div')
        closeBox.setAttribute('class', 'inner_close')
        Li.appendChild(closeBox)

        const closeX = document.createElement('i')
        closeX.setAttribute('class', 'fas fa-times')
        closeBox.appendChild(closeX)









        R_List.appendChild(Li)

        closeX.addEventListener('click', function () {
            R_List.removeChild(Li)
        })





    })





    //주문수량, 가격 event

    const minusBox = document.querySelector('.minus_box')
    const plusBox = document.querySelector('.plus_box')
    const cntBox = document.getElementById('cnt_box')
    const totalPrice = document.querySelector('.total_price span')

    minusBox.addEventListener('click', function () {

        cntBox.value--
        if (cntBox.value <= 0) {
            cntBox.value = 1
        }
        let result = cntBox.value * 119000
        totalPrice.innerHTML = result.toLocaleString('ko-KR')
        // totalPrice.innerHTML = cntBox.value * 119000
    })
    plusBox.addEventListener('click', function () {

        cntBox.value++
        if (cntBox.value > 20) {
            alert('수량은 최대 20개 가능합니다.')
            cntBox.value = '20'
        }
        let result = cntBox.value * 119000
        totalPrice.innerHTML = result.toLocaleString('ko-KR')
        // totalPrice.innerHTML = cntBox.value * 119000

    })

    cntBox.addEventListener('change', function () {
        let result = cntBox.value * 119000
        totalPrice.innerHTML = result.toLocaleString('ko-KR')

        if (cntBox.value <= 0) {
            cntBox.value = '1'
            alert('수량은 1개이상 가능합니다.')
            totalPrice.innerHTML = '119,000'
        } else if (cntBox.value <= 21) {
            cntBox.value = '20'
            alert('수량은 최대 20개까지 가능합니다.')
        }
    })





    //상품문의 등록
    const noticeName = document.getElementById('notice_name')
    const noticeTxt = document.getElementById('notice_txt')
    const noticeBtn = document.getElementById('notice_btn')
    const noticeList = document.querySelector('.N_list')

    noticeBtn.addEventListener('click', function () {

        const noticeLi = document.createElement('li')
        noticeLi.setAttribute('class', 'notice_inner')

        const noticeNum = document.createElement('div')
        noticeNum.setAttribute('class', 'notice_num')
        noticeLi.appendChild(noticeNum)

        const noticeNumSpan = document.createElement('span')
        noticeNumSpan.setAttribute('class', 'notice_num_span')
        noticeNum.appendChild(noticeNumSpan)

        let Rcnt = 1;
        const noLis = document.querySelectorAll('.notice_inner')

        function plusCnt() {
            for (i = 0; i < noLis.length; i++) {
                Rcnt++
            }

            noticeNumSpan.innerHTML = Rcnt

        }
        plusCnt()

        const noticeText = document.createElement('div')
        noticeText.setAttribute('class', 'notice_txt')
        noticeLi.appendChild(noticeText)

        const textSpan = document.createElement('span')
        textSpan.setAttribute('class', 'notice_text_span')
        noticeText.appendChild(textSpan)

        textSpan.innerHTML = noticeTxt.value
        noticeTxt.value = ''

        const noticeReBtn = document.createElement('div')
        noticeReBtn.setAttribute('class', 'notice_rebtn')
        noticeLi.appendChild(noticeReBtn)

        const noticeBtnSpan = document.createElement('span')
        noticeReBtn.appendChild(noticeBtnSpan)
        noticeBtnSpan.innerHTML = '답글달기'

        const noticeId = document.createElement('div')
        noticeId.setAttribute('class', 'notice_id')
        noticeLi.appendChild(noticeId)



        const noticeIdSpan = document.createElement('span')
        noticeIdSpan.setAttribute('class', 'notice_id_span')
        noticeId.appendChild(noticeIdSpan)

        noticeIdSpan.innerHTML = noticeName.value
        noticeName.value = ''

        const noticeDate = document.createElement('div')
        noticeDate.setAttribute('class', 'notice_date')
        noticeLi.appendChild(noticeDate)

        const noticeDateSpan = document.createElement('span')
        noticeDateSpan.setAttribute('class', 'notice_date_span')
        noticeDate.appendChild(noticeDateSpan)

        let nowNoticeDate = new Date().toLocaleDateString();
        noticeDateSpan.innerHTML = nowNoticeDate

        const noticeClose = document.createElement('div')
        noticeClose.setAttribute('class', 'notice_close')
        noticeLi.appendChild(noticeClose)

        const noticeI = document.createElement('i')
        noticeI.setAttribute('class', 'fas fa-times')
        noticeClose.appendChild(noticeI)

        ////re
        const noticeRe = document.createElement('div')
        noticeRe.setAttribute('class', 'Re_list')
        noticeLi.appendChild(noticeRe)




        noticeList.appendChild(noticeLi)

        noticeClose.addEventListener('click', function () {
            noticeList.removeChild(noticeLi)
        })






        const replyPop = document.querySelector('.re_pop')

        noticeReBtn.addEventListener('click', function () {
            replyPop.style.display = 'block'
        })



    })


    //답글 추가

    const reTxt = document.getElementById('replyTxt')
    const n_List = document.querySelector('.notice_list')
    const reClose = document.getElementById('re_close')
    const rePop = document.querySelector('.re_pop')
    const registBtn = document.getElementById('re_btn')
    const noticefor = document.querySelector('.notice_inner')



    registBtn.addEventListener('click', function () {


        const noticeLi = document.querySelector('.Re_list')


        const reply = document.createElement('div')
        reply.setAttribute('class', 'reply_box')

        const replySpan = document.createElement('span')
        replySpan.setAttribute('class', 'reply_span')
        reply.appendChild(replySpan)
        replySpan.innerHTML = 'ㄴ> 답글 :'

        const replyTxt = document.createElement('span')
        replyTxt.setAttribute('class', 'reply_txt')
        reply.appendChild(replyTxt)
        replyTxt.innerHTML = reTxt.value

        const replyDel = document.createElement('span')
        replyDel.setAttribute('class', 'reply_del')
        reply.appendChild(replyDel)
        replyDel.innerHTML = 'X'


        noticeLi.appendChild(reply)









        replyDel.addEventListener('click', function () {
            noticeLi.removeChild(reply)

        })








    })

    registBtn.addEventListener('click', function () {
        reTxt.value = ''
    })

    reClose.addEventListener('click', function () {
        rePop.style.display = 'none'
    })






    

    //장바구니 카트 클릭이벤트
    const cart2 = document.querySelectorAll('.cart_box')
    const cartCount = document.querySelector('.count')
    let cnt = 0

    cart2.forEach((value) => {
        value.addEventListener('click', function () {
            cnt++
            cartCount.innerHTML = cnt
        })
    })

    const heart = document.querySelectorAll('.like_box')
    const heartCnt = document.querySelector('.heart_cnt')
    let cntheart = 0

    heart.forEach((value) => {
        value.addEventListener('click', function () {
            cntheart++
            heartCnt.innerHTML = cntheart
        })
    })

















})