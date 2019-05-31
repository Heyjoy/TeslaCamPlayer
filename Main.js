
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
var files;

function playPause() {
  if (video1.paused)
    video1.play();
  else
    video1.pause();
}
document.getElementById("filepicker").addEventListener("change", function(event) {
  let output = document.getElementById("listing");
  files = event.target.files;

  const obj_url = window.URL.createObjectURL(files[2]);
  for (let i=0; i<files.length; i++) {
    let item = document.createElement("OPTION");
    item.innerHTML = files[i].name;
    document.getElementById("mySelect").appendChild(item);
  };
  video1.src = obj_url;
  video1.load()
}, false);

    // listVedio(filename);

    // var date= filename.split("-");
    // // document.write(date)
    // myVideos.src='C:\Users\heyjoy\Desktop\2019-05-10_20-38-29\'+files[0];
    // myVideos.load();
  // }
