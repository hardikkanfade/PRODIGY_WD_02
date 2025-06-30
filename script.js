let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function timeToString(time) {
  const date = new Date(time);
  const hrs = String(date.getUTCHours()).padStart(2, '0');
  const mins = String(date.getUTCMinutes()).padStart(2, '0');
  const secs = String(date.getUTCSeconds()).padStart(2, '0');
  return `${hrs}:${mins}:${secs}`;
}

function start() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    document.getElementById('display').textContent = timeToString(elapsedTime);
  }, 1000);
}

function pause() {
  clearInterval(timerInterval);
}

function reset() {
  clearInterval(timerInterval);
  document.getElementById('display').textContent = "00:00:00";
  elapsedTime = 0;
  document.getElementById('laps').innerHTML = "";
}

function lap() {
  const lapTime = timeToString(elapsedTime);
  const li = document.createElement('li');
  li.textContent = `Lap: ${lapTime}`;
  document.getElementById('laps').appendChild(li);
}
