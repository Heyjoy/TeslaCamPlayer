
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const VedioSelectBox = document.getElementById("vedioSelect");
const output = document.getElementById("listing");
var files;

function playPause() {
  if (video1.paused)
    video1.play();
  else
    video1.pause();
}
document.getElementById("filepicker").addEventListener("change", function(event) {
  files = event.target.files;
  VedioSelectBox.innerHTML = ""; // clean up the list

  for (let i=0; i<files.length; i++) {
    let item_opt = document.createElement("OPTION");
    item_opt.innerHTML = window.URL.createObjectURL(files[i]);
    VedioSelectBox.appendChild(item_opt);
  };

}, false);

function listVedio(){
  let item_Index = VedioSelectBox.selectedIndex;
  let item_li = document.createElement("li");
  item_li.innerHTML = VedioSelectBox.selectedIndex;
  output.appendChild(item_li);
  const obj_url = window.URL.createObjectURL(files[item_Index]);
  video1.src = obj_url;
  video1.load()
}

    // listVedio(filename);

    // var date= filename.split("-");
    // // document.write(date)
    // myVideos.src='C:\Users\heyjoy\Desktop\2019-05-10_20-38-29\'+files[0];
    // myVideos.load();
  // }
