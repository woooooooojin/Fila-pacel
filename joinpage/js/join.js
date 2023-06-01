document.addEventListener('DOMContentLoaded', function () {


    const userId = document.getElementById('user_id')
    const userPw1 = document.getElementById('user_pw1')
    const userPw2 = document.getElementById('user_pw2')
    const phoneSecond = document.getElementById('phone_second')
    const phoneThird = document.getElementById('phone_third')
    const userYear = document.getElementById('user_year')
    const userMonth = document.getElementById('user_month')
    const userDay = document.getElementById('user_day')
    const loginBtn = document.getElementById('log_in')
    const userName = document.getElementById('user_name')
    const needCheck = document.querySelector('.need')

    userId.addEventListener('change', checkId)
    userPw1.addEventListener('change', checkPw)
    userPw2.addEventListener('change', comparePW)
    phoneSecond.addEventListener('keyup', moveThird)
    userYear.addEventListener('keyup', moveMonth)
    userMonth.addEventListener('keyup', moveDay)
    userDay.addEventListener('keyup',userDayTest)
    phoneThird.addEventListener('keyup',phThirdCheck)
    loginBtn.addEventListener('click',loginBtnCheck)


    function checkId() {
        const idTrue = document.querySelector('.id_true')
        const idFalse = document.querySelector('.id_false')
        const idvalcheck = /^[a-z0-9]+$/
        //a-z소문자 0-9숫자  사용할수 있다는 뜻, +는 영소문자,숫자가 한번씩 나와야 한다는 뜻
        const idVal = userId.value

        if (!idvalcheck.test(idVal) || userId.value.length < 6 || userId.value.length > 16) {
            idTrue.style.display = 'none'
            idFalse.style.display = 'block'
            userId.value = ''
            userId.focus()
        } else {
            idTrue.style.display = 'block'
            idFalse.style.display = 'none'
        }


    } //check id ()

    function loginBtnCheck(){
    
        if(userId.value === ''){
            alert('아이디를 입력하세요')
        }else if(userPw1.value === ''){
            alert('비밀번호를 입력하세요')
        }else if(userPw2.value === ''){
            alert('비밀번호 확인을 입력하세요')
        }else if(userName.value ===''){
            alert('이름을 입력하세요')
        }else if(userYear.value ===''){
            alert('생년을 입력하세요')
        }else if(userMonth.value ===''){
            alert('생월을 입력하세요')
        }else if(userDay.value ===''){
            alert('생일을 입력하세요')
        }else if(phoneSecond.value ===''){
            alert('휴대폰번호를 입력하세요')
        }else if(phoneThird.value ===''){
            alert('휴대폰번호를 입력하세요')
        }else if(needCheck.checked === false){
            alert('필수항목에 체크해주세요')
        }else{
            alert('가입완료')
        }

        

    }





    function checkPw() {
        const pw1True = document.querySelector('.pw1_true')
        const pw1False = document.querySelector('.pw1_false')
        const lock01 = document.querySelector('.lock_1')
        const pwvalCheck = /^[a-zA-Z0-9]+$/
        //a-z소문자 A-Z대문자 0-9숫자 사용할수 있다는 뜻, +는 영 대,소문자,숫자가 한번씩 나와야 한다는 뜻
        const pwVal = userPw1.value

        if (!pwvalCheck.test(pwVal) || userPw1.value.length < 8) {
            pw1True.style.display = 'none'
            pw1False.style.display = 'block'
            lock01.style.color = 'red'

            userPw1.value = ''
            userPw1.focus()
        } else {
            pw1True.style.display = 'block'
            pw1False.style.display = 'none'
            lock01.style.color = 'blue'
        }

    } //checkpw ()




    function comparePW() {
        const pw2True = document.querySelector('.pw2_true')
        const pw2False = document.querySelector('.pw2_false')
        const lock02 = document.querySelector('.lock_2')
        if (userPw1.value !== userPw2.value) {
            pw2True.style.display = 'none'
            pw2False.style.display = 'block'
            lock02.style.color = 'red'
        } else {
            pw2True.style.display = 'block'
            pw2False.style.display = 'none'
            lock02.style.color = 'blue'
        }

    } //compare pw()


    function moveThird() {
        const phoneSecondCheck = /[0-9]/
        const phSecondVal = phoneSecond.value
        if (phoneSecond.value.length >= 4 && phoneSecondCheck.test(phSecondVal)) {
            phoneThird.focus()
        }else if(!phoneSecondCheck.test(phSecondVal)){
            alert('숫자만 입력하세요.')
            phoneSecond.value=''
        }
    } //movethird

    function phThirdCheck(){
        const phoneThirdCheck = /[0-9]/
        const phoneThirdVal = phoneThird.value
        if(!phoneThirdCheck.test(phoneThirdVal)){
            alert('숫자만 입력하세요.')
            phoneThird.value=''
        }


    }

    function moveMonth() {
        const yearCheck = /[0-9]/
        const userYearVal = userYear.value

        if (userYear.value.length >= 4 && yearCheck.test(userYearVal)) {
            userMonth.focus()
        }else if(!yearCheck.test(userYearVal)){
            alert('숫자만 입력하세요.')
            userYear.value=''
        }
    } //movemonth


    function moveDay() {
        const monthCheck = /[0-9]/
        const userMonthVal = userMonth.value 
        if (userMonth.value.length >= 2 && monthCheck.test(userMonthVal)) {
            userDay.focus()
        }else if(!monthCheck.test(userMonthVal)){
            alert('숫자만 입력하세요.')
            userMonth.value=''
        }
    } //moveday

    function userDayTest(){
        const dayCheck = /[0-9]/
        const dayCheckVal = userDay.value
         if (!dayCheck.test(dayCheckVal)) {
            alert('숫자만 입력하세요.')
            userDay.value = ''
        }
    }


    ///////////////////////////////////////

    const totalTerms = document.getElementById('check01')
    const termsEles = document.querySelectorAll('.chk_el')
    const terms02 = document.getElementById('check02')
    const terms03 = document.getElementById('check03')
    const terms04 = document.getElementById('check04')
    const terms05 = document.getElementById('check05')
    const terms06 = document.getElementById('check06')

    totalTerms.addEventListener('click', allCheck)
    terms02.addEventListener('click', eachCheck)
    terms03.addEventListener('click', eachCheck)
    terms04.addEventListener('click', eachCheck)
    terms05.addEventListener('click', eachCheck)


    function allCheck() {
        if (totalTerms.checked === true) {
            termsEles.forEach((termsEl) => {
                termsEl.checked = true
                terms06.checked = false
            })
        } else {
            termsEles.forEach((termsEl) => {
                termsEl.checked = false
            })
        }
    }

    function eachCheck() {

        if (terms02.checked && terms03.checked && terms04.checked && terms05.checked) {
            totalTerms.checked = true
        } else {
            totalTerms.checked = false
        }

    }





    /////////////////////////////
    const spanClick = document.querySelector('.span02')
    const spanClick02 = document.querySelector('.span03')
    const spanClick03 = document.querySelector('.span04')
    const spanClick04 = document.querySelector('.span05')
    const spanClick05 = document.querySelector('.span06')

    const popUp01 = document.querySelector('.pop01')
    const popUp02 = document.querySelector('.pop02')
    const popUp03 = document.querySelector('.pop03')
    const popUp04 = document.querySelector('.pop04')
    const popUp05 = document.querySelector('.pop05')
    


    const closePop = document.querySelector('.close01')
    const closePop02 = document.querySelector('.close02')
    const closePop03 = document.querySelector('.close03')
    const closePop04 = document.querySelector('.close04')
    const closePop05 = document.querySelector('.close05')


    spanClick.addEventListener('click', () => {

        popUp01.style.display = 'block'

    })
    closePop.addEventListener('click', () => {

        popUp01.style.display = 'none'

    })

    spanClick02.addEventListener('click', () => {

        popUp02.style.display = 'block'

    })
    closePop02.addEventListener('click', () => {

        popUp02.style.display = 'none'

    })

    
    spanClick03.addEventListener('click', () => {

        popUp03.style.display = 'block'

    })
    closePop03.addEventListener('click', () => {

        popUp03.style.display = 'none'

    })

    spanClick04.addEventListener('click', () => {

        popUp04.style.display = 'block'

    })
    closePop04.addEventListener('click', () => {

        popUp04.style.display = 'none'

    })

    spanClick05.addEventListener('click', () => {

        popUp05.style.display = 'block'

    })
    closePop05.addEventListener('click', () => {

        popUp05.style.display = 'none'

    })









})