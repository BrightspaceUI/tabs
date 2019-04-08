/**
`d2l-tab-panel`
Polymer-based web components for tab

@demo demo/index.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';
import './d2l-tab-panel-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-tab-panel">
	<template strip-whitespace="">
		<style include="d2l-tab-panel-styles">
			/*
			 * https://github.com/Polymer/tools/issues/408
			 * Empty style blocks break linter.
			 */
		</style>
		<slot></slot>
	</template>

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-tab-panel',

	behaviors: [
		D2L.PolymerBehaviors.Tabs.TabPanelBehavior
	]

});
