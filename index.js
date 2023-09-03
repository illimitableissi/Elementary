$(".data").hide();
$(".accountability").hide();
$(".summary").hide();
let data = ''

// $("#teacher").val();
// $("#grade").val();
// $("#date").val();
// $("#observer").val();
// $("#question1").val();
// $("#question2").val();
// $("#question3").val();
// $("#question4").val();
// $("#question5").val();
// $("#question6").val();
// $("#question7").val();
// $("#question8").val();
// $("#question9").val();
// $("#question10").val();
// $("#question11").val();
// $("#teacher-gaps").val();
// $("#student-concerns").val();

$("#start-button").on("click", function(event) {
    event.preventDefault();
    $(".start").hide();
    $(".data").show();
});

$("#next-button").on("click", function(event) {
    event.preventDefault();
    $(".data").hide();
    $(".accountability").show();
});


$("#back-button").on("click", function(event) {
    event.preventDefault();
    $(".data").hide();
    $(".start").show();
});


$("#data-button").on("click", function(event) {
    event.preventDefault();
    $(".accountability").hide();
    $(".data").show();
});

// Click function on submit button click
  $("#submit-button").on("click", function(event) {
    event.preventDefault();

    $(".main-title").hide();

    $(".accountability").hide();
    $(".summary").show();

    $(".eval-info").append(`
        <p>Teacher: ${$("#teacher").val()}<p>
        <p>Grade Level: ${$("#grade").val()}<p>
        <p>Date: ${$("#date").val()}<p>
        <p>Observer: ${$("#observer").val()}<p>
        <p>Content Observed: ${$("#content").val()}<p>
        <p>Portion of the Lesson: ${$("#portion").val()}<p>
    `)

    $("#q1ans").text($("input[name='question1']:checked").val());
    $("#q2ans").text($("input[name='question2']:checked").val());
    $("#q3ans").text($("input[name='question3']:checked").val());
    $("#q4ans").text($("input[name='question4']:checked").val());
    $("#q5ans").text($("input[name='question5']:checked").val());
    $("#q6ans").text($("input[name='question6']:checked").val());
    $("#q7ans").text($("input[name='question7']:checked").val());
    $("#q8ans").text($("input[name='question8']:checked").val());
    $("#q9ans").text($("input[name='question9']:checked").val());
    $("#q10ans").text($("input[name='question10']:checked").val());
    $("#q11ans").text($("input[name='question11']:checked").val());
    $("#tgaps").text($("#teacher-gaps").val());
    $("#sconcerns").text($("#student-concerns").val());

  });
