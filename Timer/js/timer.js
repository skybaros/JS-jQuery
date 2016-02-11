(function ($) {
	$.fn.timer = function (options, callback) {
		var time  = {'date': null}; 
		if (options) {
			$.extend(time, options);
		}
		interval = setInterval(countDownTime, 1000);
		function countDownTime () {
			eventDate = Date.parse(time.date)/1000;
			currentDate = Math.floor($.now()/1000);

			if (eventDate<= currentDate) {
				callback.call(this);
				clearInterval(interval);
			}

			seconds = eventDate - currentDate;

			days = Math.floor(seconds / (3600*24));
			seconds -= days * 60 *60 * 24;

			hours = Math.floor(seconds / (60*60));
			seconds -= hours * 60 * 60;	

			minutes = Math.floor(seconds/60);
			seconds -= minutes*60;

			days = (String(days).length!== 2) ?  '0' + days: days;
			hours = (String(hours).length!== 2) ? '0' + hours: hours;
			minutes = (String(minutes).length!== 2) ? '0' + minutes: minutes;
			seconds = (String(seconds).length!==2) ? '0' + seconds: seconds;
			if (!isNaN(eventDate)) {
				$('.day').text(days);
				$('.hour').text(hours);
				$('.min').text(minutes);
				$('.sec').text(seconds);
			}
		}

		countDownTime();
		
	};
}) (jQuery);