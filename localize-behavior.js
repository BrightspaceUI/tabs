import 'd2l-localize-behavior/d2l-localize-behavior.js';

window.D2L = window.D2L || {};
window.D2L.PolymerBehaviors = window.D2L.PolymerBehaviors || {};
window.D2L.PolymerBehaviors.Tabs = window.D2L.PolymerBehaviors.Tabs || {};

/** @polymerBehavior D2L.PolymerBehaviors.Tabs.LocalizeBehavior */
D2L.PolymerBehaviors.Tabs.LocalizeBehaviorImpl = {
	properties: {
		/**
		 * Localization resources.
		 */
		resources: {
			value: function() {
				return {
					'ar': {
						'scroll.previous': 'التمرير إلى اليسار',
						'scroll.next':'التمرير إلى اليمين'
					},
					'en': {
						'scroll.previous': 'Scroll Backward',
						'scroll.next': 'Scroll Forward'
					},
					'es': {
						'scroll.previous': 'Desplácese a la izquierda',
						'scroll.next': 'Desplácese a la derecha'
					},
					'fr': {
						'scroll.previous': 'Défilement vers la gauche',
						'scroll.next': 'Défilement vers la droite'
					},
					'ja': {
						'scroll.previous': '左にスクロール',
						'scroll.next': '右にスクロール'
					},
					'ko': {
						'scroll.previous': '왼쪽으로 스크롤',
						'scroll.next': '오른쪽으로 스크롤'
					},
					'nl': {
						'scroll.previous': 'Naar links schuiven',
						'scroll.next': 'Naar rechts schuiven'
					},
					'pt': {
						'scroll.previous': 'Rolar para Esquerda',
						'scroll.next': 'Rolar para Direita'
					},
					'sv': {
						'scroll.previous': 'Rulla till vänster',
						'scroll.next': 'Rulla till höger'
					},
					'tr': {
						'scroll.previous': 'Sola Kaydır',
						'scroll.next': 'Sağa Kaydır'
					},
					'zh': {
						'scroll.previous': '向左滚动',
						'scroll.next': '向右滚动'
					},
					'zh-tw': {
						'scroll.previous': '向左捲動',
						'scroll.next': '向右捲動'
					}
				};
			}
		}
	}
};

/** @polymerBehavior D2L.PolymerBehaviors.Tabs.LocalizeBehavior */
D2L.PolymerBehaviors.Tabs.LocalizeBehavior = [
	D2L.PolymerBehaviors.LocalizeBehavior,
	D2L.PolymerBehaviors.Tabs.LocalizeBehaviorImpl
];
