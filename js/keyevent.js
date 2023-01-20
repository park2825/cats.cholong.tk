$(document).ready(() => {
	const $catImage = $("#cataas-img");
	$(document).on('keydown', event => {
		const keyDict = {
			123: {name: "개발자 도구"},
			17: {name: "ctrl키"},
			16: {name: "shift키"},
			73: {name: "i키"}
		};
		
		if(keyDict.hasOwnProperty(event.keyCode)) {
			swal({
				title: "경고!",
				text: `사이트 보호를 위해 ${keyDict[event.keyCode].name}를 사용하실수 없습니다.`,
				icon: 'warning'
			});
			event.preventDefault();
			return false;
		}
	});
	
   	$catImage.on('contextmenu', event => {
		swal({
			title: '경고!',
			text: '이미지 저작권 보호를위해 우클릭을 사용할수 없습니다.',
			icon: 'warning'
		});
		event.preventDefault();
		return false;
	});
	$catImage.on('dragstart', event => {
		swal({
			title: '경고!',
			text: '이미지 저작권 를 위해 드래그를 사용할수 없습니다.',
			icon: 'warning'
		});
		event.preventDefault();
		return false;
	});
});
