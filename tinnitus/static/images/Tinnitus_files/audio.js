audioCtx = new(window.AudioContext || window.webkitAudioContext)();
var oscillator = audioCtx.createOscillator();
var gainNode = audioCtx.createGain();
oscillator.connect(gainNode);
gainNode.connect(audioCtx.destination);

show();
document.onload = show();
window.onload = show();

function show() {
  frequency = document.getElementById("fIn").value;
  document.getElementById("fOut").innerHTML = frequency + ' Hz';

  volume = document.getElementById("vIn").value / 100;
  document.getElementById("vOut").innerHTML = String(Math.round(volume*100)) + "%";

  if (document.getElementById("but").innerHTML === "Pause"){
    oscillator.stop();
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';
    oscillator.start();
  }
};

function beep() {
  
  if (document.getElementById("but").innerHTML === "Pause"){
    oscillator.stop();
    document.getElementById("but").innerHTML = "Play";

  } else {
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    document.getElementById("but").innerHTML = "Pause";
    oscillator.start();
  }
};

function update(){
  oscillator = audioCtx.createOscillator();
  gainNode = audioCtx.createGain();
  oscillator.connect(gainNode);
  gainNode.connect(audioCtx.destination);

  gainNode.gain.value = volume;
  oscillator.frequency.value = frequency;
  oscillator.type = 'sine';
  oscillator.start();
}

document.getElementById("fIn").addEventListener('change', function() {
    update()
});

document.getElementById("vIn").addEventListener('change', function() {
    update()
});