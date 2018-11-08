$(function() {var videohtml5 = $('.videoGallery .videohtml5');
var liHeight = $('.videoGallery li').height();

// BLOGGER
videohtml5.click(function(){
var videoID = $(this).attr('data-videoID');
var videos = $('<div class="meuVideo"><center>MEU NOME</center> </div>');

$('.meuVideo, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);

});

// Fechar Videos
$('.close').click(function(){
$('.meuVideo, .nowPlaying').remove();
});
 

})
