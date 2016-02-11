(function($) {
  $.fn.timer = function(options) {
    var time = {
      'date': null
    };
    if (options) {
      $.extend(time, options);
    }
    interval = setInterval(countDownTime, 1000);
    function countDownTime() {
      newYearDate = Date.parse(time.date) / 1000;
      currentDate = Math.floor($.now() / 1000);
      if (newYearDate <= currentDate) {
        clearInterval(interval);
      }
      seconds = newYearDate - currentDate;
      days = Math.floor(seconds / (60 * 60 * 24));
      seconds -= days * 60 * 60 * 24;
      hours = Math.floor(seconds / (60 * 60));
      seconds -= hours * 60 * 60;
      minutes = Math.floor(seconds / 60);
      seconds -= minutes * 60;
      days = (String(days).length !== 2) ? '0' + days : days;
      days = days.substring(1);
      hours = (String(hours).length !== 2) ? '0' + hours : hours;
      minutes = (String(minutes).length !== 2) ? '0' + minutes : minutes;
      seconds = (String(seconds).length !== 2) ? '0' + seconds : seconds;
      if (!isNaN(newYearDate)) {
        $('.day').text(days);
        $('.hour').text(hours);
        $('.min').text(minutes);
        $('.sec').text(seconds);
       }
    }
    countDownTime();
  };
})(jQuery);