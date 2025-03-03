function myFunction(){
    document.getElementById("menu-itens").classList.toggle("show");
}

window.onclick = function(event){
    if(!event.target.matches('.dropbutton')){
        var dropdowns = document.getElementsByClassName("menu-content");
        var i;
        for(i=0; i<dropdowns.length; i++){
            var openDropdown = dropdowns[i];
            if(openDropdown.classList.contains('show')){
                openDropdown.classList.remove('show');
            }
        }
    }
}