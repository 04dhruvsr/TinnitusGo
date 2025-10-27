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

  if (document.getElementById("but").innerHTML === "⏸"){
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

  if (document.getElementById("but").innerHTML === "⏸"){
    oscillator.stop();
    document.getElementById("but").innerHTML = "▶";

  } else {
    oscillator = audioCtx.createOscillator();
    gainNode = audioCtx.createGain();
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    gainNode.gain.value = volume;
    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    document.getElementById("but").innerHTML = "⏸";
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

function to_SD2(){
  document.getElementById("SD_text").style.visibility = 'collapse';
  document.getElementById("SD_text2").style.visibility = 'visible';
}

function to_SD1(){
  document.getElementById("SD_text2").style.visibility = 'collapse';
  document.getElementById("SD_text").style.visibility = 'visible';
}

function to_N2(){
  document.getElementById("N_text").style.visibility = 'collapse';
  document.getElementById("N_text2").style.visibility = 'visible';
}

function to_N1(){
  document.getElementById("N_text2").style.visibility = 'collapse';
  document.getElementById("N_text").style.visibility = 'visible';
}

function to_TT2(){
  document.getElementById("TT_text").style.visibility = 'collapse';
  document.getElementById("TT_text3").style.visibility = 'collapse';
  document.getElementById("TT_text2").style.visibility = 'visible';
}

function to_TT1(){
  document.getElementById("TT_text2").style.visibility = 'collapse';
  document.getElementById("TT_text").style.visibility = 'visible';
}

function to_TT3(){
  document.getElementById("TT_text2").style.visibility = 'collapse';
  document.getElementById("TT_text3").style.visibility = 'visible';
}

function to_GI2(){
  document.getElementById("GI_text").style.visibility = 'collapse';
  document.getElementById("GI_text2").style.visibility = 'visible';
}

function to_GI1(){
  document.getElementById("GI_text2").style.visibility = 'collapse';
  document.getElementById("GI_text").style.visibility = 'visible';
}

function SD_next(){
  document.getElementById("SD_table").style.visibility = 'collapse';
  document.getElementById("N_table").style.visibility = 'visible';
  document.getElementById("SD_text").style.visibility = 'collapse';
  document.getElementById("SD_text2").style.visibility = 'collapse';
  document.getElementById("N_text").style.visibility = 'visible';
}

function N_next(){
  document.getElementById("N_table").style.visibility = 'collapse';
  document.getElementById("TT_table").style.visibility = 'visible';
  document.getElementById("N_text").style.visibility = 'collapse';
  document.getElementById("N_text2").style.visibility = 'collapse';
  document.getElementById("TT_text").style.visibility = 'visible';
}

function N_prev(){
  document.getElementById("N_table").style.visibility = 'collapse';
  document.getElementById("SD_table").style.visibility = 'visible';
  document.getElementById("N_text").style.visibility = 'collapse';
  document.getElementById("N_text2").style.visibility = 'collapse';
  document.getElementById("SD_text").style.visibility = 'visible';
}

function TT_next(){
  document.getElementById("TT_table").style.visibility = 'collapse';
  document.getElementById("GI_table").style.visibility = 'visible';
  document.getElementById("TT_text").style.visibility = 'collapse';
  document.getElementById("TT_text2").style.visibility = 'collapse';
  document.getElementById("TT_text3").style.visibility = 'collapse';
  document.getElementById("GI_text").style.visibility = 'visible';
}

function TT_prev(){
  document.getElementById("TT_table").style.visibility = 'collapse';
  document.getElementById("N_table").style.visibility = 'visible';
  document.getElementById("TT_text").style.visibility = 'collapse';
  document.getElementById("TT_text2").style.visibility = 'collapse';
  document.getElementById("TT_text3").style.visibility = 'collapse';
  document.getElementById("N_text").style.visibility = 'visible';
}

function GI_prev(){
  document.getElementById("GI_table").style.visibility = 'collapse';
  document.getElementById("TT_table").style.visibility = 'visible';
  document.getElementById("GI_text").style.visibility = 'collapse';
  document.getElementById("GI_text2").style.visibility = 'collapse';
  document.getElementById("TT_text").style.visibility = 'visible';
}

document.getElementById("fIn").addEventListener('change', function() {
    update()
});

document.getElementById("vIn").addEventListener('change', function() {
    update()
});

function clear(){
  document.getElementById("title").innerHTML = document.getElementById("queue")
  queue = document.getElementById("queue")
  for (let i=0; i < document.getElementById("queue").rows.length-1; i++){
      queue.deleteRow(i);
  }
}

function open_lib(){
  
  if (document.getElementById("sel1").innerHTML === '♫') {
    document.getElementById("q_sec").style.visibility= 'collapse';
    document.getElementById("f_sec").style.visibility = 'collapse';
    document.getElementById("frequency_label").style.visibility = 'collapse';
    document.getElementById("player_label").style.visibility= 'collapse';
    document.getElementById("SD_table").style.visibility = 'visible';
    document.getElementById("sel1").innerHTML = '☰'

  } else if (document.getElementById("sel1").innerHTML === '☰'){
    document.getElementById("SD_table").style.visibility= 'collapse';
    document.getElementById("N_table").style.visibility= 'collapse';
    document.getElementById("TT_table").style.visibility= 'collapse';
    document.getElementById("GI_table").style.visibility= 'collapse';
    document.getElementById("f_sec").style.visibility = 'collapse';
    document.getElementById("frequency_label").style.visibility = 'collapse';
    document.getElementById("player_label").style.visibility= 'visible';
    document.getElementById("q_sec").style.visibility = 'visible';
    document.getElementById("sel1").innerHTML = '♫'
  }
}

function open_freq(){
  document.getElementById("f_sec").style.visibility = 'visible';

  if (document.getElementById("sel2").innerHTML === 'Hz') {
    document.getElementById("SD_table").style.visibility= 'collapse';
    document.getElementById("N_table").style.visibility= 'collapse';
    document.getElementById("TT_table").style.visibility= 'collapse';
    document.getElementById("GI_table").style.visibility= 'collapse';
    document.getElementById("q_sec").style.visibility= 'collapse';
    document.getElementById("player_label").style.visibility= 'collapse';
    document.getElementById("f_sec").style.visibility = 'visible';
    document.getElementById("frequency_label").style.visibility = 'visible';

    if (document.getElementById("sel1").innerHTML === '♫'){
      document.getElementById("sel1").innerHTML = '☰';
      document.getElementById("sel2").innerHTML = '♫'; 
    }

    if (document.getElementById("sel1").innerHTML === '☰'){
      document.getElementById("sel1").innerHTML = '☰';
      document.getElementById("sel2").innerHTML = '♫'; 
    }
  } else if (document.getElementById("sel2").innerHTML === '♫'){
    document.getElementById("SD_table").style.visibility= 'visible';
    document.getElementById("player_label").style.visibility= 'collapse';
    document.getElementById("N_table").style.visibility= 'collapse';
    document.getElementById("TT_table").style.visibility= 'collapse';
    document.getElementById("GI_table").style.visibility= 'collapse';
    document.getElementById("f_sec").style.visibility = 'collapse';
    document.getElementById("frequency_label").style.visibility = 'collapse';
    document.getElementById("q_sec").style.visibility = 'collapse';
    document.getElementById("sel2").innerHTML = 'Hz';
    document.getElementById("sel1").innerHTML = '☰';
  }
}