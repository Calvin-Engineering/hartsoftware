
document.addEventListener('DOMContentLoaded', () => {

    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');

    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    }



    //scroll sections
    let sections = document.querySelectorAll('section');
    let navLinks = document.querySelectorAll('header nav a');

    window.onscroll = () => {
        sections.forEach(sec => {
            let top = window.scrollY;
            let offset = sec.offsetTop - 10;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(links => {
                    console.log("here");
                    links.classList.remove('active');
                    document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                });
            }
        });

        let header = document.querySelector('header');
        header.classList.toggle('sticky', window.scrollY > 10);

        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');

    }

    (function () {
        emailjs.init("5S7u_upHC00TYuiw5"); // You get this from emailjs.com
    })();

    document.getElementById('contact-form').addEventListener('submit', function (event) {
        event.preventDefault();
        emailjs.sendForm('service_lw7hxxf', 'template_lo16p89', this)
            .then(function () {
                alert('Thank you for reaching out! I have received your message and will be in touch soon.');
                document.getElementById('contact-form').reset();
            }, function (error) {
                alert('Failed to send message. Try again later.');
            });
    });

})