import '@polymer/polymer/polymer-legacy.js';
import '../d2l-tabs.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-demo-tabs-wrapper">
	<template strip-whitespace="">
		<style>
			div {
				border: solid 1px red;
			} span {
				color: red;
			}
		</style>
		<span>Component including &#60;d2l-tabs&#62; and &#60;slot&#62;</span>
		<div>
			<d2l-tabs>
				<slot></slot>
			</d2l-tabs>
		</div>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-demo-tabs-wrapper'
});
