// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar') ;
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections active link

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll= ()=>{
    sections.forEach(sec =>{
        let top = window.scrollY;
        let offest = sec.offsetTop -150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offest && top < offest + height){
            navLinks.forEach(links=>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*='+id+']').classList.add('active');
            });
        };
    });
    // sticku navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.screenY > 100);

    // remove toggle icon and navbar when click navbar  link 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    
};

// scroll reveal
ScrollReveal({ 
    //reset: true,
    distance : '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading' ,{ origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box .contact form' ,{ origin: 'bottom' });

ScrollReveal().reveal('.home-content h1, .about-img ' ,{ origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content ' ,{ origin: 'right' });

// typed js

const typed = new Typed('.multiple-text',{
    strings:['Frontend Developer','Designer','Mobile Developer'],
    typedSpeed: 100,
    backSpeed: 100,
    backDelay : 1000,
    loop:true
});

// download cv
const downloadBtn = document.getElementById('download-btn');
downloadBtn.addEventListener('click', () => {
  const fileUrl = 'https://drive.google.com/file/d/1RKXt_7daggTIHDQ4yFQ7EmI5T2ekw8LS/view?usp=share_link'; 
  const fileName = 'cv-asma-2023.pdf';
  downloadFile(fileUrl, fileName);
});

function downloadFile(url, name) {
  const link = document.createElement('a');
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}