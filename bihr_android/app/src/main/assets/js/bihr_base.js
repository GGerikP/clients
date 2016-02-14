
function toggle(block_no, block_count) {
	var grid_block = "#grid_block_" + block_no;
	for (var i = 1; i <= block_count; i++) {
		if ($("#grid_block_" + i + " .gridblock_door").css('display') == 'none') {
			$("#grid_block_" + i + " .gridblock_door").slideDown("slow");
//			$("#grid_block_" + i + " .gridblock_content").slideDown("slow");
		} else if (i == block_no) {
			$("#grid_block_" + i + " .gridblock_door").slideUp("slow");
			$("#grid_block_" + i + " .gridblock_content").slideUp("slow");
		}
	}
}

$(document).ready(function(){
	$("#grid_block_1").click(function(){
		toggle(1,6);
	});
	$("#grid_block_2").click(function(){
		toggle(2,6);
	});
	$("#grid_block_3").click(function(){
		toggle(3,6);
	});
	$("#grid_block_4").click(function(){
		toggle(4,6);
	});
	$("#grid_block_5").click(function(){
		toggle(5,6);
	});
	$("#grid_block_6").click(function(){
		toggle(6,6);
	});
	$("#video_overlay").click(function() {
		$("#video_overlay").toggle();
	});
});

