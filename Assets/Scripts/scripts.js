$(document).ready(function () {
	$(".section-title").each(function(i)	{
		$(this).on("click", function()	{
			if (i > 0) {
				$(".open").addClass("closed").removeClass("open");
				$(".section-title-text").eq(i).addClass("open");
			}
			moveGrid(i);
			showContent(i);
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
				fractionString = "1fr 2fr 7fr 1fr 1fr";
				break;
			case 3:
				fractionString = "1fr 2fr 1fr 7fr 1fr";
				break;
			case 4:
				fractionString = "1fr 2fr 1fr 1fr 7fr"
		}
		$("#grid-wrapper").css({"grid-template-columns":fractionString});
	}

	function showContent(i)	{
		sectionContents = $(".content");
console.log(sectionContents.length);
console.log(sectionContents[0]);
		for (var j = 0; j < sectionContents.length; j++) {
			$(".content").eq(j).css({"display":"none"});
		}
		if (i > 1) {
			$(".content").eq(i-2).css({"display":"block"});
		}
	}

});		//	end of document ready function
