import '@polymer/polymer/polymer-legacy.js';
import { getUniqueId } from '@brightspace-ui/core/helpers/uniqueId.js';

const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-tab-panel-styles">
	<template>
		<style>
			:host {
				box-sizing: border-box;
				display: none;
				margin: 1.2rem 0;
			}

			:host([no-padding]) {
				margin: 0;
			}

			:host([selected]) {
				display: block;
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Tabs = window.D2L.PolymerBehaviors.Tabs || {};

/** @polymerBehavior */
D2L.PolymerBehaviors.Tabs.TabPanelBehavior = {

	hostAttributes: {
		'role': 'tabpanel'
	},

	properties: {

		/**
		 * Whether to exclude default padding from the panel.
		 */
		noPadding: {
			type: Boolean,
			reflectToAttribute: true
		},

		/**
		 * Indicates the selected tab.
		 */
		selected: {
			type: Boolean,
			observer: '_handleSelected',
			reflectToAttribute: true
		},

		/**
		 * Text for the tab.
		 */
		text: {
			type: String,
			observer: '_updateText'
		}

	},

	ready: function() {
		this.id = getUniqueId();
		this.role = 'tabpanel';
	},

	attached: function() {
		if (this.selected) {
			requestAnimationFrame(function() {
				this._dispatchSelected();
			}.bind(this));
		}
	},

	_dispatchSelected: function() {
		this.dispatchEvent(new CustomEvent(
			'd2l-tab-panel-selected', { bubbles: true, composed: true }
		));
	},

	_handleSelected: function(newValue) {
		if (newValue) {
			this._dispatchSelected();
		}
	},

	_updateText: function() {
		this.setAttribute('aria-label', this.text);
		this.dispatchEvent(new CustomEvent(
			'd2l-tab-panel-text-changed', { bubbles: true, composed: true, detail: { text: this.text } }
		));
	}

};
