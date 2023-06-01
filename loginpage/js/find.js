


const membership = [
    {
        id : "member01",
        pw :"hong1234",
        name : "홍길동",
        birth : '900301',
    },
    {
        id: "member02",
        name: "이순신",
        pw:"lee1234",
        birth : '910501',
    },
    {
        id: "member03",
        name: "김구",
        pw:"kim1234",
        birth : '890501',
    },
    {
        id: "member04",
        name: "윤봉길",
        pw:"yoon1234",
        birth : '680903',
    },
    {
        id: "woojin",
        name: "최우진",
        pw:"woojin123",
        birth : '940402',
    },
    
    
    
    
    
    ]



const findName = document.getElementById('findid')
const findId = document.getElementById('findpw')
const findNum01= document.getElementById('findnum01')
const findNum02= document.getElementById('findnum02')
const idBtn = document.getElementById('idbtn')
const pwBtn = document.getElementById('pwbtn')


idBtn.addEventListener('click', yourId)
pwBtn.addEventListener('click',yourPw)

function yourId() {
    for (let i = 0; i < membership.length; i++) {
        if (findName.value === membership[i].name && findNum01.value === membership[i].birth) {
            alert('아이디는 '+(JSON.stringify(membership[i].id))+' 입니다.')
        }


    }

}

function yourPw(){

    for(let i =0; i < membership.length; i++){
        if(findNum02.value === membership[i].birth && findId.value === membership[i].id){
           alert('비밀번호는 ' + (JSON.stringify(membership[i].pw )) + ' 입니다.')
        }

    }

}
