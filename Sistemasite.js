$(function() {var videohtml5 = $('.videoGallery .videohtml5');
var liHeight = $('.videoGallery li').height();

// BLOGGER
videohtml5.click(function(){
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo"><center> <video width="100%" controls="controls" autoplay="true" poster="https://2.bp.blogspot.com/-nAdvwWqMHiY/Wb7HFYgtqrI/AAAAAAAAFqE/PY2-woxUJmMTNvw_qMc2YY3oxLmGpn_OgCLcBGAs/s1600/VIEWANIMES.COM-FUNDO.jpg" src="https://www.blogger.com/video-play.mp4?contentId='+ videoID +'" type="video/mp4"></video></center> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);

});

// Fechar Videos
$('.close').click(function(){
$('.meuVideo, .nowPlaying').remove();
});
 

})

