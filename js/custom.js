// jquery example

// sort form
// $(function () {
//     $('.one').hide(1000);
// });

$(document).ready(function () {

    // jQuery Selectors

    // id
    // class
    // all html tag
    // this
    /*
        $(this).hide() মেথড বর্তমান এলিমেন্টকে হাইড করে।
        $("p").hide() মেথড সকল <p> এলিমেন্টকে হাইড করে।
        $(".test").hide() মেথড class="test" সম্বলিত সকল এলিমেন্টকে হাইড করে।
        $("#test").hide() মেথডে id="test" সম্বলিত এলিমেন্টকে হাইড করে।
    */
    $('.one').hide(1000);
    // $('h2').click(function () {
    //     alert('Clicked h2');
    // });
    $('.click').click(function () {
        $('.two h2').hide(100);
        // $(this).hide();
    });


});