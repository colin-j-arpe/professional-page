$(document).ready(function () {
	$(".section-title").each(function(i)	{
		$(this).on("click", function()	{
			if (i > 0) {
				$(".open").addClass("closed").removeClass("open");
				$(".section-title-text").eq(i).addClass("open");
			}
			moveGrid(i);
		});
	});

	function moveGrid (i)	{
		switch(i)	{
			case 0:
				break;
			case 1:
				fractionString = "1fr 8fr 1fr 1fr 1fr";
				break;
			case 2:
				fractionString = "1fr 1fr 8fr 1fr 1fr";
				break;
			case 3:
				fractionString = "1fr 1fr 1fr 8fr 1fr";
				break;
			case 4:
				fractionString = "1fr 1fr 1fr 1fr 8fr"
		}
		$("#grid-wrapper").css({"grid-template-columns":fractionString});
	}

});		//	end of document ready function
