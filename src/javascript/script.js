$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop+ section.outerHeight();

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        })

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    // Typed.js
    var typed = new Typed('.animation', {
        strings: ["Soluções tecnológicas que elevam o desempenho do seu negócio."],
        typeSpeed: 55,
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#banner', {
        origin: 'bottom',
        duration: 2000,
        distance: '40%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonials_content', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 1000,
        distance: '20%'
    })

    ScrollReveal().reveal('.contact', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    })
    ScrollReveal().reveal('#nav-card-1', {
        origin: 'bottom',
        duration: 2000,
        distance: '50%'
    })
    ScrollReveal().reveal('#nav-card-2', {
        origin: 'bottom',
        duration: 2500,
        distance: '70%'
    })
    ScrollReveal().reveal('#nav-card-3', {
        origin: 'bottom',
        duration: 3000,
        distance: '90%'
    })
});