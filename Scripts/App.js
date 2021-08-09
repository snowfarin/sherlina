var c = document.getElementById('myCanvas');
const playarealetter = document.getElementById('playareah');

c.addEventListener('pointermove', (e) => {
  var ctx = c.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(e.pageX, e.pageY);
  ctx.lineTo(0, 0);
  ctx.strokeStyle = 'red';
  ctx.lineWidth = 3;
  ctx.stroke();
  ctx.closePath();
  // ctx.moveTo(e.pageX, e.pageX);
  // ctx.lineTo(e.pageX, e.pageY);
});

playarealetter.addEventListener('pointermove', (e) => {
  const randomnumber = Math.random(1, 10);
  playarealetter.style.color = `rgb(${e.pageX / randomnumber},${
    e.pageY / randomnumber
  },${randomnumber / 2})`;
});
