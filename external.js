function hello() {
    var greeting = document.getElementById("msg").value
    
    alert(greeting)
}
function enableMsg() {
    if (document.getElementById("msg").disabled) {
        document.getElementById("msg").removeAttribute("disabled")
    }
    else {
        document.getElementById("msg").setAttribute("disabled", "true")
    }
}