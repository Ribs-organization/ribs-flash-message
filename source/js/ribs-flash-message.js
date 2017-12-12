import $ from 'jQuery';

class RibsFlashMessage {
  static displayFlash() {
    const flash = $('.RibsFlashMessage');
    
    if (flash.length > 0) {
      flash.hide().slideDown(500);
  
      flash.click(function() {
        $(this).slideUp();
      });
  
      setTimeout(function() {
          flash.slideUp();
      }, 10000);
  
      setTimeout(function() {
          flash.remove();
      }, 12000)
    }
  }
}

RibsFlashMessage.displayFlash();