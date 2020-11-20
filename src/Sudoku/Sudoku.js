import React, { Component } from 'react';
import Board from './Board'

class Sudoku extends Component {
	render() {
		return (
			<div className="game">
				<Board clearMethod={this.clear} />
			</div>
		);
	}
	
	clear() {
		alert('Clear');
	}
}

export default Sudoku;