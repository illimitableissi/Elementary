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
    $("body").css("all", "unset");

    // $(".eval-info").append(`
    //     <p>Teacher: ${$("#teacher").val()}<p>
    //     <p>Grade Level: ${$("#grade").val()}<p>
    //     <p>Date: ${$("#date").val()}<p>
    //     <p>Observer: ${$("#observer").val()}<p>
    //     <p>Content Observed: ${$("#content").val()}<p>
    //     <p>Portion of the Lesson: ${$("#portion").val()}<p>
    // `)

   
    $("#teacher-ans").text($("#teacher").val());
    $("#grade-ans").text($("#grade").val());
    $("#date-ans").text($("#date").val());
    $("#observer-ans").text( $("#observer").val());
    $("#content-ans").text( $("#content").val());
    $("#portion-ans").text($("#portion").val());
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
    $("#tglows").text($("#teacher-glows").val());
    $("#sconcerns").text($("#student-concerns").val());
    $("#q1comment").text($("#question1comment").val());
    $("#q2comment").text($("#question2comment").val());
    $("#q3comment").text($("#question3comment").val());
    $("#q4comment").text($("#question4comment").val());
    $("#q5comment").text($("#question5comment").val());
    $("#q6comment").text($("#question6comment").val());
    $("#q7comment").text($("#question7comment").val());
    $("#q8comment").text($("#question8comment").val());
    $("#q9comment").text($("#question9comment").val());
    $("#q10comment").text($("#question10comment").val());
    $("#q11comment").text($("#question11comment").val());
  });

  $("#save-button").on("click", function(event) {
    event.preventDefault();

    var element = document.getElementById('summary');

    // var opt = {
    //     margin:       0,
    //     filename:     'summary.pdf',
    //     image:        { type: 'jpeg', quality: 0.98 },
    //     html2canvas:  { scale: 1 },
    //     jsPDF:        { unit: 'in', format: 'letter', orientation: 'landscape' }
    //   };
      
    //   // New Promise-based usage:
    //   html2pdf().set(opt).from(element).save();
      
    html2pdf(element);
});
