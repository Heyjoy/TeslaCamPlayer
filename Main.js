// HTML元素抓手声明
const videoes = new Array(document.getElementById('video1'),document.getElementById('video2'),document.getElementById('video3'))
const VedioSelectBox = document.getElementById("vedioSelect");
const vedioDate = document.getElementById("vedioDate");
// 变量声明
var files;
var playPauseFlag = false;
var playRate = 1; // normal speed

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
  let item_Index = VedioSelectBox.selectedIndex;
  let vedio_Index = Math.floor((item_Index+1)/3);
  let vedio_content;
  for(var i=0;i<3;i++){
    let file = files[vedio_Index*3+i];
    let obj_url =  window.URL.createObjectURL(file);
    let pattern = /\d{4}(\-)\d{1,2}\1\d{1,2}\_\d{1,2}\1\d{1,2}/;
    // alert(file.name.match(pattern));
    // vedioDate.innerHTML = file.name.match(pattern);
    vedioDate.innerHTML = file.name.match(pattern)[0];
    videoes[i].src =obj_url;
    videoes[i].load()
  }
}
//display date
// add vedio control
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

// function playRateUp() {
//     playRate = playRate+0.5;
//     for (var i=0;i<3;i++){
//       videoes[i].playbackRate(playRate);
//     }
// }
//
// function playRateDown() {
//     playRate = playRate-0.5;
//     for (var i=0;i<3;i++){
//       videoes[i].playbackRate(playRate);
//     }
// }
