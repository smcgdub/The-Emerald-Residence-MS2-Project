!function(e,t,a){var n,o=e.getElementsByTagName(t)[0];e.getElementById(a)||((n=e.createElement(t)).id=a,n.src="https://weatherwidget.io/js/widget.min.js",o.parentNode.insertBefore(n,o))}(document,"script","weatherwidget-io-js");var tag=document.createElement("script");tag.src="https://www.youtube.com/iframe_api";var player,firstScriptTag=document.getElementsByTagName("script")[0];function onYouTubeIframeAPIReady(){player=new YT.Player("dublin-player",{height:"600",width:"100%",videoId:"w9vVo9kV_gI",events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}}),player=new YT.Player("cork-player",{height:"600",width:"100%",videoId:"zfMbpxt9Qgo",events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}}),player=new YT.Player("galway-player",{height:"600",width:"100%",videoId:"OmiCXTSg5lk",events:{onReady:onPlayerReady,onStateChange:onPlayerStateChange}})}function onPlayerReady(e){}firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);var done=!1;function onPlayerStateChange(e){e.data!=YT.PlayerState.PLAYING||done||(setTimeout(stopVideo),done=!0)}function stopVideo(){player.stopVideo()}$(document).ready(function(){$(".scroll").click(function(e){event.preventDefault(),$("body,html").animate({scrollTop:$(this.hash).offset().top},1e3)})});

// WEATHER WIDGET (PROVIDED BY WEATHER WIDGET.IO)
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// YOUTUBE VIDEOS
var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// LOAD VIDEO DUBLIN PLAYER
var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('dublin-player', {
    height: '600',
    width: '100%',
    videoId: 'w9vVo9kV_gI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
          }
        });
        
// LOAD VIDEO CORK PLAYER
    player = new YT.Player('cork-player', {
    height: '600',
    width: '100%',
    videoId: 'zfMbpxt9Qgo',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
          }
        });

// LOAD VIDEO GALWAY PLAYER
    player = new YT.Player('galway-player', {
    height: '600',
    width: '100%',
    videoId: 'OmiCXTSg5lk',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
          }
        });
      }

// AUTO PLAY FUNCTION SET TO NONE. CODE ON LINE 48 MUST BE LEFT IN PLACE OR PLAYER WILL NOT LOAD, JUST COMMENT OUT AUTOPLAY FUNCTION
function onPlayerReady(event) {
  // event.target.playVideo();
}

var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
}

// SMOOTH SCROLLING FROM CLICKING NAVBAR ITEMS 
$(document).ready(function(){
  // DECLARE THE VARIABLE AND LINK IT TO THE SCROLL CLASS CREATED
  var scrollLink = $('.scroll');

  // SMOOTH SCROLLING FUNCTION
  scrollLink.click(function(e){
    event.preventDefault();
    $('body,html').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });
});