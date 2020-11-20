import React, { Component } from 'react';
import Square from './Square'

class SquareBox extends Component {
	render() {
		return (
			<div className="square-box">
				<div className="board-row">
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x} value_y = {3 * this.props.value_y} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x + 1} value_y = {3 * this.props.value_y} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x + 2} value_y = {3 * this.props.value_y} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
				</div>
				<div className="board-row">
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x} value_y = {3 * this.props.value_y + 1} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x + 1} value_y = {3 * this.props.value_y + 1} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x + 2} value_y = {3 * this.props.value_y + 1} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
				</div>
				<div className="board-row">
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x} value_y = {3 * this.props.value_y + 2} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x + 1} value_y = {3 * this.props.value_y + 2} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
					<Square clearMethod = {this.props.clearMethod} value_x = {3 * this.props.value_x + 2} value_y = {3 * this.props.value_y + 2} boardMap = {this.props.boardMap} boardMap_r = {this.props.boardMap_r} boardMapFixed = {this.props.boardMapFixed} />
				</div>
			</div>
		);
	}
}

export default SquareBox;