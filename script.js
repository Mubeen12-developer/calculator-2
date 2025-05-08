function press(p){
document.getElementById('inp').value += p
}

function eq(){
  var a =  document.getElementById('inp')
  a.value = eval(a.value)
}
function clr(){
document.getElementById('inp').value  = ''
}
function deletelast(){
    let display = document.getElementById('inp') 
    display.value = display.value.slice(0, -1)
}