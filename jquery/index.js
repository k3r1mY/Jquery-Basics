
var heading = $("h1");
var button1 = $("#btn1");
var button2 = $("#btn2");
var button3 = $("#btn3");


heading.addClass("big-title");

button1.on("click", function(){
    alert("Pressed Button 1");

    heading.addClass("color-changeR");
    heading.text("This is Jquery");
    button1.text("Pressed"); 

});

button2.on("click", function(){
    alert("Pressed Button 2");

    heading.addClass("color-changeE");
    heading.text("Basic Test Project");
    button2.text("Pressed"); 

});

button3.on("click", function(){
    alert("Pressed Button 3");

    heading.addClass("color-changeD");
    heading.text("Goodbye. Refresh to restart.");
    button3.text("Pressed"); 

});




