import { Controller } from '@hotwired/stimulus';
import { useClickOutside } from 'stimulus-use';

export default class extends Controller {

    static classes = [ 'warning' ];
    static values = { confirmationLabel: String };

    connect() {
        useClickOutside(this);
        this.confirmed = false;
        this.initialContent = this.element.innerHTML;
    }

    click(event) {
        if (this.confirmed === false) {
            event.preventDefault();
            this.confirmed = true;
            this.element.classList.add(this.warningClass);
            this.initialContent = this.element.innerHTML;
            this.element.innerText = this.confirmationLabelValue;
        }
    }

    /**
     * We need the conditional statement in here, otherwise it
     * prevents any other clicks on the entire page, because they
     * are all considered "outside" of the current element as well.
     *
     * So the conditional only applies this behaviour if we are
     * still awaiting confirmation on the current element.
     */
    clickOutside(event) {
        if (this.confirmed === true) {
            event.preventDefault();
            this.confirmed = false;
            this.element.classList.remove(this.warningClass);
            this.element.innerHTML = this.initialContent;
        }
    }
}
