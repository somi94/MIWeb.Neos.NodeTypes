$(document).ready(function() {
    let inBackend = $('body').is('.neos-backend');

    $('.accordion').each(function() {
        let teaser = $(this);
        let title = $(this).find('.accordion-title');
        let content = $(this).find('.accordion-content');
        let toggle = title.prepend($('<span></span>',{
            class: 'accordion-toggle',
            html: ' &#9660;'
        }));

        if(inBackend) {
            teaser.addClass('open');
            return;
        }

        //teaser.find('.jobapplication-content').hide();

        title.click(function() {
            let open = !teaser.hasClass('open');

            //teaser.find('.jobapplication-content').toggle(open);
            if(open) {
                teaser.addClass('open');

                content.css('height', '');
                let height = content.height();
                content.css('height', 0);
                content.animate({height: height}, 500);
            } else {
                teaser.removeClass('open');
                content.animate({height: 0}, 500);
            }
        });
    });
});