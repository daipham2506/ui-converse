const button = document.getElementById("move-to-top");
window.onscroll = () =>{
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        button.style.display = "block";
    }else{
        button.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
const moveToTop= () =>{
    document.body.scrollTop = 0;// For Safari
    document.documentElement.scrollTop = 0;
}