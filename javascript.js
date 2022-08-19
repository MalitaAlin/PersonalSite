//include sections as separate html files  
  $(document).ready($("#includedArtSection").load("art.html")
  ); 


// jQuery example $(".title-text").css("color", "blue");
// Open the Modal


function openModal() {
   $("#myModal").css("display","block");
  }
  
  // Close the Modal
  function closeModal() {
    $("#myModal").css("display","none");
  }
  
  var slideIndex = 1;
  showSlides(slideIndex);
  
  // Next/previous controls
  function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  // Thumbnail image controls
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    var i;
    var slides =$(".mySlides");
    var dots = $(".demo");
    var slidenr=$(".numbertext")
    var captions = $(".captions ");
    var captionText = $("#slidecaption");

    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}

      slides.css("display","none");
      dots.removeClass("active");

      slides.eq(slideIndex-1).fadeToggle(500);
    slides.eq(slideIndex-1).css("display","block");
    
    dots.eq(slideIndex-1).addClass("active");
    slidenr.text(slideIndex+"/"+slides.length); //slides are numbered automatically

    captionText.html(captions.eq(slideIndex-1).html());
    captionText.addClass(".captions");
  }
 
  

 