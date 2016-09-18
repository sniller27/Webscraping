var page = require('webpage').create(),
        system = require('system'),
        t, resultfile, address;
    var currentUrl = "",
         userName = '',  
         passWord = '';
    page.viewportSize = {width: 1280, height: 1024};

//web scraping URL
page.open('http://www.kerteminde-tennisklub.dk/Activity/BookingView/Activity2520714441261358577', function (status) {

	//screenshots
	page.render('screenshot.png');

	//status check
	if (status !== "success") {
		console.log("fail");
	}else {
		var freeslots = page.evaluate(function() {
			
			console.log("success");

			// counting browser elements
			slotsQty = 0;
			for(i=0;i<document.getElementsByClassName('slot').length;i++){
			if(document.getElementsByClassName('slot')[i].getAttribute('data-bookings').indexOf('Bane') > 0){
				++slotsQty;
			}

			}

			return slotsQty;
		});

		//Nr of free slots
		console.log("Number of free slots: " + freeslots);
	}
	phantom.exit();

});