import RibsCore from 'ribs-core';

class RibsFlashMessage {
  constructor() {
    this.template = `
      <div class="notification">
        <div class="left">
          <div class="icone">
            <i class='fa'></i>
          </div>
        </div>
        <div class="right">
          <p></p>
        </div>
      </div>
    `;

    this.topPos = 20;
    this.initialTop = 20;

    this.lauchFlashes();
  }

  /**
   * method to launch all flashes
   */
  lauchFlashes() {
    this.flash = document.querySelectorAll('.RibsFlashMessage:not(.displayed)');

    if (this.flash.length > 0) {
      this.setFlashPosition();
      this.displayFlash();
      this.closeFlash();
    }
  }

  /**
   * method to set top position of flashes message when there more than 1 flash displayed
   */
  setFlashPosition() {
    const initialTop = 20;

    Array.from(this.flash).forEach((element, index) => {
      if (index === 0 && this.topPos === initialTop) {
        this.topPos += RibsCore.getHeight(element);
      } else {
        let top = initialTop + this.topPos;

        element.style.top = `${top}px`;

        this.topPos += initialTop + RibsCore.getHeight(element);
      }
    });
  }

  /**
   * method to display all flash message
   */
  displayFlash() {
    Array.from(this.flash).forEach((element, index) => {
      RibsCore.toggleSlide(element, 500);
      element.classList.add('displayed');
      let that = this;

      setTimeout(() => {
        that.topPos -= parseInt(RibsCore.getHeight(element), 10) + parseInt(that.initialTop, 10);
        RibsCore.toggleSlide(element, 500);
      }, 10000);

      setTimeout(() => {
        element.remove();
      }, 12000);
    });
  }

  /**
   * method to close a flash message
   */
  closeFlash() {
    Array.from(this.flash).forEach((element, index) => {
      element.addEventListener('click', (event) => {
        RibsCore.toggleSlide(element, 500);
      });
    })
  }

  /**
   * method to append a flash message directly in your js script
   * @param message
   * @param type
   */
  append(message, type) {
    const div = document.createElement('div');
    div.classList.add('RibsFlashMessage');
    div.innerHTML = this.template;

    let icone = '';
    if (type === 'error') {
      icone = 'fa-times'
    } else if (type === 'info') {
      icone = 'fa-info'
    } else if (type === 'success') {
      icone = 'fa-check'
    }

    div.querySelector('p').innerText = message;
    div.querySelector('i').classList.add(icone);
    div.classList.add(type);
    document.querySelector('body').appendChild(div);

    this.lauchFlashes();
  }
}

export default RibsFlashMessage;
