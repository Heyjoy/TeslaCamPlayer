// HTML元素抓手声明
const videoes = new Array(document.getElementById('video1'),document.getElementById('video2'),document.getElementById('video3'))
const VedioSelectBox = document.getElementById("vedioSelect");
const vedioDate = document.getElementById("vedioDate");
const playSpeed = document.getElementById("playSpeed");
// 变量声明
var files;
var playPauseFlag = false;
var item_Index;

document.getElementById("filepicker").addEventListener("change", function(event) {
  files = event.target.files;
  VedioSelectBox.innerHTML = ""; // clean up the list
  for (let i=0; i<files.length; i++) {
    let item_opt = document.createElement("OPTION");
    item_opt.innerHTML = files[i].name;
    VedioSelectBox.appendChild(item_opt);
  };

}, false);

function listVedio(){
  item_Index = VedioSelectBox.selectedIndex;
  loadVedioById(item_Index);
}
//display date
// add vedio control
function loadVedioById(item_Index){
  let vedio_Index = Math.floor((item_Index+1)/3);
  let vedio_content;
  for(var i=0;i<3;i++){
    let file = files[vedio_Index*3+i];
    let obj_url =  window.URL.createObjectURL(file);
    let pattern = /\d{4}(\-)\d{1,2}\1\d{1,2}\_\d{1,2}\1\d{1,2}/;
    vedioDate.innerHTML = file.name.match(pattern)[0];
    videoes[i].src =obj_url;
    videoes[i].load()
  }
}
function playPause() {
  if (playPauseFlag!=true){
    for (var i=0;i<3;i++){
      videoes[i].play();
    }
    playPauseFlag = true;
  }
  else{
    for (var i=0;i<3;i++){
      videoes[i].pause();
    }
    playPauseFlag = false;
  }
}
function playNext()
{
  item_Index=item_Index+3
  loadVedioById(item_Index);
}
function playPrev()
{
  if( item_Index>=3){
    item_Index=item_Index-3
  }
  loadVedioById(item_Index);
}
function playRateSlow() {
    // playRate = playRate+0.5;
    for (var i=0;i<3;i++){
      videoes[i].playbackRate=0.5;
    }
    playSpeed.innerHTML = videoes[0].playbackRate;
}
function playRateNormal() {
    // playRate = playRate+0.5;
    for (var i=0;i<3;i++){
      videoes[i].playbackRate=1;
    }
    playSpeed.innerHTML = videoes[0].playbackRate;
}
function playRateMax() {
    // playRate = playRate+0.5;
    for (var i=0;i<3;i++){
      videoes[i].playbackRate=8;
    }
    playSpeed.innerHTML = videoes[0].playbackRate;
}
