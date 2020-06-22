import share from 'shared/js/share'

function trackLoad() {
    window.guardian.ophan.record({
        component: 'thrasher : australian_moment : load',
        value: 1
    });
}

var count = 120000, total, goal, percent, radiusB

var interval

var min = 200

var max = 380

var range = max - min

var origin = 125710

var totalDisplay = document.getElementById('total');

var total_circle = document.getElementById('total_circle');

//title, shareURL, fbImg, twImg, hashTag, FBmessage=''

var socialista = share("Information can save lives. Help Guardian Australia reach 150,000 supporters", "https://support.theguardian.com/contribute", "https://interactive.guim.co.uk/embed/aus/2020/social/guardian_australia.png", "https://interactive.guim.co.uk/embed/aus/2020/social/guardian_australia.png", "#supporttheguardian", "Guardian Australia supporters are doing something powerful. I support the Guardian because I believe their independent journalism is vital, and should be open and free to all. Join me. With your support, we can do more.");

//var fbappID = document.querySelectorAll('meta[property="fb:app_id"]')[0].content;

const platforms = document.querySelectorAll('.interactive-share');

[...platforms].forEach(platform => {

    var network = platform.getAttribute('data-network');

    platform.addEventListener('click',() => socialista(network));

});


const init = x => {

	fetch(`https://support.theguardian.com/supporters-ticker.json?t=${new Date().getTime()}`)
		.then(response => response.json())
		.then((data) => {

			total = (data.total <= data.goal) ? data.total : data.goal

			goal = data.goal

	        setTimeout(function() {
	            animateCount();
	        }, 500);		
			
		})
}

const animateCount = x => {
    if (interval === undefined) {
        interval = setInterval(increaseCounter, 30);
    }
}

const increaseCounter = x => {

    count += Math.floor(total / 100);

    count = (count > total) ? total : count ;

	percent = pregression(origin, goal, count)

	radiusB = ( range / 100 * percent ) + min

	total_circle.setAttribute("r", radiusB);

    totalDisplay.textContent = numberWithCommas(count)

    if (count >= total) {
        clearInterval(interval);
    }

}

const numberWithCommas = x => {

	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")

}

const pregression = (min, max, current) => {

	return ( current - min ) * ( 100 / ( max - min ) )

}

let options = {
  root: null,
  rootMargin: '0px 0px 0px 0px',
  threshold: 0
}

let boom = new IntersectionObserver(function(entries, exit) {

	entries.forEach(entry => {

	    if (entry.isIntersecting) {

	      init()

	      exit.unobserve(entry.target);

	    }

	});

}, options);

const moments = document.querySelectorAll('.australian_moment');

moments.forEach(img => {

	boom.observe(img);

});




