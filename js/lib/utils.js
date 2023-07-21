define((require, factory) => {
	'use strict';

	return {
		getRandom: (array) => array[Math.floor(Math.random() * array.length)]
	}
});