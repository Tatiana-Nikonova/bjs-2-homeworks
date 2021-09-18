// тут вы можете вызывать функции из task.js
let phoneAlarm = new AlarmClock();

phoneAlarm.addClock('09:00', () => console.log('Пора вставать'), 1);
phoneAlarm.addClock('09:01', () => { console.log('Давай, вставай уже!'); phoneAlarm.removeClock(2) }, 2);
phoneAlarm.addClock('09:01', () => console.log('Иди умываться!'));

var clock = new AlarmClock();

clock.addClock('00:00', () => { }, 1);
clock.addClock('00:00', () => { }, 2);
clock.addClock('00:00', () => { }, 3);
clock.addClock('00:00', () => { }, 4);
clock.addClock('00:00', () => { }, 5);

clock.printAlarms();



phoneAlarm.addClock('09:02', () => {
	console.log('Вставай, а то проспишь!');
	phoneAlarm.clearAlarms();
	phoneAlarm.printAlarms();
}, 3);

phoneAlarm.addClock('09:05', () => console.log('Вставай, а то проспишь!'), 1);


phoneAlarm.start();

var clock = new AlarmClock();
clock.removeClock(2);

