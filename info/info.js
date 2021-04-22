'use strict';

const h = (new Date()).getHours();
if (h > 23 || h < 7) document.write('Доброй ночи');
if (h > 6 && h < 12) document.write('Доброе утро');
if (h > 11 && h < 19) document.write('Добрый день');
if (h > 18 && h < 24) document.write('Добрый вечер');
document.write("<br>");

const date = new Date(),
	weekday = date.toLocaleString('ru', { weekday: 'long' });

document.write('Сегодня: ' + weekday.charAt(0).toUpperCase() + weekday.substring(1).toLowerCase());
document.write("<br>");

document.write('Текущее время: ' + date.toLocaleTimeString('en'));
document.write("<br>");

function daysLeftNewYear() {

	const nextDate = new Date("January 1, 2022");

	const msPerDay = 24 * 60 * 60 * 1000;

	const daysLeft = Math.round((nextDate.getTime() - date.getTime()) / msPerDay);
	let dayname = "";
	const ds = "" + daysLeft;

	const dd = parseInt(ds.substr(ds.length - 1));

	if (daysLeft > 4 && daysLeft < 21) {
		dayname = " дней";
	}	else if (dd == 1) {
		dayname = " день";
	}	else if (dd == 2 || dd == 3 || dd == 4) {
		dayname = " дня";
	}	else {
		dayname = " дней";
	}

	document.write('До нового года осталось ' + daysLeft + dayname);
}
setInterval(daysLeftNewYear(), 86400000);
