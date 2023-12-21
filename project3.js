
var typeData = new Typed(".role", {
    strings: [
      "Coder",
      "Software Developer",
      "Front-End Developer",
      "Web Developer",
      "Java Developer",
      "Anime watcher"
    ],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 1000,
  });
  const links = document.querySelectorAll('.link');
  const sections = document.querySelectorAll('section');
  
  let activeLink = 0;
  
  links.forEach((link, i) => {
      link.addEventListener('click', () => {
          if(activeLink != i){
              links[activeLink].classList.remove('active');
              link.classList.add('active');
              sections[activeLink].classList.remove('active');
  
              setTimeout(() => {
                  activeLink = i;
                  sections[i].classList.add('active');
              }, 1000);
          }
      })
  })
 

  


