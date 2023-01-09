 function circleExists(event) {
   setTimeout(() => {
    event.target.style.visibility = 'visible';
  }, 500);
}


  function circleNotExists(event) {
   
      event.target.style.visibility = 'hidden';
    
} 
document.body.onload = function() {
  document.body.classList.add('loaded');
};

for(let i=0; i < 253; i++){
  let circle = document.createElement('div');
  circle.classList.add('circle');
  document.body.appendChild(circle);
}

let overedCircles = document.querySelectorAll('.circle');

overedCircles.forEach( circle =>{
    
   circle.addEventListener('mouseover',circleNotExists);
   circle.addEventListener('mouseout', circleExists);

});
     

  let whoAmI = document.getElementById('who');
  let project = document.getElementById('projects');
  let contact = document.getElementById('contact');
   
  whoAmI.style.display = "block";
  contact.style.display = "none";
  project.style.display = "none";
   
  
   let list = document.querySelector('ul');
   let listItems = list.children;
 

   listItems[0].addEventListener("click", () => {
   whoAmI.style.display = "block";
   contact.style.display = "none";
   project.style.display = "none";
   });

  
   listItems[1].addEventListener("click", () => {
   project.style.display = "block";
   whoAmI.style.display = "none";
   contact.style.display = "none";
   });

   listItems[2].addEventListener("click", () => {
   contact.style.display = "block";
   whoAmI.style.display = "none";
   project.style.display = "none";
    });









