
$(document).ready(function(){

    var x;
    x=$(".push");
    $(".text").hide();
    x.hover(go,back);

    var y;
    y=$(".push2");
    $(".text2").hide();
    y.hover(go1,back1);


    var z;
    z=$(".push3");
    $(".text3").hide();
    z.hover(go2,back2);

    var j;
    j=$(".push4");
    $(".text4").hide();
    j.hover(go3,back3);

 

});

function go()
{
$(".text").show(100);
}
function back()
{
$(".text").hide(100);
}


function go1()
{
$(".text2").show(100);
}
function back1()
{
$(".text2").hide(100);
}

   
function go2()
{
$(".text3").show(100);
}
function back2()
{
$(".text3").hide(100);
}

   
function go3()
{
$(".text4").show(100);
}
function back3()
{
$(".text4").hide(100);
}

   

