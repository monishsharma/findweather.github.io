let icon;
let url1;
let forcast1;
let forcast2;
let forcast3;
let forcast4;
let tempe;

$(document).ready(function(){

	$('#search').click(function(){

		$('.card').fadeIn(1000);

		var cityName = $('#cityName').val();

		if(cityName != ''){

				$('.card').show(1000);

			$.ajax({

				url: "http://api.openweathermap.org/data/2.5/forecast?q="+ cityName +"&units=metric"+ "&APPID=016ce313a0ea8a5b5e1e84d09cc1b73b",
				type : "get",
				dataType :"jsonp",
				success:function(data){
					console.log(data);
					var widget = show(data);
				}

			});
		}
		else{
				$('.card').css({display :"none"});
				alert('field cannot be empty');
		}
	});

}) ;

function show(data){

	$('.city').html(data.city.name + "," +  data.city.country);
	
	tempe = Math.round(data.list[0].main.temp); 
	$('.temp').html(tempe + "&#176" + "c");

	
	url1 = "http://openweathermap.org/img/w/" + data.list[0].weather[0].icon + ".png";
	document.getElementById('sun').setAttribute('src',url1);
	
	$('#main').html(data.list[0].weather[0].description);

	forcast1 =  "http://openweathermap.org/img/w/" + data.list[8].weather[0].icon + ".png";
	$('.TUE').css('content', 'url(' + forcast1 + ')');

	forcast2 =  "http://openweathermap.org/img/w/" + data.list[16].weather[0].icon + ".png";
	$('.WED').css('content', 'url(' + forcast2 + ')');

	forcast3 =  "http://openweathermap.org/img/w/" + data.list[24].weather[0].icon + ".png";
	$('.THU').css('content', 'url(' + forcast3 + ')');

	forcast4 =  "http://openweathermap.org/img/w/" + data.list[32].weather[0].icon + ".png";
	$('.FRI').css('content', 'url(' + forcast4 + ')');

	let highTemp1;
	highTemp1 = Math.round(data.list[8].main.temp_max);
	$('.highTemp1').html(highTemp1 + "&#176" + "c");
	let lowTemp1;
	lowTemp1 = Math.round(data.list[8].main.temp_min);
	$('.lowTemp1').html(lowTemp1+ "&#176" + "c");


	let highTemp2;
	highTemp2 = Math.round(data.list[16].main.temp_max);
	$('.highTemp2').html(highTemp2+ "&#176" + "c");
	let lowTemp2;
	lowTemp2 = Math.round(data.list[16].main.temp_min);
	$('.lowTemp2').html(lowTemp2 + "&#176" + "c");

	let highTemp3;
	highTemp3 = Math.round(data.list[24].main.temp_max);
	$('.highTemp3').html(highTemp3+ "&#176" + "c");
	let lowTemp3;
	lowTemp3 = Math.round(data.list[24].main.temp_min);
	$('.lowTemp3').html(lowTemp3+ "&#176" + "c");

	let highTemp4;
	highTemp4 = Math.round(data.list[32].main.temp_max);
	$('.highTemp4').html(highTemp4+ "&#176" + "c");
	let lowTemp4;
	lowTemp4 = Math.round(data.list[32].main.temp_max);
	$('.lowTemp4').html(lowTemp4+ "&#176" + "c");
}

// images slideshow





















