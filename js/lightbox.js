
//close lightbox when clicking background or "X" button
$("#lightboxTrigger, #lightboxClose").click(function() {
  $('#lightbox').toggleClass('hidden');
});


function lightboxInit() {

//set counter to track video data
let mediaCount = 0;

//take number from clicked video thumbnail and set counter, then pull data for lightbox
$("a.video_item").each(function() {
  $(this).click(function() {
    //unhide lightbox
    $('#lightbox').removeClass('hidden');
      mediaCount = $(this).index() + 1;
      iframeSet();
  })
});

$( "#lightboxNext" ).click(function() {
  //adjust counter then set lightbox counter and pull data
  if (mediaCount >= 7) {
    mediaCount = 1;
  }
  else{
    mediaCount++;
  }
  iframeSet();

});

$( "#lightboxPrev" ).click(function() {
  //adjust counter then set lightbox counter and pull data
  if (mediaCount <= 1) {
    mediaCount = 7;
  }
  else{
    mediaCount--;
  }
  iframeSet();
});



function iframeSet(){

  //get counter and find the corresponding video thumb. 
  //get data stored in the thumbnail html and put it into the lightbox
  let currentURL = $("a.video_item:nth-child(" + mediaCount + ")").attr('videoData');
  let currentContent = $("a.video_item:nth-child(" + mediaCount + ")").find('.details').html();
  $('#lightbox').find('iframe').attr('src', currentURL);
  $('#lightbox').find('.text_area .content').html(currentContent);
  }
}

lightboxInit();
