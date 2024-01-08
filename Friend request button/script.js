var stat =  document.querySelector("h5")

 var addFriend= document.querySelector("#add")
 var removeFriend = document.querySelector("#remove")


 addFriend.addEventListener("click",function(){
    stat.innerHTML = "Friends"
    stat.style.color = "green"

 })
 removeFriend.addEventListener("click",function(){
    stat.innerHTML = "Stranger"
    stat.style.color ="red"
 })
