import $ from 'jQuery';

class RibsFlashMessage {
  static displayFlash() {console.log("d");
    const flash = $('.module-flashmessage');
    
    if (flash.length > 0) {
      flash.hide().slideDown(500);
  
      flash.click(function() {
        $(this).slideUp();
      });
  
      setTimeout(function() {
        $(".module-flashmessage").slideUp();
      }, 10000);
  
      setTimeout(function() {
        $(".module-flashmessage").remove();
      }, 12000)
    }
  }
}

RibsFlashMessage.displayFlash();