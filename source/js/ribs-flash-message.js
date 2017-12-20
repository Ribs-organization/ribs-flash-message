class RibsFlashMessage {
	constructor() {
		this.flash = document.getElementsByClassName('RibsFlashMessage');

		if (this.flash) {
			this.setFlashPosition();
			this.displayFlash();
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
   * @param element
   * @param duration
   * this method do animation on height when displaying an element
   * if max height = none it show the element else this function hide it
   */
	toggleSlide(element, duration) {
    let maxHeight = 0;

	  if (window.getComputedStyle(element).getPropertyValue('max-height') === 'none') {
      maxHeight = this.getHeight(element);
    }

    element.style.transition = 'max-height 0.5s ease-in-out';
    element.style.maxHeight = 0;
    element.style.display = 'block';

    setTimeout(function() {
      element.style.maxHeight = `${maxHeight}px`;
    }, duration)
  }


	/**
	 * method to display all flash message
	 */
	displayFlash() {
	  const self = this;

    Array.from(this.flash).forEach((element, index) => {
      this.toggleSlide(element, 500);

      setTimeout(function () {
        self.toggleSlide(element, 500);
      }, 10000);

      setTimeout(function () {
        element.remove();
      }, 12000);
    });
	}
}
export default (RibsFlashMessage);

const ribsFlashMessage = new RibsFlashMessage();
