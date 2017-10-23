documentWidth = window.screen.availWidth;
gridContainerWidth = 0.92 * documentWidth;
cellSideLength = 0.18 * documentWidth;
cellSpace = 0.04 * documentWidth;

function getPosTop(i, j) {
    return cellSpace + i*( cellSpace + cellSideLength );
}

function getPosLeft(i, j) {
    return cellSpace + j*( cellSpace + cellSideLength );
}

function getNumberBackgroundColor(number) {
    switch(number){
		case 0:return '#eee4da';break;
        case 2:return '#ede0c8';break;
        case 4:return '#f59563';break;
        case 8:return '#f67c5f';break;

        case 16:return '#f65e3b';break;
        case 32:return '#edcf72';break;
        case 64:return '#edcc61';break;

        case 128:return '#9c0';break;
        case 256:return '#33b5e5';break;
        case 512:return '#9a0';break;

        case 1024:return '#a6c';break;
        case 2048:return '#93c';break;
    }
    return 'black';
}

function getNumberFontsize(number) {
	switch(number){
        case 2:
        case 4:
        case 8:
        case 16:
        case 32:
        case 64:
			return 55;break;

        case 128:
        case 256:
        case 512:
			return 35;break;

        case 1024:
        case 2048:
			return 25;break;
	}
}

function getNumberColor(number) {
    if(number<=4)
        return '#776e65';
    return 'white';
}

function noSpace(board){
    for( var i = 0 ; i < 4 ; i ++ ){
        for( var j = 0 ; j < 4 ; j ++) {
            if(board[i][j] == 0)
                return false;
        }
    }
    return true;
}

function canMoveLeft(){
    for( var i = 0 ; i < 4 ; i ++ ){
        for( var j = 1 ; j < 4 ; j ++) {
            if(board[i][j] != 0)
                if(board[i][j-1] == 0 || board[i][j-1] == board[i][j])
                return true;
        }
    }

    return false;
}
function canMoveRight(){
    for( var i = 0 ; i < 4 ; i ++ ){
        for( var j = 2 ; j >= 0 ; j -- ) {
            if(board[i][j] != 0)
                if(board[i][j+1] == 0 || board[i][j+1] == board[i][j])
                return true;
        }
    }

    return false;
}
function canMoveUp(){
    for( var j = 0 ; j < 4 ; j ++ ){
        for( var i = 1 ; i < 4 ; i ++ ) {
            if(board[i][j] != 0)
                if(board[i-1][j] == 0 || board[i-1][j] == board[i][j])
                return true;
        }
    }

    return false;
}
function canMoveDown(){
    for( var j = 0 ; j < 4 ; j ++ ){
        for( var i = 2 ; i >= 0 ; i -- ) {
            if(board[i][j] != 0)
                if(board[i+1][j] == 0 || board[i+1][j] == board[i][j])
                return true;
        }
    }

    return false;
}

function noBlockHorizontal(row, col1, col2, board) {
	for( var i = col1 + 1 ; i < col2; i ++ )
		if(board[row][i] != 0)
			return false;
	return true;
}

function noBlockVertical(col, row1, row2, board) {
	for( var i = row1 + 1 ; i < row2; i ++ )
		if(board[i][col] != 0)
			return false;
	return true;
}

function noMove(board){
	if (canMoveLeft() ||
		canMoveRight() ||
		canMoveUp() ||
		canMoveDown()) {
			return false;
	}
	
	return true;
}

function updateScore(score) {
	$('#score').text(score);
}