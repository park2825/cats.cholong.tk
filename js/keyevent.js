$(document).ready(function(){
    $(document).bind('keydown', function(e){
        if(e.keyCode == 123) {
            alert('사이트 보호를위해 개발자도구 사용을 금지합니다.');
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

document.ondrage = drage;

function drage(drage){
    if(drage){
        alert('저작권 보호를위해 이미지를 드래그할수 없습니다.');
        return false;
    }
}
