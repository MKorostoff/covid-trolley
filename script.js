var long = document.getElementById('long');
var left = 500;

for (var i = 0; i < 256; i++) {
  var el = document.createElement('div');
  el.className = 'long';
  el.style.left = left + 'px';
  long.appendChild(el);
  left += 1240;
}

left += 50;
var el = document.createElement('div');
el.className = 'end';
el.innerHTML = 'This is the number of Americans who died of covid just in the past week, about 15,000. <a href="https://covidtracking.com/data/national" target="_blank">[source]</a>';
el.style.left = left + 'px';
long.appendChild(el);
