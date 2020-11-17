$( document ).ready(function() {
    console.log( "ready!" );

$('#search-button').on('click', () => {
    console.log("i was clicked");
    
       $.get("https://api.giphy.com/v1/gifs/search?api_key=qZqq8jPd45n49RvLiY6PtNPiAixu1RsK&q=corona", function(giphyResponse) {
         console.log(giphyResponse);
         console.log('gipgyData', giphyResponse.data)
        });
    })
});



