Array.prototype.getRandom = function(){
	return this[Math.floor(Math.random() * this.length)];
};
const rickrolls = ["https://www.youtube.com/watch?v=0MnfI7IvQ0U", "https://www.youtube.com/watch?v=JCaP11BfiGw"];


jQuery(document).ready(()=> {
	$("#cataas-img").click(() => location.href = rickrolls.getRandom());
});
