// WEATHER WIDGET DUBLIN
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// WEATHER WIDGET CORK
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src='https://weatherwidget.io/js/widget.min.js';fjs.parentNode.insertBefore(js,fjs);}}(document,'script','weatherwidget-io-js');

// YOUTUBE VIDEO
var tag = document.createElement('script');

  tag.src = "https://www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
    height: '450',
    width: '100%',
    videoId: 'w9vVo9kV_gI',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
          }
        });
      }

function onPlayerReady(event) {
  event.target.playVideo();
}

var done = false;
  function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
      setTimeout(stopVideo,);
      done = true;
    }
  }
  function stopVideo() {
    player.stopVideo();
}