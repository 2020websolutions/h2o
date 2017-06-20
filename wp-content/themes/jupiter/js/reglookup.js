// Dom Load
var regPlaceholder;
jQuery(function() {
	var $ = jQuery;
	
	if($('#regField').length ) {
		var vrm = getUrlParameter('vrm');
		if(vrm) {
			$('#regField').val(vrm);
			setCarDetails(vrm);
		}
	}
	if($('#bannerRegField').length) {
		regPlaceholder = $('#bannerRegField').attr('placeholder');
	}
	
	if($('#input_1_13').length) {
		$.getScript('https://getaddress.io/js/jquery.getAddress-2.0.0.min.js',function() {
			$('<div id="postcodeLookup"><div id="postcode_lookup"></div></div>').insertBefore('#field_1_7');
			$('#postcode_lookup').getAddress({
				api_key: 'un-lP4Buu028BBKprUMQNA1614', 
				output_fields:{
					line_1: '#input_1_7',
					line_2: '#input_1_12',
					line_3: '',
					post_town: '#input_1_49',
					county: '',
					postcode: '#input_1_13'
				}
			});
		});
		
	}
	
});

// Window Load
jQuery(window).ready(function(){
	var $ = jQuery;
	
	
	/*-- Service Checks Start --*/
	
	if($('#bookButton1').length) {
		$('#bookButton1').click(function(e){
			e.preventDefault();
			if($('#input_5_1').val() == '') {
			  window.location.href= $('#bookButton1').attr('href')+'?service=1';
			} else {
			  window.location.href= $('#bookButton1').attr('href')+'?service=1&location='+$('#input_5_1').val();
			}
			return false;
		});
	}
	if($('#bookButton2').length) {
		$('#bookButton2').click(function(e){
			e.preventDefault();
			if($('#input_6_1').val() == '') {
			  window.location.href= $('#bookButton2').attr('href')+'?service=2';
			} else {
			  window.location.href= $('#bookButton2').attr('href')+'?service=2&location='+$('#input_6_1').val();
			}
			return false;
		});
	}
	if($('#bookButton3').length) {
		$('#bookButton3').click(function(e){
			e.preventDefault();
			if($('#input_7_1').val() == '') {
			  window.location.href= $('#bookButton3').attr('href')+'?service=3';
			} else {
			  window.location.href= $('#bookButton3').attr('href')+'?service=3&location='+$('#input_7_1').val();
			}
			return false;
		});
	}
	if($('#bookButton4').length) {
		$('#bookButton4').click(function(e){
			e.preventDefault();
			if($('#input_8_1').val() == '') {
			  window.location.href= $('#bookButton4').attr('href')+'?service=4';
			} else {
			  window.location.href= $('#bookButton4').attr('href')+'?service=4&location='+$('#input_8_1').val();
			}
			return false;
		});
	}
	if($('#bookButton5').length) {
		$('#bookButton5').click(function(e){
			e.preventDefault();
			if($('#input_9_1').val() == '') {
			  window.location.href= $('#bookButton5').attr('href')+'?service=5';
			} else {
			  window.location.href= $('#bookButton5').attr('href')+'?service=5&location='+$('#input_9_1').val();
			}
			return false;
		});
	}
	if($('#bookButtonLife').length) {
		$('#bookButtonLife').click(function(e){
			e.preventDefault();
			if($('#input_10_1').val() == '') {
			  window.location.href= $('#bookButtonLife').attr('href')+'?service=life';
			} else {
			  window.location.href= $('#bookButtonLife').attr('href')+'?service=life&location='+$('#input_10_1').val();
			}
			return false;
		});
	}
	if($('#bookButtonSpecial').length) {
		$('#bookButtonSpecial').click(function(e){
			e.preventDefault();
			if($('#input_11_1').val() == '') {
			  window.location.href= $('#bookButtonSpecial').attr('href')+'?service=seasonal';
			} else {
			  window.location.href= $('#bookButtonSpecial').attr('href')+'?service=seasonal&location='+$('#input_11_1').val();
			}
			return false;
		});
	}
	
	/*-- Service Checks End --*/
	
	/* Populate Location / Service Start */
	
	
	if($('#gform_wrapper_1').length) {
		var location = getUrlParameter('location');
		var service = getUrlParameter('service');
		
		console.log(location);
		console.log(service);
		
		if(location) {
			$('#input_1_9').val(location);
		}
		if(service) {
			setTimeout(function(){
			switch(service) {
			  case 1:
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(2)').val());
				$(selectBox).change();
			  break;
			  case '2':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(3)').val());
				$(selectBox).change();
			  break;
			  case '3':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(4)').val());
				$(selectBox).change();
			  break;
			  case '4':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(5)').val());
				$(selectBox).change();
			  break;
			  case '5':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(6)').val());
				$(selectBox).change();
			  break;
			  case 'seasonal':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(7)').val());
				$(selectBox).change();
			  break;
			  case 'life':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(8)').val());
				$(selectBox).change();
			  break;
			}
			},1000);
		}
		
		$('#input_1_9').change(function(){
			var service = getUrlParameter('service');
			setTimeout(function(){
			switch(service) {
			  case 1:
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(2)').val());
				$(selectBox).change();
			  break;
			  case '2':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(3)').val());
				$(selectBox).change();
			  break;
			  case '3':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(4)').val());
				$(selectBox).change();
			  break;
			  case '4':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(5)').val());
				$(selectBox).change();
			  break;
			  case '5':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(6)').val());
				$(selectBox).change();
			  break;
			  case 'seasonal':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(7)').val());
				$(selectBox).change();
			  break;
			  case 'life':
			    var selectBox;
				$('.servicesDD').each(function(){
				  if(jQuery(this).is(':visible')) {
					selectBox = $(this).find('select');
				  }
				});					  
				$(selectBox).val($(selectBox).find('option:nth-child(8)').val());
				$(selectBox).change();
			  break;
			}
			},1000);
		});
		
	}
	
	
	/* Populate Location / Service End */
	
	if($('#regField').length) {
		$('#fetchReg').click(function(e){
			e.preventDefault();
			setCarDetails($('#regField').val());
			window.location.href="http://dev32.cognitiondevelopment.co.uk/book-car-wash/#registerbooking";
			return false;
		});
	}
	if($('#bannerRegField').length) {
		if($(window).width() <= 683) {
			$('#bannerRegField').attr('placeholder','Enter Car Reg');
		}
		$(window).resize(function(){
			if($('#bannerRegField').length && $(window).width() <= 683) {
				$('#bannerRegField').attr('placeholder','Enter Car Reg');
			} else {
				$('#bannerRegField').attr('placeholder',regPlaceholder);
			}
		});
	}
	
	if($('#bannerRegForm').length) {
		$('#bannerRegForm').submit(function(e){
			e.preventDefault();
			if($('body').hasClass('logged-in')) {
				window.location.href="http://dev32.cognitiondevelopment.co.uk/book-car-wash/?vrm="+$('#bannerRegField').val()+"#registerbooking";
			} else {
				window.location.href="http://dev32.cognitiondevelopment.co.uk/book-car-wash/?vrm="+$('#bannerRegField').val();
			}
			
			return false;
		});
	}
	if($('#field_1_2').length) {
		
		var timeArr = $('#input_1_43').val().split(':');
		$('#field_1_2 .ginput_container').append('<div style="margin:20px 0 0 10%;"><span style="margin-left:0;">Your car will be ready by: <span id="readyin" style="margin-left:0;font-size:1em;">'+((parseInt(timeArr[0]))+1)+':'+timeArr[1]+'</span></span><br />But there’s no need to rush back, your car is safe with us for the rest of the day.</div>');
		calcReadyTime();
		
		$('#input_1_43').change(function(){
			calcReadyTime();
		});
		
		// Service Level Dropdown
		$('#input_1_25').change(function(){
			calcReadyTime();
		}); //Bullring
		$('#input_1_14').change(function(){
			calcReadyTime();
		}); //Mailbox
		$('#input_1_15').change(function(){
			calcReadyTime();
		}); //Moor
		$('#input_1_16').change(function(){
			calcReadyTime();
		}); //Touchwood
		$('#input_1_21').change(function(){
			calcReadyTime();
		}); //Westfield
		$('#input_1_24').change(function(){
			calcReadyTime();
		}); //Intu Derby
		$('#input_1_23').change(function(){
			calcReadyTime();
		}); //Intu Merry
		$('#input_1_22').change(function(){
			calcReadyTime();
		}); //Westfield Stratford A
		$('#input_1_50').change(function(){
			calcReadyTime();
		}); //Westfield Stratford B
		
		
		// Level 1 Choices
		
		// Bullring
		$('#choice_1_53_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_53_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_53_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_53_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_53_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_53_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_53_7').change(function(){
			calcReadyTime();
		});
		
		// Mailbox
		$('#choice_1_59_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_59_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_59_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_59_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_59_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_59_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_59_7').change(function(){
			calcReadyTime();
		});
		
		// Moor
		$('#choice_1_69_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_69_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_69_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_69_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_69_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_69_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_69_7').change(function(){
			calcReadyTime();
		});
		
		// Touchwood
		$('#choice_1_64_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_64_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_64_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_64_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_64_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_64_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_64_7').change(function(){
			calcReadyTime();
		});
		
		// Westfield
		$('#choice_1_94_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_94_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_94_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_94_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_94_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_94_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_94_7').change(function(){
			calcReadyTime();
		});
		
		// Intu Derby
		$('#choice_1_79_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_79_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_79_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_79_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_79_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_79_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_79_7').change(function(){
			calcReadyTime();
		});
		
		// Intu Merry
		$('#choice_1_74_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_74_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_74_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_74_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_74_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_74_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_74_7').change(function(){
			calcReadyTime();
		});
		
		// Westfield Strat A
		$('#choice_1_84_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_84_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_84_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_84_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_84_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_84_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_84_7').change(function(){
			calcReadyTime();
		});
		
		// West Strat B
		$('#choice_1_89_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_89_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_89_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_89_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_89_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_89_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_89_7').change(function(){
			calcReadyTime();
		});
		
		
		
		// Level 2 Choices
		
		//Bullring
		
		$('#choice_1_56_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_56_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_56_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_56_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_56_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_56_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_56_7').change(function(){
			calcReadyTime();
		});
		
		
		//Mailbox
		
		$('#choice_1_60_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_60_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_60_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_60_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_60_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_60_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_60_7').change(function(){
			calcReadyTime();
		});
		
		//Moor
		
		$('#choice_1_70_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_70_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_70_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_70_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_70_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_70_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_70_7').change(function(){
			calcReadyTime();
		});
		
		//Touch
		
		$('#choice_1_65_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_65_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_65_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_65_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_65_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_65_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_65_7').change(function(){
			calcReadyTime();
		});
		
		//Westfield
		
		$('#choice_1_95_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_95_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_95_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_95_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_95_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_95_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_95_7').change(function(){
			calcReadyTime();
		});
		
		//Intu Derby
		
		$('#choice_1_80_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_80_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_80_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_80_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_80_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_80_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_80_7').change(function(){
			calcReadyTime();
		});
		
		//Intu Merry
		
		$('#choice_1_75_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_75_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_75_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_75_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_75_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_75_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_75_7').change(function(){
			calcReadyTime();
		});
		
		
		//Westfield Strat A
		
		$('#choice_1_85_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_85_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_85_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_85_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_85_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_85_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_85_7').change(function(){
			calcReadyTime();
		});
		
		
		//Westfield Strat B
		
		$('#choice_1_90_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_90_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_90_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_90_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_90_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_90_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_90_7').change(function(){
			calcReadyTime();
		});
		
		// Level 3 Choices
		
		//Bullring
		$('#choice_1_55_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_55_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_55_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_55_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_55_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_55_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_55_7').change(function(){
			calcReadyTime();
		});
		
		
		//Mailbox
		
		$('#choice_1_61_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_61_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_61_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_61_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_61_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_61_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_61_7').change(function(){
			calcReadyTime();
		});
		
		//Moor
		
		$('#choice_1_71_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_71_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_71_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_71_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_71_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_71_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_71_7').change(function(){
			calcReadyTime();
		});
		
		//Touch
		
		$('#choice_1_66_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_66_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_66_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_66_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_66_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_66_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_66_7').change(function(){
			calcReadyTime();
		});
		
		//Westfield
		
		$('#choice_1_96_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_96_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_96_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_96_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_96_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_96_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_96_7').change(function(){
			calcReadyTime();
		});
		
		//Intu Derby
		
		$('#choice_1_81_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_81_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_81_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_81_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_81_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_81_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_81_7').change(function(){
			calcReadyTime();
		});
		
		//Intu Merry
		
		$('#choice_1_76_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_76_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_76_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_76_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_76_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_76_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_76_7').change(function(){
			calcReadyTime();
		});
		
		
		//Westfield Strat A
		
		$('#choice_1_86_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_86_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_86_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_86_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_86_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_86_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_86_7').change(function(){
			calcReadyTime();
		});
		
		
		//Westfield Strat B
		
		$('#choice_1_91_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_91_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_91_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_91_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_91_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_91_6').change(function(){
			calcReadyTime();
		});
		$('#choice_1_91_7').change(function(){
			calcReadyTime();
		});
		
		
		// Level 4 Choices
		
		//BullRing
				
		$('#choice_1_57_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_57_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_57_3').change(function(){
			calcReadyTime();
		});
		
		//Mail
				
		$('#choice_1_62_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_62_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_62_3').change(function(){
			calcReadyTime();
		});
		
		//Moor
				
		$('#choice_1_67_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_67_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_67_3').change(function(){
			calcReadyTime();
		});
		
		//Touch
				
		$('#choice_1_73_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_73_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_73_3').change(function(){
			calcReadyTime();
		});
		
		//West
				
		$('#choice_1_97_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_97_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_97_3').change(function(){
			calcReadyTime();
		});
		
		//Intu D
				
		$('#choice_1_82_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_82_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_82_3').change(function(){
			calcReadyTime();
		});
		
		//Intu Merry
				
		$('#choice_1_77_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_77_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_77_3').change(function(){
			calcReadyTime();
		});
		
		//West SA
				
		$('#choice_1_87_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_87_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_87_3').change(function(){
			calcReadyTime();
		});
		
		//West SB
				
		$('#choice_1_92_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_92_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_92_3').change(function(){
			calcReadyTime();
		});
		
		
		
		
		// Life
		
		
		//BullRing
		$('#choice_1_58_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_58_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_58_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_58_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_58_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_58_6').change(function(){
			calcReadyTime();
		});
		
		//Mail
		$('#choice_1_63_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_63_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_63_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_63_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_63_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_63_6').change(function(){
			calcReadyTime();
		});
		
		//Moor
		$('#choice_1_72_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_72_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_72_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_72_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_72_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_72_6').change(function(){
			calcReadyTime();
		});
		
		//Touch
		$('#choice_1_68_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_68_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_68_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_68_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_68_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_68_6').change(function(){
			calcReadyTime();
		});
		
		//West
		$('#choice_1_98_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_98_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_98_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_98_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_98_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_98_6').change(function(){
			calcReadyTime();
		});
		
		//Intu D
		$('#choice_1_88_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_88_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_88_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_88_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_88_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_88_6').change(function(){
			calcReadyTime();
		});
		
		//Intu Merry
		$('#choice_1_78_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_78_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_78_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_78_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_78_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_78_6').change(function(){
			calcReadyTime();
		});
		
		//West SA
		$('#choice_1_83_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_83_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_83_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_83_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_83_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_83_6').change(function(){
			calcReadyTime();
		});
		
		//West SB
		$('#choice_1_93_1').change(function(){
			calcReadyTime();
		});
		$('#choice_1_93_2').change(function(){
			calcReadyTime();
		});
		$('#choice_1_93_3').change(function(){
			calcReadyTime();
		});
		$('#choice_1_93_4').change(function(){
			calcReadyTime();
		});
		$('#choice_1_93_5').change(function(){
			calcReadyTime();
		});
		$('#choice_1_93_6').change(function(){
			calcReadyTime();
		});
	}
});


function calcReadyTime() {
	var $ = jQuery;
	var timeArr = $('#input_1_43').val().split(':');

	var serviceSwitch = $('#input_1_25').val().split('|');
	switch($('#input_1_9').val()) {
	case 'Bullring, Birmingham':
		var serviceSwitch = $('#input_1_25').val().split('|');
	break;
	case 'Mailbox, Birmingham':
	var serviceSwitch = $('#input_1_14').val().split('|');
	break;
	case 'Moor st, Birmingham':
	var serviceSwitch = $('#input_1_15').val().split('|');
	break;
	case 'Touchwood, Solihull':
	var serviceSwitch = $('#input_1_16').val().split('|');
	break;
	case 'Westfield, London':
	var serviceSwitch = $('#input_1_21').val().split('|');
	break;
	case 'Intu, Derby':
	var serviceSwitch = $('#input_1_24').val().split('|');
	break;
	case 'Intu, Merry Hill':
	var serviceSwitch = $('#input_1_23').val().split('|');
	break;
	case 'Westfield, Stratford A':
	var serviceSwitch = $('#input_1_22').val().split('|');
	break;
	case 'Westfield, Stratford B':
	var serviceSwitch = $('#input_1_50').val().split('|');
	break;
	}
	switch(serviceSwitch[0]) {
		case 'SELECT YOUR SERVICE':
			var newHour = parseInt(timeArr[0])+1;
			var newMin = parseInt(timeArr[1]);
		break;
		case 'One Star':
			if($('#choice_1_53_2').is(':checked') || $('#choice_1_53_3').is(':checked') || $('#choice_1_53_4').is(':checked') || $('#choice_1_59_2').is(':checked') || $('#choice_1_59_3').is(':checked') || $('#choice_1_59_4').is(':checked') || $('#choice_1_69_2').is(':checked') || $('#choice_1_69_3').is(':checked') || $('#choice_1_69_4').is(':checked') || $('#choice_1_64_2').is(':checked') || $('#choice_1_64_3').is(':checked') || $('#choice_1_64_4').is(':checked') || $('#choice_1_94_2').is(':checked') || $('#choice_1_94_3').is(':checked') || $('#choice_1_94_4').is(':checked') || $('#choice_1_79_2').is(':checked') || $('#choice_1_79_3').is(':checked') || $('#choice_1_79_4').is(':checked') || $('#choice_1_74_2').is(':checked') || $('#choice_1_74_3').is(':checked') || $('#choice_1_74_4').is(':checked') || $('#choice_1_84_2').is(':checked') || $('#choice_1_84_3').is(':checked') || $('#choice_1_84_4').is(':checked') || $('#choice_1_89_2').is(':checked') || $('#choice_1_89_3').is(':checked') || $('#choice_1_89_4').is(':checked')) {
				var newHour = parseInt(timeArr[0])+2;
				var newMin = parseInt(timeArr[1]);
			} else if($('#choice_1_53_5').is(':checked') || $('#choice_1_53_7').is(':checked') || $('#choice_1_59_5').is(':checked') || $('#choice_1_59_7').is(':checked') || $('#choice_1_69_5').is(':checked') || $('#choice_1_69_7').is(':checked') || $('#choice_1_64_5').is(':checked') || $('#choice_1_64_7').is(':checked') || $('#choice_1_94_5').is(':checked') || $('#choice_1_94_7').is(':checked') || $('#choice_1_79_5').is(':checked') || $('#choice_1_79_7').is(':checked') || $('#choice_1_74_5').is(':checked') || $('#choice_1_74_7').is(':checked') || $('#choice_1_84_5').is(':checked') || $('#choice_1_84_7').is(':checked') || $('#choice_1_89_5').is(':checked') || $('#choice_1_89_7').is(':checked')) {
				var newHour = parseInt(timeArr[0])+1;
				var newMin = parseInt(timeArr[1])+30;
			} else if($('#choice_1_53_1').is(':checked') || $('#choice_1_59_1').is(':checked') || $('#choice_1_69_1').is(':checked') || $('#choice_1_64_1').is(':checked') || $('#choice_1_94_1').is(':checked') || $('#choice_1_79_1').is(':checked') || $('#choice_1_74_1').is(':checked') || $('#choice_1_84_1').is(':checked') || $('#choice_1_89_1').is(':checked')) {
				var newHour = parseInt(timeArr[0])+1;
				var newMin = parseInt(timeArr[1])+20;
			} else if($('#choice_1_53_6').is(':checked') || $('#choice_1_59_6').is(':checked') || $('#choice_1_69_6').is(':checked') || $('#choice_1_64_6').is(':checked') || $('#choice_1_94_6').is(':checked') || $('#choice_1_79_6').is(':checked') || $('#choice_1_74_6').is(':checked') || $('#choice_1_84_6').is(':checked') || $('#choice_1_89_6').is(':checked')) {
				var newHour = parseInt(timeArr[0])+1;
				var newMin = parseInt(timeArr[1])+15;
			} else {			
				var newHour = parseInt(timeArr[0])+1;
				var newMin = parseInt(timeArr[1]);
			}
		break;
		case 'Two Star':
			if($('#choice_1_56_3').is(':checked') || $('#choice_1_56_4').is(':checked') || $('#choice_1_60_3').is(':checked') || $('#choice_1_60_4').is(':checked') || $('#choice_1_70_3').is(':checked') || $('#choice_1_70_4').is(':checked') || $('#choice_1_65_3').is(':checked') || $('#choice_1_65_4').is(':checked') || $('#choice_1_95_3').is(':checked') || $('#choice_1_95_4').is(':checked') || $('#choice_1_80_3').is(':checked') || $('#choice_1_80_4').is(':checked') || $('#choice_1_75_3').is(':checked') || $('#choice_1_75_4').is(':checked') || $('#choice_1_85_3').is(':checked') || $('#choice_1_85_4').is(':checked') || $('#choice_1_90_3').is(':checked') || $('#choice_1_90_4').is(':checked')) {
				var newHour = parseInt(timeArr[0])+2;
				var newMin = parseInt(timeArr[1])+30;
			} else if($('#choice_1_56_5').is(':checked') || $('#choice_1_56_7').is(':checked') || $('#choice_1_60_5').is(':checked') || $('#choice_1_60_7').is(':checked') || $('#choice_1_70_5').is(':checked') || $('#choice_1_70_7').is(':checked') || $('#choice_1_65_5').is(':checked') || $('#choice_1_65_7').is(':checked') || $('#choice_1_95_5').is(':checked') || $('#choice_1_95_7').is(':checked') || $('#choice_1_80_5').is(':checked') || $('#choice_1_80_7').is(':checked') || $('#choice_1_75_5').is(':checked') || $('#choice_1_75_7').is(':checked') || $('#choice_1_85_5').is(':checked') || $('#choice_1_85_7').is(':checked') || $('#choice_1_90_5').is(':checked') || $('#choice_1_90_7').is(':checked')) {
				var newHour = parseInt(timeArr[0])+2;
				var newMin = parseInt(timeArr[1]);
			} else if($('#choice_1_56_2').is(':checked') || $('#choice_1_60_2').is(':checked') || $('#choice_1_70_2').is(':checked') || $('#choice_1_65_2').is(':checked') || $('#choice_1_95_2').is(':checked') || $('#choice_1_80_2').is(':checked') || $('#choice_1_75_2').is(':checked') || $('#choice_1_85_2').is(':checked') || $('#choice_1_90_2').is(':checked')) {
				var newHour = parseInt(timeArr[0])+1;
				var newMin = parseInt(timeArr[1])+50;
			} else if($('#choice_1_56_6').is(':checked') || $('#choice_1_60_6').is(':checked') || $('#choice_1_70_6').is(':checked') || $('#choice_1_65_6').is(':checked') || $('#choice_1_95_6').is(':checked') || $('#choice_1_80_6').is(':checked') || $('#choice_1_75_6').is(':checked') || $('#choice_1_85_6').is(':checked') || $('#choice_1_90_6').is(':checked')) {
				var newHour = parseInt(timeArr[0])+1;
				var newMin = parseInt(timeArr[1])+45;
			} else {			
				var newHour = parseInt(timeArr[0])+1;
				var newMin = parseInt(timeArr[1])+30;
			}
		break;
		case 'Three Star':
			if($('#choice_1_55_2').is(':checked') || $('#choice_1_55_3').is(':checked') || $('#choice_1_55_4').is(':checked') || $('#choice_1_61_2').is(':checked') || $('#choice_1_61_3').is(':checked') || $('#choice_1_61_4').is(':checked') || $('#choice_1_71_2').is(':checked') || $('#choice_1_71_3').is(':checked') || $('#choice_1_71_4').is(':checked') || $('#choice_1_66_2').is(':checked') || $('#choice_1_66_3').is(':checked') || $('#choice_1_66_4').is(':checked') || $('#choice_1_96_2').is(':checked') || $('#choice_1_96_3').is(':checked') || $('#choice_1_96_4').is(':checked') || $('#choice_1_81_2').is(':checked') || $('#choice_1_81_3').is(':checked') || $('#choice_1_81_4').is(':checked') || $('#choice_1_76_2').is(':checked') || $('#choice_1_76_3').is(':checked') || $('#choice_1_76_4').is(':checked') || $('#choice_1_86_2').is(':checked') || $('#choice_1_86_3').is(':checked') || $('#choice_1_86_4').is(':checked') || $('#choice_1_91_2').is(':checked') || $('#choice_1_91_3').is(':checked') || $('#choice_1_91_4').is(':checked')) {
				var newHour = parseInt(timeArr[0])+3;
				var newMin = parseInt(timeArr[1]);
			} else if($('#choice_1_55_5').is(':checked') || $('#choice_1_55_7').is(':checked') || $('#choice_1_61_5').is(':checked') || $('#choice_1_61_7').is(':checked') || $('#choice_1_71_5').is(':checked') || $('#choice_1_71_7').is(':checked') || $('#choice_1_66_5').is(':checked') || $('#choice_1_66_7').is(':checked') || $('#choice_1_96_5').is(':checked') || $('#choice_1_96_7').is(':checked') || $('#choice_1_81_5').is(':checked') || $('#choice_1_81_7').is(':checked') || $('#choice_1_76_5').is(':checked') || $('#choice_1_76_7').is(':checked') || $('#choice_1_86_5').is(':checked') || $('#choice_1_86_7').is(':checked') || $('#choice_1_91_5').is(':checked') || $('#choice_1_91_7').is(':checked')) {
				var newHour = parseInt(timeArr[0])+2;
				var newMin = parseInt(timeArr[1])+30;
			} else if($('#choice_1_55_1').is(':checked') || $('#choice_1_61_1').is(':checked') || $('#choice_1_71_1').is(':checked') || $('#choice_1_66_1').is(':checked') || $('#choice_1_96_1').is(':checked') || $('#choice_1_81_1').is(':checked') || $('#choice_1_76_1').is(':checked') || $('#choice_1_86_1').is(':checked') || $('#choice_1_91_1').is(':checked')) {
				var newHour = parseInt(timeArr[0])+2;
				var newMin = parseInt(timeArr[1])+20;
			} else if($('#choice_1_55_6').is(':checked') || $('#choice_1_61_6').is(':checked') || $('#choice_1_71_6').is(':checked') || $('#choice_1_66_6').is(':checked') || $('#choice_1_96_6').is(':checked') || $('#choice_1_81_6').is(':checked') || $('#choice_1_76_6').is(':checked') || $('#choice_1_86_6').is(':checked') || $('#choice_1_91_6').is(':checked')) {
				var newHour = parseInt(timeArr[0])+2;
				var newMin = parseInt(timeArr[1])+15;
			} else {			
				var newHour = parseInt(timeArr[0])+2;
				var newMin = parseInt(timeArr[1]);
			}
		break;
		case 'Four Star':
			if($('#choice_1_57_1').is(':checked') || $('#choice_1_57_3').is(':checked') || $('#choice_1_62_1').is(':checked') || $('#choice_1_62_3').is(':checked') || $('#choice_1_67_1').is(':checked') || $('#choice_1_67_3').is(':checked') || $('#choice_1_73_1').is(':checked') || $('#choice_1_73_3').is(':checked') || $('#choice_1_97_1').is(':checked') || $('#choice_1_97_3').is(':checked') || $('#choice_1_82_1').is(':checked') || $('#choice_1_82_3').is(':checked') || $('#choice_1_77_1').is(':checked') || $('#choice_1_77_3').is(':checked') || $('#choice_1_87_1').is(':checked') || $('#choice_1_87_3').is(':checked') || $('#choice_1_92_1').is(':checked') || $('#choice_1_92_3').is(':checked')) {
				var newHour = parseInt(timeArr[0])+4;
				var newMin = parseInt(timeArr[1]);
			} else if($('#choice_1_57_2').is(':checked') || $('#choice_1_62_2').is(':checked') || $('#choice_1_67_2').is(':checked') || $('#choice_1_73_2').is(':checked') || $('#choice_1_97_2').is(':checked') || $('#choice_1_82_2').is(':checked') || $('#choice_1_77_2').is(':checked') || $('#choice_1_87_2').is(':checked') || $('#choice_1_92_2').is(':checked')) {
				var newHour = parseInt(timeArr[0])+3;
				var newMin = parseInt(timeArr[1])+45;
			} else {			
				var newHour = parseInt(timeArr[0])+3;
				var newMin = parseInt(timeArr[1])+30;
			}
		break;
		case 'Five Star':
			var newHour = parseInt(timeArr[0])+8;
			var newMin = parseInt(timeArr[1]);
		break;
		case 'Seasonal Special':
			var newHour = parseInt(timeArr[0])+1;
			var newMin = parseInt(timeArr[1])+30;
		break;
		case 'Life Shine':
			if($('#choice_1_58_1').is(':checked') || $('#choice_1_58_2').is(':checked') || $('#choice_1_58_3').is(':checked') || $('#choice_1_63_1').is(':checked') || $('#choice_1_63_2').is(':checked') || $('#choice_1_63_3').is(':checked') || $('#choice_1_72_1').is(':checked') || $('#choice_1_72_2').is(':checked') || $('#choice_1_72_3').is(':checked') || $('#choice_1_68_1').is(':checked') || $('#choice_1_68_2').is(':checked') || $('#choice_1_68_3').is(':checked') || $('#choice_1_98_1').is(':checked') || $('#choice_1_98_2').is(':checked') || $('#choice_1_98_3').is(':checked') || $('#choice_1_88_1').is(':checked') || $('#choice_1_88_2').is(':checked') || $('#choice_1_88_3').is(':checked') || $('#choice_1_78_1').is(':checked') || $('#choice_1_78_2').is(':checked') || $('#choice_1_78_3').is(':checked') || $('#choice_1_83_1').is(':checked') || $('#choice_1_83_2').is(':checked') || $('#choice_1_83_3').is(':checked') || $('#choice_1_93_1').is(':checked') || $('#choice_1_93_2').is(':checked') || $('#choice_1_93_3').is(':checked')) {
				var newHour = parseInt(timeArr[0])+4;
				var newMin = parseInt(timeArr[1])+30;
			} else if($('#choice_1_58_4').is(':checked') || $('#choice_1_58_6').is(':checked') || $('#choice_1_63_4').is(':checked') || $('#choice_1_63_6').is(':checked') || $('#choice_1_72_4').is(':checked') || $('#choice_1_72_6').is(':checked') || $('#choice_1_68_4').is(':checked') || $('#choice_1_68_6').is(':checked') || $('#choice_1_98_4').is(':checked') || $('#choice_1_98_6').is(':checked') || $('#choice_1_88_4').is(':checked') || $('#choice_1_88_6').is(':checked') || $('#choice_1_78_4').is(':checked') || $('#choice_1_78_6').is(':checked') || $('#choice_1_83_4').is(':checked') || $('#choice_1_83_6').is(':checked') || $('#choice_1_93_4').is(':checked') || $('#choice_1_93_6').is(':checked')) {
				var newHour = parseInt(timeArr[0])+4;
				var newMin = parseInt(timeArr[1]);
			} else if($('#choice_1_58_5').is(':checked') || $('#choice_1_63_5').is(':checked') || $('#choice_1_72_5').is(':checked') || $('#choice_1_68_5').is(':checked') || $('#choice_1_98_5').is(':checked') || $('#choice_1_88_5').is(':checked') || $('#choice_1_78_5').is(':checked') || $('#choice_1_83_5').is(':checked') || $('#choice_1_93_5').is(':checked')) {
				var newHour = parseInt(timeArr[0])+3;
				var newMin = parseInt(timeArr[1])+45;
			} else {			
				var newHour = parseInt(timeArr[0])+3;
				var newMin = parseInt(timeArr[1])+30;
			}
		break;
	}
	
	if(newMin >= 60) {
		newHour = newHour +1;
		newMin = newMin -60;
	}
	
	if(newMin == 0) {newMin = '00';}
	$('#readyin').html(newHour+':'+newMin);
}

function setCarDetails(reg) {
	var $ = jQuery;
	$.getJSON( "/carreg.php?vrm="+reg.replace(" ", ""), function( data ) {
		console.log(data);
		if(data.error) {
			alert('Error: '+data.description[0]+' for registration: '+data.reg);
		}
		$('#input_1_10').val(data.reg[0]);
		/*$('#input_1_10').attr('readonly','readonly');*/
		$('#input_1_39').val(data.make[0]);
		/*$('#input_1_39').attr('readonly','readonly');*/
		$('#input_1_38').val(data.model[0]);
		/*$('#input_1_38').attr('readonly','readonly');*/
		$('#input_1_37').val(data.colour[0]);
		/*$('#input_1_37').attr('readonly','readonly');*/
	});	
}


var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};