//console.log('sourced');
var calculationIn = '';

$(document).ready(function(){
  //console.log('doc ready');

//get calculator button input
  $('button').on('click', function () {
    if ($(this).attr('data') === "="){
      returnResults();
    }else if ($(this).attr('data') === 'CE') {
      calculationIn = '';
      $('.outputScreen').html(calculationIn);
    }else{
    //console.log('in button click');
    var nextInput = $(this).attr('data');

    //put in calculationIn array
    calculationIn += nextInput;
    console.log(calculationIn);
    //display current calculation
    $('.outputScreen').html(calculationIn);
    }
  });

  var returnResults = function () {
    console.log('in returnResults');
    var calculationToSend = {takeThis: calculationIn};
    console.log(calculationToSend);
    $.ajax({
      type: 'POST',
      url: '/calculate',
      data: calculationToSend,
      success: function (data) {
        console.log(data);
        var finalResults = data.takeThis;
        console.log(finalResults);
        $('.outputScreen').html(finalResults);
      },
      error: function (data) {
        console.log('meow');
        $('.outputScreen').html('Cannot compute!!');

      }
    });
  };



});
