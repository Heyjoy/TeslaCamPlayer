
const videoes = new Array(document.getElementById('video1'),document.getElementById('video2'),document.getElementById('video3'))
const VedioSelectBox = document.getElementById("vedioSelect");
const output = document.getElementById("listing");
var files;
var playPauseFlag = false;

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
  let item_li = document.createElement("li");

  // item_li.innerHTML = checkName;
  for(x in files){
    if (files[x].name == VedioSelectBox.value){
      item_li.innerHTML = "x";
    }
    else {
      item_li.innerHTML = "found nothing";
    }
  }
  let vedio_Index = Math.floor((item_Index+1)/3);
  let vedio_IdBase = vedio_Index*3;
  item_li.innerHTML = "[No."+VedioSelectBox.selectedIndex+"]"+VedioSelectBox.value+"  VedioIdex:"+vedio_IdBase;
  output.appendChild(item_li);

  for(var i=0;i<3;i++){
    let file = files[vedio_Index*3+i];
    let obj_url =  window.URL.createObjectURL(file);
    alert(file.name);
    videoes[i].src =obj_url;
    videoes[i].load()
  }

}
//display date
function displayVedioContent{


}
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
