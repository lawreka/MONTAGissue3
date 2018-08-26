function start(){
  pageScroll();
  voice();
  switchImages();
}

function pageScroll() {
    window.scrollBy(0,1);
    scrolldelay = setTimeout(pageScroll,100);
  }
function voice(){
  var words = document.getElementById("text").innerHTML;
  var msg = new SpeechSynthesisUtterance(words);
  var voices = window.speechSynthesis.getVoices();
msg.voice = voices[17]; // Note: some voices don't support altering params
// 7 - british man 11 - robot voice 17 - aus female voice

msg.voiceURI = 'native';
msg.volume = 1; // 0 to 1
msg.rate = 0.8; // 0.1 to 10
msg.pitch = 1; //0 to 2
msg.lang = 'en-US';

  window.speechSynthesis.speak(msg);
}


function switchImages(){
  var illustrations =
  ["images/birds-02.png", "images/finger-04.png", "images/hex-02.png", "images/hex-03.png", "images/hex-04.png", "images/kidney1.png", "images/kidney2.png", "images/kidney3.png", "images/kidney4.png", "images/kidneywlegs-02.png", "images/lildudes-02.png", "images/lildudes-03.png", "images/lildudes2-02.png", "images/obeyhead-02.png", "images/paintgirl-03.png", "images/paintins-02.png", "images/palette-02.png", "images/policehead-03.png", "images/ribbon-05.png", "images/statuehead-01.png"]
  var gallery = document.getElementById("images");

  var i = 0;
  function loopImages(){
    setTimeout(function(){
        gallery.style.backgroundImage = "url(" + illustrations[i] + ")";
        if (i < illustrations.length){
          loopImages();
          i++;
          console.log(i);
        }
        else{
          i = 0;
          console.log(i);
          loopImages();
        }
    }, 60000);
  }
  loopImages();
};
