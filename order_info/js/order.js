

document.addEventListener('DOMContentLoaded',function(){

    const infoChk = document.getElementById('deli_chk')

    infoChk.addEventListener('click',function(){

        if(infoChk.checked === true){
            document.getElementById('deli_name').value = document.getElementById('user_name').value
            document.getElementById('deli_id').value = document.getElementById('user_id').value
            document.getElementById('deli_addr').value = document.getElementById('user_addr').value
            document.getElementById('deli_num').value = document.getElementById('user_num').value
        }else{
            document.getElementById('deli_name').value = ''
            document.getElementById('deli_id').value = ''
            document.getElementById('deli_addr').value = ''
            document.getElementById('deli_num').value = ''
        }

    })

})