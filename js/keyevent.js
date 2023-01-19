$(document).ready(function(){
    $(document).bind('keydown', function(e){
        if(e.keyCode == 123) {
            alert('사이트 보호를위해 개발자도구 사용을 금지합니다.');
            e.preventDefault();
            e.returnValue = false;
        }
    });
});