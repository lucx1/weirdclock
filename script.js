var esist = ["00", "10", "30", "40", "50"];
var fuenfmin = ["70", "80", "90", "a0"];
var zehnmin = ["01", "11", "21", "31"];
var zwanzigmin = ["41", "51", "61", "71", "81", "91", "a1"];
var viertel = ["42", "52", "62", "72", "82", "92", "a2"];
var vor = ["03", "13", "23"];
var nach = ["73", "83", "93", "a3"];
var halb = ["04", "14", "24", "34"];
var elf = ["54", "64", "74"];
var fuenf = ["74", "84", "94", "a4"];
var eins = ["05", "15", "25", "35"];
var zwei = ["75", "85", "95", "a5"];
var drei = ["06", "16", "26", "36"];
var vier = ["76", "86", "96", "a6"];
var sechs = ["07", "17", "27", "37", "47"];
var acht = ["77", "87", "97", "a7"];
var sieben = ["08", "18", "28", "38", "48", "58"];
var zwoelf = ["68", "78", "88", "98", "a8"];
var zehn = ["09", "19", "29", "39"];
var neun = ["39", "49", "59", "69"];
var uhr = ["89", "99", "a9"];
var memorisefiveminutes = [];
window.setInterval(mainfunction, 1);
function mainfunction() {
	var d = new Date();
	if (d.getHours() == 0) {
		var currentHour = 12;
	} else if (d.getHours() >= 13) {
		var currentHour = d.getHours() - 12;
	}
	if ((d.getMinutes() >= 0 && d.getMinutes() <= 4) || (d.getMinutes() >= 30 && d.getMinutes() <= 34)) {
		lightup(esist);
	} else {
		turnoff(esist);
	}
	if (d.getMinutes() >= 0 && d.getMinutes() <= 4) {
		lightup(uhr);
	} else {
		turnoff(uhr);
	}
	if (d.getMinutes() >= 25 && d.getMinutes() <= 44) {
		lightup(halb);
	} else {
		turnoff(halb);
	}
	if ((d.getMinutes() >= 5 && d.getMinutes() <= 9) || (d.getMinutes() >= 25 && d.getMinutes() <= 29) || (d.getMinutes() >= 35 && d.getMinutes() <= 39) || (d.getMinutes() >= 55 && d.getMinutes() <= 59)) {
		lightup(fuenfmin);
	} else {
		turnoff(fuenfmin);
	}
	if ((d.getMinutes() >= 10 && d.getMinutes() <= 14) || (d.getMinutes() >= 40 && d.getMinutes() <= 44) || (d.getMinutes() >= 50 && d.getMinutes() <= 54)) {
		lightup(zehnmin);
	} else {
		turnoff(zehnmin);
	}
	if (d.getMinutes() >= 20 && d.getMinutes() <= 24) {
		lightup(zwanzigmin);
	} else {
		turnoff(zwanzigmin);
	}
	if ((d.getMinutes() >= 15 && d.getMinutes() <= 19) || (d.getMinutes() >= 45 && d.getMinutes() <= 49)) {
		lightup(viertel);
	} else {
		turnoff(viertel);
	}
	if ((d.getMinutes() >= 25 && d.getMinutes() <= 29) || (d.getMinutes() >= 35 && d.getMinutes() <= 59)) {
		lightup(vor);
	} else {
		turnoff(vor);
	}
	if ((d.getMinutes() >= 5 && d.getMinutes() <= 14) || (d.getMinutes() >= 20 && d.getMinutes() <= 24)) {
		lightup(nach);
	} else {
		turnoff(nach);
	}
	if (d.getMinutes() >= 25 && d.getMinutes() <= 59) {
		currentHour = currentHour + 1;
	}
	if (currentHour == 1) {
		lightup(eins);
	} else {
		turnoff(eins);
	}
	if (currentHour == 2) {
		lightup(zwei);
	} else {
		turnoff(zwei);
	}
	if (currentHour == 3) {
		lightup(drei);
	} else {
		turnoff(drei);
	}
	if (currentHour == 4) {
		lightup(vier);
	} else {
		turnoff(vier);
	}
	if (currentHour == 5) {
		lightup(fuenf);
	} else {
		turnoff(fuenf);
	}
	if (currentHour == 6) {
		lightup(sechs);
	} else {
		turnoff(sechs);
	}
	if (currentHour == 7) {
		lightup(sieben);
	} else {
		turnoff(sieben);
	}
	if (currentHour == 8) {
		lightup(acht);
	} else {
		turnoff(acht);
	}
	if (currentHour == 9) {
		lightup(neun);
	} else {
		turnoff(neun);
	}
	if (currentHour == 10) {
		lightup(zehn);
	} else {
		turnoff(zehn);
	}
	if (currentHour == 11) {
		lightup(elf);
	} else {
		turnoff(elf);
	}
	if (currentHour == 12) {
		lightup(zwoelf);
	} else {
		turnoff(zwoelf);
	}
	if (d.getMinutes() % 5 == 0) {
		document.getElementById("0").style.color = "#6c1175";
		document.getElementById("1").style.color = "#6c1175";
		document.getElementById("2").style.color = "#6c1175";
		document.getElementById("3").style.color = "#6c1175";
	}
	if (d.getMinutes() % 5 == 1) {
		document.getElementById("0").style.color = "#ffffff";
		document.getElementById("1").style.color = "#6c1175";
		document.getElementById("2").style.color = "#6c1175";
		document.getElementById("3").style.color = "#6c1175";
	}
	if (d.getMinutes() % 5 == 2) {
		document.getElementById("0").style.color = "#ffffff";
		document.getElementById("1").style.color = "#ffffff";
		document.getElementById("2").style.color = "#6c1175";
		document.getElementById("3").style.color = "#6c1175";
	}
	if (d.getMinutes() % 5 == 3) {
		document.getElementById("0").style.color = "#ffffff";
		document.getElementById("1").style.color = "#ffffff";
		document.getElementById("2").style.color = "#ffffff";
		document.getElementById("3").style.color = "#6c1175";
	}
	if (d.getMinutes() % 5 == 4) {
		document.getElementById("0").style.color = "#ffffff";
		document.getElementById("1").style.color = "#ffffff";
		document.getElementById("2").style.color = "#ffffff";
		document.getElementById("3").style.color = "#ffffff";
	}
}
function lightup(x) {
	var i = x.length;
	while (i > 0) {
		i--;
		document.getElementById(x[i]).style.color = "#ffffff";
	}
}
function turnoff(x) {
	var i = x.length;
	while (i > 0) {
		i--;
		document.getElementById(x[i]).style.color = "#6c1175";
	}
}
