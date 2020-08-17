/* é uma instrução jquery pra esperar o documento html carregar por completo, abaixo o comando. */
$(document).ready(function () {
  // Progress bar
  let containerA = document.getElementById("circleA"); // pega o elemento criado e insere no container
  let circleA = new ProgressBar.Circle(containerA, {
    // progress bar.circle e a biblioteca que cria o circolo no js
    //estilizar o circle com js
    color: "#64DAF9",
    strokeWidth: 8, //largura da borda
    duration: 1400,
    //from, cor que vai iniciar   e to cor que vai finalizar a animação.
    from: { color: "#AAA" },
    to: { color: "#64DAF9" },
    //step e a bobliotecla o que faz a animação.
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 60);

      circle.setText(value);

      /* var value = Math.round(circle.value() * 60);
      circle.setText(value);*/
    },
  });

  let containerB = document.getElementById("circleB");

  let circleB = new ProgressBar.Circle(containerB, {
    color: "#64DAF9",

    strokeWidth: 8,
    duration: 1600,
    from: { color: "#AAA" },
    to: { color: "#64DAF9" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 100);

      circle.setText(value);
    },
  });

  let containerC = document.getElementById("circleC");

  let circleC = new ProgressBar.Circle(containerC, {
    color: "#64DAF9",

    strokeWidth: 8,
    duration: 2000,
    from: { color: "#AAA" },
    to: { color: "#64DAF9" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 90);

      circle.setText(value);
    },
  });

  let containerD = document.getElementById("circleD");

  let circleD = new ProgressBar.Circle(containerD, {
    color: "#64DAF9",

    strokeWidth: 8,
    duration: 2400,
    from: { color: "#AAA" },
    to: { color: "#64DAF9" },
    step: function (state, circle) {
      circle.path.setAttribute("stroke", state.color);

      var value = Math.round(circle.value() * 300);

      circle.setText(value);
    },
  });
  // iniciando o loader quando o usuário chega no elemento

  let dataAreaOffset = $("#data-area").offset();
  let stop = 0; // para o loader rodar do uma vez
  $(window).scroll(function (e) {
    let scroll = $(window).scrollTop();
    if (scroll > dataAreaOffset.top - 500 && stop == 0) {
      // dispara a animação
      circleA.animate(1.0);
      circleB.animate(1.0);
      circleC.animate(1.0);
      circleD.animate(1.0);
      Stop = 1;
    }
  });

  // Paralax

  setTimeout(function () {
    $("#data-area").parallax({ imageSrc: "img/cidadeparallax.png" });
    $("#apply-area").parallax({ imageSrc: "img/pattern.png" });
  }, 250); // esse tempo e para dar tempo de carregar e nao travar

  //Filtro do Portifolio
  $(".filter-btn").on("click", function () {
    let type = $(this).attr("id"); // indentifica o botao clicla
    let boxes = $(".project-box"); // todas as caixas que tem no projeto
    $(".main-btn").removeClass("active"); // remove o active de todas as classes
    $(this).addClass("active");
    if (type == "dsg-btn") {
      eachBoxes("dsg", boxes);
    } else if (type == "dev-btn") {
      eachBoxes("dev", boxes);
    } else if (type == "seo-btn") {
      eachBoxes("seo", boxes);
    } else {
      type == "all-btn";
      eachBoxes("all", boxes);
    }
  });

  function eachBoxes(type, boxes) {
    if (type == "all") {
      $(boxes).fadeIn();
    } else {
      $(boxes).each(function () {
        if (!$(this).hasClass(type)) {
          // se o botao que foi clicado nao representa a classe dessa box
          $(this).fadeOut("Slow"); // esconde
        } else {
          $(this).fadeIn();
        }
      });
    }
  }
});
