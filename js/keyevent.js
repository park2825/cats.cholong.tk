$(document).ready(function(){
    $(document).bind('keydown', function(e){
        if(e.keyCode == 123) {
            alert('사이트 보호를위해 개발자도구 사용을 금지합니다.');
            e.preventDefault();
            e.returnValue = false;
        }
        $(document).bind('keydown', function(e){
            if(e.keyCode == 17) {
                alert('개발자 도구 사용방지를 위해 ctrl키를 사용할수 없습니다.');
                e.preventDefault();
                e.returnValue = false;
            }
    });
});



document.onmousedown=disableclick;

function disableclick(e){
    if(e.button==2) {
        alert('저작권 보호를위해 우클릭은 사용하실수 없습니다.');
        return false;
    }
}

document.ondragstart = 
    function(){alert('저작권 방지를위해 드래그는 사용하실수 없습니다.'); return false;}
