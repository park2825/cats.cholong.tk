define(
	[
		'require',
		'jquery.slim',

		"lib/utils",
	],
	(_, utils) => {
		const $catImage = $("#cataas-img");
		const videos = [
			"https://www.youtube.com/watch?v=rbz5siyFS9s",
			"https://www.youtube.com/watch?v=bwQ_jw4lZ3g"
		];


		$catImage.on('click', () => location.href = utils.getRandom(videos));
	}
);