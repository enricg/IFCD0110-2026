$(document).ready(function () {
  $("#button1").click(function () {
    $("p").hide("slow");
  });
  $("#button2").click(function () {
    $("#par1").hide("fast");
  });
  $("#button3").click(function () {
    $(".imparell").hide(1000);
  });

  $("#button4").click(function () {
    $("p").show();
  });

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
    click: function () {
      $(this).css("background", "red");
    },
    dblclick: function () {
      $(this).css("background", "green");
    },
    mouseenter: function () {
      $(this).css("background", "orange");
    },
    mouseleave: function () {
      $(this).css("background", "white");
    },
  });

  $("#button5").click(function () {
    $(".blau").fadeIn("slow");
    $(".vermell").fadeIn("fast");
    $(".groc").fadeIn(1000);
    $(".verd").fadeIn(2000);
  });

  $("#button6").click(function () {
    $(".blau").fadeOut("slow");
    $(".vermell").fadeOut("fast");
    $(".groc").fadeOut(1000);
    $(".verd").fadeOut(2000);
  });

  $("#slideTitol").click(function () {
    $("#slideCos").slideDown("slow");
  });

  $("#button7").click(function () {
    $(".caixa").show();
    $(".caixa").css("position", "absolute");
    $(".groc").animate({ right: "20px", opacity: "0.5" });
    $(".verd").animate({ left: "30px", height: "150px" });
    $(".vermell").animate({ top: "25px", width: "150px" });
    $(".blau").animate({ down: "10px" }, 1000);
    $(".blau").animate({ right: "100px", opacity: "0.5" }, 1000);
    $(".blau").animate({ top: "100px", opacity: "1" }, 1000);
    $(".blau").animate(
      { left: "100px", opacity: "1", fontSize: "0.75em" },
      1000,
    );
  });

  $("#button8").click(function () {
    $(".blau").stop();
  });

  $("#button9").click(function () {
    $("#par1").css("color", "blue").slideUp(500).slideDown(800);
  });

  $("#button10").click(function () {
    alert($("#par1").text());
  });

  // $("button").click(function(){
  //     alert($(".caixa").attr('class'));
  // })

  $("#button12").click(function () {
    $("#idText").text("Aquest és un text afegit amb el mètode text");
    $("#idHTML").html(
      "<br><p style='color:blue'>Aquest és un text amb html afegit</p><br>",
    );
    $("#inputVal").val("contingut afegit a l'input");
  });

  $("#button13").click(function () {
    // $("a").attr("href","https://www.mundodeportivo.com/").attr("target","_blank").css("background","pink");
    let pagina = prompt("Digue'm el nom de la pàgina");
    let adreça = {
      href: "https://www.mundodeportivo.com/",
      target: "_blank",
      title: "El món esportiu",
    };
    $("a")
      .attr(adreça)
      // {
      //     "href":"https://www.mundodeportivo.com/",
      //     "target":"_blank",
      //     "title":"El món esportiu"
      // })
      .css("background", "pink")
      // .text("Aquesta és el nom de la pàgina del mundoportivo");
      .text(pagina);
  });

  $("#button14").click(function () {
    let element = prompt("digue'm l'element on vols afegir contingut");
    $(element).append("--Text al final");
    $(element).prepend("Text a l'inici--");
    // $("#refContinguts").append("--Text al final");
    // $("#refContinguts").prepend("Text a l'inici--");
  });

  $("#button15").click(function () {
    // manera amb jquery
    $("#refElements").append("<p>Això és un nou paràgraf</p>");
    // manera amb javascript
    const llocOnPosarElement = document.getElementById("refElements");
    const element = document.createElement("p");
    element.innerText = "Nou paràgraf amb JavaScript";
    llocOnPosarElement.appendChild(element);
  });

  $("#button16").click(function () {
    let element1 = "<p>Aquest és el primer element</p>";
    let element2 = "<div>Aquest és el segon element</div>";
    let element3 = "<p>Aquest és el tercer element</p>";
    let llista = [];
    llista.push(element1);
    llista.push(element2);
    llista.push(element3);
    // $("#refElements").append(element1, element2, element3);
    $("#refElements").append(llista);
    $("#refElements").after(llista);
  });

  $("#button17").click(function () {
    // afegits com a fills d'etiqueta referència
    $("#refMenu").append(
      "<li>Arros</li>",
      "<li>Vedella estofada</li>",
      "<li>Suc de taronja</li>",
    );
    // afegits com a germans d'etiqueta referència
    $("#refMenu").before(
      "<li>Burger</li>",
      "<li>Fries Chips</li>",
      "<li>Gelat Oreo</li>",
    );
  });

  $("#button18").click(function () {
    $(".caixa").remove(".verd");
  });

  $("#button19").click(function () {
    $(".caixa").empty();
  });

  $("#button20").click(function () {
    $("h3").toggleClass("vermell");
  });

  $("#button21").click(function () {
    $(".vermell").css("font-size", "0.5em");
    $(".vermell").html(
      "Alçada: " +
        $(".caixa").innerHeight() +
        "<br>Amplada: " +
        $(".caixa").innerWidth(),
    );
  });

  $("#button22").click(function () {
    $(".verd").innerWidth(200).innerHeight(150);
    // let llistaVerds=document.getElementsByClassName("verd");
    // for(element of llistaVerds){
    //     element.style.height="300px";
    //     element.style.width="300px";
    // }
  });

  $("#button23").click(function () {
    $("main").empty();
    $("main").append("<div id='ancestre' class='arbre'>ancestre</div>");
    $("#ancestre").append("<ul id='pare' class='arbre'>pare</ul");
    $("#pare").append("<li id='fill1' class='arbre'>fill1</li>", "<li id='fill2' class='arbre'>fill2</li>");
    $("#fill1").append(
      "<span id='net11' class='arbre'>net11</span>",
      "<span id='net12' class='arbre'>net12</span>",
    );
    $("#fill2").append("<b id='net21' class='arbre'>net21</b>");
  });

  $("#button24").click(function(){
    let pare=prompt("de quina etiqueta vols veure el pare");
    $(pare).parent().css("border","5px solid #ff0000")
  })
  $("#button25").click(function(){
    let pare=prompt("de quina etiqueta vols veure els ancestres");
    $(pare).parents().css("border","5px solid #ff0000")
  })

  $("#button26").click(function(){
    let pare=prompt("de quina etiqueta vols veure els ancestres");
    let nivell=prompt("fins a quin nivell");
    $(pare).parentsUntil(nivell).css("border","5px solid #ff0000")
  })
  $("#button27").click(function(){
    let fillsDirectes=prompt("de quina etiqueta vols veure els fills");
    $(fillsDirectes).children("span:first").css("border","5px solid #ff0000")
  })
});
