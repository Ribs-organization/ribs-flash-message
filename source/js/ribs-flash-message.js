import $ from 'jQuery';

class RibsFlashMessage {
	constructor() {
		this.flash = $('.RibsFlashMessage');
		this.setFlashPosition();
		this.displayFlash();
	}

	/**
	 * mathod to set top position of flashes message when there more than 1 flash displayed
	 */
	setFlashPosition() {
		const initialTop = 40;
		const nextTop = initialTop / 2;
		let topPos = this.flash.position().top;

		this.flash.each((index, element) => {
			if (index === 0) {
				topPos += $(element).height();
			} else {
				let top = initialTop + topPos;

				$(element).css({top: `${top}px`});

				topPos += nextTop + $(element).height();
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