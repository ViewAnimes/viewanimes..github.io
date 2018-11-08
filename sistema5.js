$(function() {var videohtml5 = $('.videoGallery .videohtml5');
var liHeight = $('.videoGallery li').height();

// BLOGGER
videohtml5.click(function(){
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo"><center><object id="BLOG_video-350aab86f3a248f9" class="BLOG_video_class" contentid="350aab86f3a248f9" width="320" height="266" ></object></center> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);

});

// Fechar Videos
$('.close').click(function(){
$('.meuVideo, .nowPlaying').remove();
});
 

})
