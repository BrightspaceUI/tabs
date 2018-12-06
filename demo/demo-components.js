import '@polymer/polymer/polymer-legacy.js';
import 'd2l-button/d2l-button-subtle.js';
import '../d2l-tabs.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-demo-templated-tabs">
	<template strip-whitespace="">
		<d2l-tabs>
			<template items="{{tabs}}" is="dom-repeat">
				<d2l-tab-panel text="{{item.text}}">{{item.content}}<a href="http://www.google.com">google</a></d2l-tab-panel>
			</template>
			<d2l-button-subtle slot="ext" text="Search" icon="d2l-tier1:search"></d2l-button-subtle>
		</d2l-tabs>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-demo-templated-tabs',
	ready: function() {
		this.tabs = [
			{text: 'Winter 17', content: 'content for winter 2017'},
			{text: 'Summer 18', content: 'content for summer 2018'},
			{text: 'Fall 18', content: 'content for fall 2018'},
			{text: 'All', content: 'content for all'}
		];
	}
});
