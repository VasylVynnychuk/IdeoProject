 $(document).ready(function () {
    // $('.input-search').hide();
    // $('.fa-search').click(function () {
    //     if(display === true){
    //         $('.fa-search').show();
    //     }else if(display === false){
    //         $('.fa-search').hide();
    //     }
    // });
    $('.input-search').hide();
    $('.fa-search').click(function () {
        $('.input-search').toggle("slide", { direction: "right" }, 500);
    });

    $('div#menu-left').hide();
    $('.triangle-open').click(function () {
        $('#menu').switchClass('close-menu', 'open-menu', 'slow');
        $('div#menu-left').show(300);
    });

    $('.triangle-close').click(function () {
        $('div#menu').switchClass('open-menu','close-menu','slow');
        $('div#menu-left').hide("slow");
    });
 });