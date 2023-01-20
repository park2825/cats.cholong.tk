$(document).ready(function(){
    $(document).on('keydown', function(e){
        if(e.keyCode == 123) {
            swal({
                title: '경고!',
                text: '사이트 보호를 위해 개발자도구를 사용하실수 없습니다.',
                icon: 'warning'
            });
            e.preventDefault();
			return false;
        }
        
        if(e.keyCode == 17) {
           swal({
                title: '경고!',
                text: '사이트 보호를 위해 ctrl키를 사용하실수 없습니다.',
                icon: 'warning'
           });
            e.preventDefault();
			return false;
        }
        
        if(e.keyCode == 16) {
            swal({
                title: '경고!',
                text: '사이트 보호를 위해 shift키를 사용하실수 없습니다.',
                icon: 'warning'
            });
            e.preventDefault();
			return false;
        }
        
        if(e.keyCode == 73) {
            swal({
                title: '경고!',
                text: '사이트 보호를 위해 i키를 사용하실수 없습니다.',
                icon: 'warning'
            });
            e.preventDefault();
			return false;
        }
    });
   	$(document).on('contextmenu', event => {
		event.preventDefault();
        swal({
                title: '경고!',
                text: '이미지 저작권 보호를위해 우클릭을 사용할수 없습니다.',
                icon: 'warning'
        });
		return false;
	});
	$(document).on('dragstart', event => {
		event.preventDefault();
		swal({
			title: '경고!',
			text: '이미지 저작권 를 위해 드래그를 사용할수 없습니다.',
			icon: 'warning'
		});
		return false;
	});
});
