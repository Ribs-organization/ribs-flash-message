import $ from 'jQuery';

document.addEventListener("DOMContentLoaded", () => {
    const flashMessage = $('.RibsFlashMessage');
    
    if (flashMessage.length > 0) {
        flashMessage.hide().slideDown(500);
    
        flashMessage.click((event) => {
            $(event.currentTarget).slideUp();
        });
        
        setTimeout(() => {
            flashMessage.slideUp();
        }, 10000);
        
        setTimeout(() => {
            flashMessage.remove();
        }, 12000)
    }
});