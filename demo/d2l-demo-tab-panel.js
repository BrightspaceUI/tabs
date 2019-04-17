import '@polymer/polymer/polymer-legacy.js';
import 'd2l-button/d2l-button-subtle.js';
import '../d2l-tab-panel-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-demo-tab-panel">
	<template strip-whitespace="">
		<style include="d2l-tab-panel-styles">
			div {
				border: solid 1px blue;
			} span {
				color: blue;
			}
		</style>
		<span>Custom tab-panel component using d2l-tab-panel-behavior</span>
		<div>
			<slot></slot>
			<br>
			<d2l-button-subtle text="Change title" on-click="changeText"></d2l-button-subtle>
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
