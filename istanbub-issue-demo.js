import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';

/**
 * `istanbub-issue-demo`
 *
 *
 * @customElement
 * @polymer
 * @demo demo/index.html
 */
class IstanbubIssueDemo extends PolymerElement {
  static get template() {
    return html`
      <style>
        :host {
          display: block;
        }
      </style>
      <h2>Hello [[prop1]]!</h2>
    `;
  }
  static get properties() {
    return {
      prop1: {
        type: String,
        value: 'istanbub-issue-demo',
      },
    };
  }
}

window.customElements.define('istanbub-issue-demo', IstanbubIssueDemo);
