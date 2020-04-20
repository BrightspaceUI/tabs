import '@polymer/polymer/polymer-legacy.js';
import '/node_modules/@brightspace-ui/core/components/button/button.js';
import '../d2l-tab-panel-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-demo-tab-panel">
	<template strip-whitespace="">
		<style include="d2l-tab-panel-styles">
			div {
				border: solid 1px blue;
			}
			span {
				color: blue;
			}
		</style>
		<span>Custom tab-panel component using d2l-tab-panel-behavior</span>
		<div>
			<slot></slot>
			<br>
			<d2l-button on-click="changeText">Change title</d2l-button>
		</div>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-demo-tab-panel',
	behaviors: [
		D2L.PolymerBehaviors.Tabs.TabPanelBehavior
	],
	changeText: function() {
		this.text = 'Tab Name Changed';
	}
});
