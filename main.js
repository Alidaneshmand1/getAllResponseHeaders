const button = document.getElementById("button1")
button.innerText = 'double click'
button.style.fontSize = '25px'
button.addEventListener('dblclick' , function() {
    xhttp = new XMLHttpRequest
    xhttp.onload = function() {
        const demo = document.getElementById('demo')
        demo.innerHTML = xhttp.getAllResponseHeaders()
    }
    xhttp.open('GET' , )
    xhhtp.send()

})
