$(".data").hide();
$(".accountability").hide();
$(".summary").hide();

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

    $("#q1ans").text($("#question1").val());
    $("#q2ans").text($("#question2").val());
    $("#q3ans").text($("#question3").val());
    $("#q4ans").text($("#question4").val());
    $("#q5ans").text($("#question5").val());
    $("#q6ans").text($("#question6").val());
    $("#q7ans").text($("#question7").val());
    $("#q8ans").text($("#question8").val());
    $("#q9ans").text($("#question9").val());
    $("#q10ans").text($("#question10").val());
    $("#q11ans").text($("#question11").val());
    $("#tgaps").text($("#teacher-gaps").val());
    $("#sconcerns").text($("#student-concerns").val());

  });
