function deferVideo() {

    //defer html5 video loading
  $("video source").each(function() {
    var sourceFile = $(this).attr("src");
    $(this).attr("src", sourceFile);
    var video = this.parentElement;
    video.load();
    // uncomment if video is not autoplay
    //video.play();
  });

}
window.onload = deferVideo;


