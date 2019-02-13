/**
`d2l-tab`
Polymer-based web components for tab

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import 'fastdom/fastdom.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { afterNextRender } from '@polymer/polymer/lib/utils/render-status.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-tab">
	<template strip-whitespace="">
		<style>

			:host {
				box-sizing: border-box;
				display: inline-block;
				max-width: 200px;
				outline: none;
				position: relative;
				vertical-align: middle;
			}

			.d2l-tab-text {
				margin: 0.6rem;
				overflow: hidden;
				text-overflow: ellipsis;
				white-space: nowrap;
			}

			:host(:first-child) .d2l-tab-text {
				margin-left: 0;
			}

			:host(:dir(rtl)):first-child .d2l-tab-text {
				margin-left: 0.6rem;
				margin-right: 0;
			}

			.d2l-tab-selected-indicator {
				border-top: 4px solid var(--d2l-color-celestine);
				border-top-left-radius: 4px;
				border-top-right-radius: 4px;
				bottom: 0;
				display: none;
				margin: 1px 0.6rem 0 0.6rem;
				position: absolute;
				-webkit-transition: box-shadow 0.2s;
				transition: box-shadow 0.2s;
				width: calc(100% - 1.2rem);
			}

			:host(:first-child) .d2l-tab-selected-indicator {
				margin-left: 0;
				width: calc(100% - 0.6rem);
			}

			:host(:dir(rtl)):first-child .d2l-tab-selected-indicator {
				margin-left: 0.6rem;
				margin-right: 0;
			}

			:host(:hover) {
				color: var(--d2l-color-celestine);
				cursor: pointer;
			}

			:host([aria-selected="true"]:hover) {
				color: inherit;
				cursor: default;
			}

			:host(:focus) .d2l-tab-selected-indicator {
				display: block;
				border-top-color: rgba(0, 111, 191, 0.3);
				box-shadow: none;
			}

			:host([aria-selected="true"]:focus) .d2l-tab-selected-indicator {
				border-top-color: var(--d2l-color-celestine);
				box-shadow: 0 0 0 3px rgba(0, 111, 191, 0.3);
			}

			:host([aria-selected="true"]) .d2l-tab-selected-indicator {
				display: block;
			}

		</style>
		<div class="d2l-tab-text">[[text]]</div>
		<div class="d2l-tab-selected-indicator"></div>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-tab',

	hostAttributes: {
		'aria-selected': 'false',
		'role': 'tab',
		'tabindex': '-1'
	},

	properties: {

		/**
		 * Indicates the selected tab.
		 */
		selected: {
			type: Boolean,
			observer: '_handleSelected'
		},

		/**
		 * Text for the tab.
		 */
		text: {
			type: String,
			observer: '_handleText'
		}

	},

	_keyCodes: {
		ENTER: 13,
		SPACE: 32
	},

	ready: function() {
		this._handleClick = this._handleClick.bind(this);
		this._handleKeyDown = this._handleKeyDown.bind(this);
	},

	attached: function() {
		afterNextRender(this, function() {
			this.addEventListener('click', this._handleClick);
			this.addEventListener('keydown', this._handleKeyDown);
		}.bind(this));
	},

	detached: function() {
		this.removeEventListener('click', this._handleClick);
		this.removeEventListener('keydown', this._handleKeyDown);
	},

	_handleClick: function() {
		this.selected = true;
	},

	_handleKeyDown: function(e) {
		if (e.keyCode !== this._keyCodes.ENTER && e.keyCode !== this._keyCodes.SPACE) {
			return;
		}
		e.stopPropagation();
		e.preventDefault();
		this.selected = true;
	},

	_handleSelected: function(newValue) {
		if (newValue) {
			this.setAttribute('aria-selected', 'true');
			this.dispatchEvent(new CustomEvent(
				'd2l-tab-selected', { bubbles: true, composed: true }
			));
		} else {
			// Note: this must be specified in order for VoiceOver to correctly announce unselected tabs.
			this.setAttribute('aria-selected', 'false');
		}
	},

	_getMeasures: function() {
		this._updateMeasures();
		return this._measures || this._measure();
	},

	_handleText: function() {
		this.title = this.text;
		fastdom.measure(function() {
			this._updateMeasures();
		}.bind(this));
	},

	_updateMeasures: function() {
		var rect = this.getBoundingClientRect();
		this._measures = {
			rect: rect,
			offsetLeft: this.offsetLeft
		};
		return this._measures;
	}

});
