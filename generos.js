$(function() {var generos = $('.generoscss .generos');
var liHeight = $('.generoscss li').height();

// BLOGGER
generos.click(function(){
var imagem = $(this).attr('imagem');
var texto = $(this).attr('texto');
var link = $(this).attr('link');
var videos = $('<div class="qualquercoisa"><img  width="100%" src="'+ imagem +'"/><p>   '+ texto +'   </p> <a href="'+ link +'"><center>Assistir Anime</center></a>  </div> </div>');

$('.qualquercoisa, .nowPlaying').remove();
$(this).parents().eq(2).append(videos);

});

// Fechar Videos
$('.close2').click(function(){
$('.qualquercoisa, .nowPlaying').remove();
});
 

})
