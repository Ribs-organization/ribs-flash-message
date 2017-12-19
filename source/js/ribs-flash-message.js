import $ from 'jQuery';

class RibsFlashMessage {
	constructor() {
		this.flash = document.getElementsByClassName('RibsFlashMessage');

		if (this.flash) {
			this.setFlashPosition();
			/*this.displayFlash();*/
		}
	}
  
  /**
   * @param element
   * @returns {Number}
   * function that return height of an element that is no displayed
   */
	getHeight(element) {
	  element.style.display = 'block';
	  let height = parseInt(window.getComputedStyle(element).getPropertyValue('height'));
    element.style.display = '';
    
    return height;
  }

	/**
	 * method to set top position of flashes message when there more than 1 flash displayed
	 */
	setFlashPosition() {
		const initialTop = 20;
		let topPos = parseInt(window.getComputedStyle(this.flash[0]).getPropertyValue('top'));
    
    Array.from(this.flash).forEach((element, index) => {
			if (index === 0) {
				topPos += this.getHeight(element);
			} else {
				let top = initialTop + topPos;
				
				element.style.top = `${top}px`;

				topPos += initialTop + this.getHeight(element);;
			}
		});
	}

	/**
	 * method to display all flash message
	 */
	displayFlash() {
		const flash = this.flash;

		if (flash.length > 0) {
			flash.hide().slideDown(500);

			flash.click(function () {
				$(this).slideUp();
			});

			setTimeout(function () {
				flash.slideUp();
			}, 10000);

			setTimeout(function () {
				flash.remove();
			}, 12000);
		}
	}
}
export default (RibsFlashMessage);

const ribsFlashMessage = new RibsFlashMessage();
