
// Sticky menu background: make it a bit transparent while scrolling
window.addEventListener('scroll', () => {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.7;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});


// Smooth Scrolling
$('#navbar a, .button').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});
