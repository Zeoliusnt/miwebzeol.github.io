$(function(){

    $("#masdetalle").hide();
    $("#verdetalle").mouseenter(function(){
        $("#masdetalle").slideDown();
    });
    $("#verdetalle").mouseleave(function(){
        $("#masdetalle").slideUp();
    });

});