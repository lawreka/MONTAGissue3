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
        i++;
        if (i < illustrations.length){
          loopImages();
        }
    }, 2000);
  }
  loopImages();
};
