Array.prototype.getRandom = function(){
	return this[Math.floor(Math.random() * this.length)];
};
const rickrolls = ["https://www.youtube.com/watch?v=rbz5siyFS9s", "https://www.youtube.com/watch?v=bwQ_jw4lZ3g"];


jQuery(document).ready(()=> {
	$("#cataas-img").click(() => location.href = rickrolls.getRandom());
});
