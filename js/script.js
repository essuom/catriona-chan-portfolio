$(function(){
	//toggle accordion
	$('#accordions>ul>h3').on('click',function(){
		$(this).next().slideToggle();
		//change arrow
		if($(this).find('i').hasClass('fa-angle-down'))
			{$(this).find('i')
				.removeClass('fa-angle-down')
				.addClass('fa-angle-up');}
		else{$(this).find('i')
				.removeClass('fa-angle-up')
				.addClass('fa-angle-down');
			}
	});

	// $('#accordions>ul>li').on('click',function(){
	// 	$(this).slideToggle();

	// 	if($(this).prev().find('i').hasClass('fa-angle-down'))
	// 		{$(this).prev().find('i')
	// 			.removeClass('fa-angle-down')
	// 			.addClass('fa-angle-up');}
	// 	else{$(this).prev().find('i')
	// 			.removeClass('fa-angle-up')
	// 			.addClass('fa-angle-down');
	// 		}
	// });
		
});