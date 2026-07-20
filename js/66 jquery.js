$(document).ready(function(){
    $("#button1").click(function(){
        $("p").hide("slow");
    });
    $("#button2").click(function(){
        $("#par1").hide("fast");
    });
    $("#button3").click(function(){
        $(".imparell").hide(1000);
    });

    $("#button4").click(function(){
        $("p").show();
    })
    
    // $("button").click(function(){
    //     $(this).hide();
    // });

    // $("p").dblclick(function(){
    //     $(this).hide();
    // });

    // $("#par1").mouseenter(function(){ // = que mouseover
    //     alert("L'event mouseenter s'ha activat perquè has passat pel paràgraf amb id par1")
    // });

    // $("button").focus(function(){
    //     $(this).css("background","#f24691");
    // })

    $("p").on({
        click:function(){
            $(this).css("background","red");
        },
        dblclick:function(){
            $(this).css("background","green");
        },
        mouseenter:function(){
            $(this).css("background","orange");
        },
        mouseleave:function(){
            $(this).css("background","white");
        }
    });

    $("#button5").click(function(){
        $(".blau").fadeIn("slow");
        $(".vermell").fadeIn("fast");
        $(".groc").fadeIn(1000);
        $(".verd").fadeIn(2000);
    })
    
    $("#button6").click(function(){
        $(".blau").fadeOut("slow");
        $(".vermell").fadeOut("fast");
        $(".groc").fadeOut(1000);
        $(".verd").fadeOut(2000);
    })

    $("#slideTitol").click(function(){
        $("#slideCos").slideDown("slow");
    })

    $("#button7").click(function(){
        $(".caixa").show();
        $(".caixa").css("position","absolute");
        $(".groc").animate({right:'20px',opacity:'0.5'});
        $(".verd").animate({left:'30px',height:'150px'});
        $(".vermell").animate({top:'25px',width:'150px'});
        $(".blau").animate({down:'10px'},1000);
        $(".blau").animate({right:'100px',opacity:'0.5'},1000);
        $(".blau").animate({top:'100px',opacity:'1'},1000);
        $(".blau").animate({left:'100px',opacity:'1',fontSize:'0.75em'},1000);
    })

    $("#button8").click(function(){
        $(".blau").stop();
    })

    $("#button9").click(function(){
        $("#par1").css("color","blue").slideUp(500).slideDown(800);
    })

    $("#button10").click(function(){
        alert($("#par1").text());
    })

    $("button").click(function(){
        alert($(".caixa").attr('class'));
    })
});