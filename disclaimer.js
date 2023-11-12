const localKeyName = 'agreed18';
const strings = {
    welcome: 'Tunggu dulu!',
    site_contains_adult_materials: 'Hayo! Udah cukup umur belum?',
    acknowledge_confirm_majority: 'Untuk melanjutkan, kamu harus berusia setidaknya <span class="underline">20</span>tahun.',
    button_over18: 'Udah dong',
    button_under18: 'Belum nih',
    footer_imprint_paragraph: 'Untuk tujuan edukasi, orang berusia di bawah umur harus didampingi orang dewasa.',
};

class Disclaimer {
    constructor() {
        this.backgroundElement = document.getElementById('disclaimer-background');
        this.dialogElement = document.getElementById('disclaimer-dialog');

        this.dialogStatus = 0;
    }

    loadDialog() {
        if (this.dialogStatus === 0) {
            this.backgroundElement.style.display = 'block';
            this.dialogElement.style.display = 'block';

            this.dialogStatus = 1;
        }
    }

    disableDialog() {
        if (this.dialogStatus === 1) {
            this.dialogElement.style.display = 'none';
            this.backgroundElement.style.display = 'none';

            this.dialogStatus = 0;
        }
    }

    centerDialog() {
        const windowHeight = document.documentElement.clientHeight;
        const windowWidth = document.documentElement.clientWidth;
        const dialogHeight = parseInt(window.getComputedStyle(this.dialogElement).height);
        const dialogWidth = parseInt(window.getComputedStyle(this.dialogElement).width);

        this.dialogElement.style.position = 'absolute';
        this.backgroundElement.style.height = windowHeight;
    }

    isAccepted() {
        try {
            return sessionStorage.getItem(localKeyName);
        } catch (e) {
            console.log('Cannot use sessionStorage', e);
        }

        return null;
    }

    setAccepted() {
        try {
            sessionStorage.setItem(localKeyName, '1');
        } catch (e) {
            console.log('Cannot use sessionStorage', e);
        }
    }

    static generateDialog() {
        const code = `<div id="disclaimer-dialog">
      <div class="center">
      <h1>${strings.welcome}</h1>
      <p class="italic">${strings.site_contains_adult_materials}</p>
      <p class="bold">${strings.acknowledge_confirm_majority}</p>
      <p><button id="agree-over18" class="agree">${strings.button_over18}</button>
      <button id="disagree-under18" class="disagree">${strings.button_under18}</button></p>
      <p><small>${strings.footer_imprint_paragraph}</small></p>
      </div></div>
      <div id="disclaimer-background"></div>`;

        document.write(code);
    }
}
