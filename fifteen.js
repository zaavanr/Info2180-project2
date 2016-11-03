window.onload= function(){
	var square=[];
	var bTop=300;
	var bLeft=300;
	square = $("#puzzlearea div");
	gridSetUP();
	$("#shufflebutton").click(shuffle);

//Sets up the divs into a grid format & executes the puzzle events
	function gridSetUP(){	
		var j = 0;
		var t = 3; 
		square.addClass("puzzlepiece");
		for (var i = 0; i < square.length; i++)
		 {
		 	for(var k=0; k<=t;k++){
				square[i].style.top= 100 * j + "px";
				square[i].style.left = 100 * k  + "px";
				square[i].style.backgroundPosition = -k * 100 + "px " + j * -100 + "px";
				square[i].addEventListener('mouseenter',moveCheck);	
				square[i].addEventListener('click',moveSquare);
				square[i].addEventListener('mouseleave',nonMoveCheck);
				i++;
			}
			j++;
			if (j > 2) {
				t = 2;
			}
			i--;
		}
	}

//Checks to see if a square meets the requirements to move
	function moveCheck(top, left){
		var top= this.style.top;
		var left= this.style.left;
		
		if (Math.abs(bTop - parseInt(top)) == 100) {
			if (Math.abs(bLeft - parseInt(left)) == 0) {
				$(this).addClass("movablepiece");
				return true;
			}
		} else if (Math.abs(bLeft - parseInt(left)) == 100) {
			if (Math.abs(bTop - parseInt(top)) == 0) {
				$(this).addClass("movablepiece");
				return true;
			}
		}
		return false; 
	}

//Checks if the square is not moveable and removes the move properties
	function nonMoveCheck(event){
		if (Math.abs(bTop - parseInt(this.style.top)) == 100) {
			if (Math.abs(bLeft - parseInt(this.style.left)) == 0) {
				$(this).removeClass("movablepiece"); 
			}
		} 
		else if (Math.abs(bLeft - parseInt(this.style.left)) == 100) {
			if (Math.abs(bTop - parseInt(this.style.top)) == 0) {
				$(this).removeClass("movablepiece");
			}
		}
	}

	//Moves the square pieces
	function moveSquare(event){
		if($(this).hasClass('movablepiece')){
		var tTop=parseInt(this.style.top);
		var lLeft=parseInt(this.style.left);
		var tHolder=bTop;
		var lHolder=bLeft;
		bTop=tTop;
		bLeft=lLeft;
		this.style.top = tHolder +'px';
		this.style.left = lHolder +'px';
		}	

	}

	//Shuffles all the squares around randomly to be solved
	function shuffle(){
		square = $("#puzzlearea div");
		var zavi = Math.floor(Math.random() * 87);
		for (var madandbad = 0; madandbad < zavi; madandbad++){
					for(var i=0;i < 15;i++){
					var tTop=parseInt(square[i].style.top);
					var lLeft=parseInt(square[i].style.left);
					var tHolder=bTop;
					var lHolder=bLeft;
					bTop=tTop;
					bLeft=lLeft;
					square[i].style.top = tHolder +'px';
					square[i].style.left = lHolder +'px';		
			}
		}
	}

	function winnings(){

		if(gridSetUP())
		{
			alert("You win!");
			$("body").style.backgroundColor= "green";
		}
	}
}