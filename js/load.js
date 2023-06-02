
//footer fetch로 가져오기
//addlistener error


// const foot = document.getElementById('footer')

// fetch('footer.html')
// .then(resolve => resolve.text())
// .then(data => foot.innerHTML = data)



//일단은 됨 //애드리쓰너 안뜸
// const foot = document.getElementById('footer')

// async function footerGet() {
//     await fetch('./footer.html')
//         .then(resolve => resolve.text())
//         .then(data => foot.innerHTML = data)


// }
// footerGet()



//jquery로 가져오기

// $(function(){

//     $('#footer').load("./footer.html")

// })


//http리퀘스트로 가져오기

function loadHTML(file)
{
    let rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                let allText = rawFile.responseText;
                document.write(allText);
            }
        }
    }
    rawFile.send(null);
}






