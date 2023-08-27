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
        $('.two h2').hide(1000);
        // $(this).hide();
    });

    /*
        More Examples of jQuery Selectors
        Syntax	Description	Example
        ---------------------------------------
        $("*")	Selects all elements	
        $(this)	Selects the current HTML element	
        $("p.intro")	Selects all <p> elements with class="intro"	
        $("p:first")	Selects the first <p> element	
        $("ul li:first")	Selects the first <li> element of the first <ul>	
        $("ul li:first-child")	Selects the first <li> element of every <ul>	
        $("[href]")	Selects all elements with an href attribute	
        $("a[target='_blank']")	Selects all <a> elements with a target attribute value equal to "_blank"	
        $("a[target!='_blank']")	Selects all <a> elements with a target attribute value NOT equal to "_blank"	
        $(":button")	Selects all <button> elements and <input> elements of type="button"	
        $("tr:even")	Selects all even <tr> elements	
        $("tr:odd")	Selects all odd <tr> elements

    */
    
    /*
        জেকুয়েরি ইভেন্ট মেথড
        -----------------------------
        click	
        dblclick			
        mouseenter			
        mouseleave
        keypress
        submit
        load
        keydown	
        keyup
        blur	
        unload
        change
        focus
        resize
        scroll
        on()
        on() 
        মেথড একটি এইচটিএমএল এলিমেন্টে এক বা একাধিক ইভেন্ট হ্যান্ডলার সংযুক্ত করতে on() মেথড ব্যবহার করতে পারেন।
    */
    
    // জেকুয়েরি ইভেন্ট মেথড all apply function
    $('#event').dblclick(function(){
        $(this).hide();
    });

    // on explore

    $("#hide").click(function(){
        $('h2').hide('slow');
    });

    $("#show").click(function(){
        $('h2').show('fast');
    });

    // hide r show er all toggle aki kore

    $(".btn-toggle").click(function(){
        $("h1").toggle();
    });

    // jQuery Effects - Fading
    /*
        ফেইড মেথড জেকুয়েরির মাধ্যমে আপনি চাইলে কোনো এলিমেন্টের মধ্যে দৃশ্যমান ফেইড ইন/আউট যুক্ত করতে পারেন।

        জেকুয়েরির ফেইড মেথডগুলো নিম্নরূপ:

        fadeIn()
        fadeOut()
        fadeToggle()
        fadeTo()
    */
        $("#fade").click(function(){
            $("#yellowbox").fadeToggle();
            $("#tealbox").fadeToggle("slow");
            $("#bluebox").fadeToggle(3000);
        });
    
    /*
        জেকুয়েরি স্লাইডিং মেথড জেকুয়েরির মাধ্যমে আপনি চাইলে একটি এলিমেন্টের মধ্যে স্লাইডিং এফেক্ট তৈরি করতে পারবেন।

        জেকুয়েরিতে নিম্নলিখিত স্লাইড মেথডগুলো রয়েছেঃ

        slideDown()
        slideUp()
        slideToggle()
    */
    $("#flip").click(function(){
        $("#panel").slideToggle("slow");
    });


});