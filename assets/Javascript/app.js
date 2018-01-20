


var correctAnswers = 0;
var incorrectAnswers = 0;
var number = 20;
var intervalId;
function checker(){
    function check1() {
      var selected = $("input[name = 'q1']:checked").val();
      if (selected == "true") {
        incorrectAnswers++
        console.log(incorrectAnswers);
      } else if (selected == "false") {
        correctAnswers++
        console.log(correctAnswers);
      }
    }
    function check2() {
      var selected = $("input[name = 'q2']:checked").val();
      if (selected == "true") {
        incorrectAnswers++
        console.log(incorrectAnswers);
      } else if (selected == "false") {
        correctAnswers++
        console.log(correctAnswers);
      }
    }
    function check3() {
      var selected = $("input[name = 'q3']:checked").val();
      if (selected == "true") {
        correctAnswers++
        console.log(incorrectAnswers);
      } else if (selected == "false") {
        incorrectAnswers++
        console.log(correctAnswers);
      }
    }
    function check4() {
      var selected = $("input[name = 'q4']:checked").val();
      if (selected == "true") {
        correctAnswers++
        console.log(incorrectAnswers);
      } else if (selected == "false") {
        incorrectAnswers++
        console.log(correctAnswers);
      }
    }
    function check5() {
      var selected = $("input[name = 'q5']:checked").val();
      if (selected == "true") {
        incorrectAnswers++
        console.log(incorrectAnswers);
      } else if (selected == "false") {
        correctAnswers++
        console.log(correctAnswers);
      }
    }
    check1();
    check2();
    check3();
    check4();
    check5();
  }
  
  
  
  
  
  
  $(document).ready(function () {
    $("#GO").on("click", function () {
  
     $("#GO").text("Trivia");
      $("#GO").unbind( "click");
      $("#countdown").text("Seconds left: ");
  
  
  
  
     $("#q1").text("In Mario Kart 64, you flick the control stick twice to make the 'E's yellow. ");
      $("#a1").html("<input type = 'radio' name = 'q1' value ='true'> true </input> "
        + "<input type = 'radio' name = 'q1' value ='false'> false </input>")
  
     $("#q2").text("Al Capone was arrested by the FBI for illegal alcohol sales? ");
      $("#a2").html("<input type = 'radio' name = 'q2' value ='true'> true </input> "
        + "<input type = 'radio' name = 'q2' value ='false'> false </input>")
  
     $("#q3").text("The first set of Crayola crayons had eight colors? ");
      $("#a3").html("<input type = 'radio' name = 'q3' value ='true'> true </input> "
        + "<input type = 'radio' name = 'q3' value ='false'> false </input>")
  
     $("#q4").text("The Nintendo 64 game F-Zero-X contains Rainbow Road? ");
      $("#a4").html("<input type = 'radio' name = 'q4' value ='true'> true </input> "
        + "<input type = 'radio' name = 'q4' value ='false'> false </input>")
  
     $("#q5").text("The Beatles' song 'Come Together' was written in 1968?");
      $("#a5").html("<input type = 'radio' name = 'q5' value ='true'> true </input> "
        + "<input type = 'radio' name = 'q5' value ='false'> false </input>")
  
     function run() {
        intervalId = setInterval(decrement, 1000);
      }
  
     function decrement() {
        number--;
        $("#countdown").text("Seconds left: " + number);
  
       if (number === 0) {
          
         stop();
          checker();
          $("#trivia").remove();
          unanswered = (5 - (correctAnswers + incorrectAnswers));
          $("#correct").text("Correct answers: " + correctAnswers);
          $("#incorrect").text("incorrect answers: " + incorrectAnswers);
          $("#unanswered").text("unanswered : " + unanswered);
        }
      }
  
     function stop() {
        clearInterval(intervalId);
      }
  
     run();
    });
  });