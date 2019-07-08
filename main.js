$(function() {
    //Code along for image gallery
    
    let gallery = $(".project").find("img");
    gallery.css("width", "22%").css("opacity", "0.7");
    
    gallery.mouseenter(function(){
      $(this).stop().fadeTo(500, 1)
    })
    
    gallery.mouseleave(function(){
      $(this).stop().fadeTo(500, .7)
    })
    
    gallery.click(function(){
      let source = $(this).attr("src");
      let image = $("<img>").attr("src", source).css("width", "100%");
      $(".lightbox").empty().append(image).fadeIn(1000);
    })
    
    $(".lightbox").click(function(){
      $(this).stop().fadeOut(1000);
    })
    
    
    });