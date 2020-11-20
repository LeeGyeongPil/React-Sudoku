import React, { Component } from 'react';
import SquareBox from './SquareBox'

class Board extends Component {
	constructor(props) {
		super(props)
		this.boardMap = this.boardMake();
		this.boardMapFixed = this.fixedBoard(25);
	}

	fixedBoard(count) {
		var newBoardMap = JSON.parse(JSON.stringify(this.boardMap[0]));
		for (var n = 1;n <= count;n++) {
			var newX = Math.floor(Math.random() * 9);
			var newY = Math.floor(Math.random() * 9);
			newBoardMap[newX][newY] = 'F';
		}
		return newBoardMap;
	}

	boardMake() {
		var common = Array(9).fill(Array(9).fill(0));
		let boardMap_x = JSON.parse(JSON.stringify(common));
		let boardMap_y = JSON.parse(JSON.stringify(common));
		var resetCount = 0;
		for (var x = 0;x < 9;x++) {
			for (var y = 0;y < 9;y++) {
				var xx = 3 * Math.floor(x/3);
				var yy = 3 * Math.floor(y/3);

				var rect = [boardMap_x[xx][yy],boardMap_x[xx][yy+1],boardMap_x[xx][yy+2],boardMap_x[xx+1][yy],boardMap_x[xx+1][yy+1],boardMap_x[xx+1][yy+2],boardMap_x[xx+2][yy],boardMap_x[xx+2][yy+1],boardMap_x[xx+2][yy+2]];
				var rowchk = boardMap_x[x];
				var colchk = boardMap_y[y];
				var useNum = array_diff([1,2,3,4,5,6,7,8,9],rect.concat(rowchk).concat(colchk).filter(function(x, i, self) { return x > 0 && self.indexOf(x) === i; }));
				var pick = useNum[Math.floor(Math.random()*useNum.length)];
				if (pick > 0) {
					boardMap_x[x][y] = pick;
					boardMap_y[y][x] = pick;
				} else {
					y = -1;
					boardMap_x[x] = Array(9).fill(0);
					for (var yyy = 0;yyy < 9;yyy++) {
						boardMap_y[yyy][x] = 0;
					}
					if (resetCount > 30) {
						x--;
						boardMap_x[x] = Array(9).fill(0);
						for (yyy = 0;yyy < 9;yyy++) {
							boardMap_y[yyy][x] = 0;
						}
						resetCount = 0;
					} else {
						resetCount++;
					}
				}
			}
		}
		return [ boardMap_x , boardMap_y ];
	}

	render() {
		return (
			<div className="game-board-wrap">
				<div className="game-board">
					<div>
						<div className="board-row">
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {0} value_y = {0} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {1} value_y = {0} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {2} value_y = {0} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
						</div>
						<div className="board-row">
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {0} value_y = {1} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {1} value_y = {1} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {2} value_y = {1} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
						</div>
						<div className="board-row">
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {0} value_y = {2} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {1} value_y = {2} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
							<SquareBox clearMethod = {this.props.clearMethod} value_x = {2} value_y = {2} boardMap = {this.boardMap[0]} boardMap_r = {this.boardMap[1]} boardMapFixed = {this.boardMapFixed} />
						</div>
					</div>
				</div>
			</div>
		);
	}
}

function array_diff(a, b) { return a.filter(function(x) { return b.indexOf(x) === -1; }); }

export default Board;