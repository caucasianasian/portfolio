//Check off special Li's by clicking
$('.importance').hide()
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");
});

//Click on x to delete Li
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(750, function(){
		$(this).remove();
	});
	event.stopPropagation();
})

var numberCount = 0;
//create new li after enter key is pressed on input tag
$('input[type="text"]').keypress(function(event){
	if(event.which === 13){
				
		
//show importance div
	$('.importance').show();
}
});
	//if click on very important
	$('.importantClick').on('click', function(e){
		var todoText = $('input[type="text"]').val();
		$("ul").prepend('<li class="importantLi"><span class="trash"><i class="fa fa-trash"></i></span> ' + todoText + "</li>");
		$('input[type="text"]').val("");
		$('.importance').fadeOut(500);
	
	});
	//if click on normal
	$('.normalClick').click(function(a){
		var todoText = $('input[type="text"]').val();
		$("ul").append('<li class="normalLi"><span class="trash"><i class="fa fa-trash"></i></span> ' + todoText + "</li>");
		$('input[type="text"]').val("");
		$('.importance').fadeOut(500);

	})

$('.fa-plus').on('click', function(){
	$('input[type="text"]').fadeToggle();
	
})