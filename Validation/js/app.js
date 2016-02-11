"use strict;";
$(document).ready(function() {

	$.validator.addMethod(
        "regex",
        function(value, element, regexp) {
            var re = new RegExp(regexp);
            return this.optional(element) || re.test(value);
        },
        "Please enter a valid IP"
);
  var $fields = [{
    'type': 'text',
    name: "name",
    value: "",
    placeholder: "Enter your name"
  }, {
    'type': 'text',
    name: 'email',
    value: "",
    placeholder: "Enter your email"
  },
    {
      'type': 'text',
      name: 'date',
      value: "",
      placeholder: "Enter you birthday date"
    }, {
      'type': 'text',
      name: 'ip',
      value: "",
      placeholder: "You ip?"
    }, {
      'type': 'submit',
      value: "Send"
    }];

  $('body').append('<div><p>Validation form</p><form id="validate"></form></div><br/>');
  var i = 0;
  while (i < 5) {
    $('form').append('<br/><input></input><br/><br/>');

    i++;
  }
  i = 0;
  $('input').each(function() {
    $(this).attr({
      "name": $fields[i].name,
      "type": $fields[i].type,
      "value": $fields[i].value,
      "placeholder": $fields[i].placeholder
    }); i++;
  });
  $('input[type=submit]').click(function() {$('#validate').validate(
  {
  	rules:
  	{
  		name: 
  		{
  			required: true,
  			minlength: 5,
  			maclength: 30
  		},
  		email:
  		{
  			required: true,
  			email: true
  		},
  		date: 
  		{
  			date: true
  		},
  		ip: {
  			regex: /^\d+\.\d+\.\d+\.\d+$/
  		}
  	}
  });
});
  

});
