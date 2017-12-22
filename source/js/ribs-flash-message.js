import 'babel-polyfill';
import RibsCore from 'ribs-core';

class RibsFlashMessage {
	constructor() {
		this.flash = document.getElementsByClassName('RibsFlashMessage');

		if (this.flash) {
			this.setFlashPosition();
			this.displayFlash();
		}
	}

	/**
	 * method to set top position of flashes message when there more than 1 flash displayed
	 */
	setFlashPosition() {
		const initialTop = 20;
		let topPos = parseInt(window.getComputedStyle(this.flash[0]).getPropertyValue('top'));

    Array.from(this.flash).forEach((element, index) => {
			if (index === 0) {
				topPos += RibsCore.getHeight(element);
			} else {
				let top = initialTop + topPos;

				element.style.top = `${top}px`;

				topPos += initialTop + RibsCore.getHeight(element);;
			}
		});
	}

	/**
	 * method to display all flash message
	 */
	displayFlash() {
    Array.from(this.flash).forEach((element, index) => {
      RibsCore.toggleSlide(element, 500);

      setTimeout(function () {
        RibsCore.toggleSlide(element, 500);
      }, 10000);

      setTimeout(function () {
        element.remove();
      }, 12000);
    });
	}
}
export default (RibsFlashMessage);

const ribsFlashMessage = new RibsFlashMessage();
