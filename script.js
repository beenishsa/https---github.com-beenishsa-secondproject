function search()
    {
  var resultHtml;
   var input = $('#search-field').val();
   console.log(input)
   $.get("http://api.giphy.com/v1/gifs/search?q="+input+"&api_key=MKnhlA6fn7IktUX3r5DzPOtEipLKtXbF&q=antiquecars&limit=12", function(response) {
      console.log(response.data[0]); 
     // $('#img').html("<img src="+ response.data[0].images.downsized_large.url + ">");

    for(let image of response.data){
      resultHtml = resultHtml + '<img src='+image.images.downsized_large.url+' class="col-span-12 sm:col-span-6 md:col-span-4"/>' 
      }
      console.log(resultHtml);
  $('#first-result-image').html(resultHtml)
}) 
}
