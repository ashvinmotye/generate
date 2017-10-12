var button = document.querySelector("button");

button.addEventListener('click', function() {
	var x = [];
	var myoutput = document.querySelector("#output");
	var error = document.querySelector("#error");
	myoutput.innerHTML = "";

	var fav = Number(document.querySelector("input[name='fav']").value);

	if(isNaN(fav)) {
		error.innerHTML = "Please input a number.";
	}

	else {
		error.innerHTML = "";

		if(fav>40 || fav == 0) {
			x.push(generate(fav));
		} else if(fav < 0) {
			x.push(generate(fav));
		}
		else {
			x.push(fav);
		}

		for(var i=0; i<5; i++) {
	    	do {
	    	    var num = generate(x[i]);
	    	} while(x.indexOf(num) != -1 || num == 0 || x.indexOf(num) != -1);
	    	x.push(num);
		}

		x.sort(compare);

		for(var i=0; i<x.length; i++) {
			var mystring = x[i]+" ";
			var color = addColor(x[i]);
			myoutput.innerHTML += '<div class="col-xs-4" style="border-color: '+color+'"><div class="output">'+mystring+'</div></div>';
		}
	}
});


function compare(a, b) {
    return a - b;
}

function generate(number) {
	var a = Math.round(Math.random()*1073676287);
	var b = Math.round(Math.random()*1073676287);
	var genNum = ((number*a + b)%40)+1;
	return genNum;
}

function addColor(a) {
	if(a <= 10) {
        return "#F44336";
    }

    else if(a >= 11 && a <= 20 ) {
        return "#2196F3";
    }

    else if(a >= 21 && a <= 30) {
        return "#FFEB3B";
    }

    else if(a >= 30) {
        return"#4CAF50";
    }
}