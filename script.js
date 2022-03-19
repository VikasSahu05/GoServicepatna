
  window.onscroll = function() {myFunction()};
  
  var navbar = document.getElementById("navbarDiv");
  var sticky = navbar.offsetTop;
  
  function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }

// counter number start from here

var counter = document.querySelectorAll(".counterNumber");
counter.forEach((counter)=>{
  counter.innerText = '';

  const UpdateCounter = ()=>{
    const target = +counter.getAttribute('data-target');
    console.log(target);
    const c = +counter.innerText
    console.log(c);

    const increment = target/200;

    if(c<target){
      counter.innerText = `${Math.ceil(c+increment)}`;
      setTimeout(UpdateCounter,100);
    }else{
      counter.innerText = target;
    }
  };
  UpdateCounter();
})
//counter number end from here

  // scrollLoad  start from here
  window.addEventListener('scroll',scrollLoad);
  function scrollLoad(){
    var scrollLoads = document.querySelectorAll('.scrollLoad');

    for(var i = 0;i<scrollLoads.length;i++){
       var windowHeight = window.innerHeight;
       var scrollLoadTop = scrollLoads[i].getBoundingClientRect().top;

       var scrollLoadPoint = 150;

       if(scrollLoadTop < windowHeight - scrollLoadPoint){
          scrollLoads[i].classList.add("scrollActive");
       }else{
          scrollLoads[i].classList.remove("scrollActive");
       }
    }
  }

  // scrollLoad end from here
  var acc = document.getElementsByClassName("accordion");
  var i;
  
  for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
      this.classList.toggle("activeAccordion");
      var panel = this.nextElementSibling;
      if (panel.style.display === "block") {
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }


  //accordian end here



  

  
