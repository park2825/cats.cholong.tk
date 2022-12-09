Array.prototype.getRandom = function(){
	return this[Math.floor(Math.random() * this.length)];
};
const randlist = ["https://www.youtube.com/watch?v=JCaP11BfiGw", "https://www.youtube.com/watch?v=JCaP11BfiGw"];


jQuery(document).ready(()=> {
	$("#cataas-img").click(() => location.href = arr.getRandom());
});
