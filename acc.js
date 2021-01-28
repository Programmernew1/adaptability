$(document).ready(function() {
	$('#accordeon .acc-head').on('click', f_acc);
});

function f_acc(){
	$('#accordeon .acc-body').not(    $(this).next()   ).slideUp(500);
	$(this).next().slideToggle(1000);
}

$(".acc-head").click(function() {
	$(this).find(".span-last").toggleClass("active");
	$(".btn-plus span:last-child").not($(this).find(".btn-plus span:last-child")).removeClass("active");
});	


