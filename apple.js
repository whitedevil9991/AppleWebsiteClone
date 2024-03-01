
function searchOnHover()
         {
            document.getElementById("searchi").src="assets/searchw.svg";
         }
 
         function searchOffHover()
         {
             document.getElementById("searchi").src="assets/search.svg";
         }
         function shopOnHover()
         {
            document.getElementById("shopi").src="assets/shopw.svg";
         }
 
         function shopOffHover()
         {
             document.getElementById("shopi").src="assets/shop.svg";
         }
         function logoOnHover()
         {
            document.getElementById("logoi").src="assets/applew.png";
            
         }
 
         function logoOffHover()
         {
             document.getElementById("logoi").src="assets/apple.png";
         }
         window.addEventListener("scroll",function(){
            let header=document.getElementById("header");
            header.classList.toggle("sticky", window.scrollY > 0)
        })