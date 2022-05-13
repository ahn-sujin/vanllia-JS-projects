$(document).ready(function(){

	var wid = $('.list-box .list').outerWidth();
	var num = $('.list-box .list').length;
	var totalWid = wid*num;
	$('.list-box').width(totalWid); //()엔에 값이 없으면 선택자의 넓이 구해주고, 값이 있으면 ()안에 값으로 변경
	var mleft = 0;

	var timer = setInterval(move, 20);

	$('.container').on('mouseenter',function(){
		clearInterval(timer);//
	});
	 
	 $('.container').on('mouseleave',function(){
		timer = setInterval(move, 20);
	 });


	function move(){
		mleft -= 2;
		if (mleft < -wid) {
			$('.list-box .list').first().appendTo('.list-box');
			mleft = 0;
		}
		$('.list-box').css({'left' : mleft});
	}

	
});