window.onload = function() {var videohtml5 = $('.videoGallery .videohtml5');
var liHeight = $('.videoGallery li').height();

// BLOGGER
videohtml5.click(function(){
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo"><center><object class="BLOG_video_class" contentid="84dc0f6782f3cc9e" height="450" id="BLOG_video-CODIGO" width="100%"></object></center> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);

});

// Fechar Videos
$('.close').click(function(){
$('.meuVideo, .nowPlaying').remove();
});
 

})
