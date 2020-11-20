import React, { Component } from 'react';

class Square extends Component {
	constructor(props) {
		super(props);
		if (props.boardMapFixed[props.value_x][props.value_y] === 'F') {
			this.state = {
				value: props.boardMap_r[props.value_x][props.value_y],
				classN: 'square' + props.value_x + props.value_y,
				fixed: 'fixed squareBox' + (Math.floor(props.value_x/3)) + (Math.floor(props.value_y/3)) + ' squareCol' + props.value_x + ' squareRow' + props.value_y,
				active: '',
			};
		} else {
			this.state = {
				value: null,
				classN: 'square' + props.value_x + props.value_y,
				fixed: 'squareBox' + (Math.floor(props.value_x/3)) + (Math.floor(props.value_y/3)) + ' squareCol' + props.value_x + ' squareRow' + props.value_y,
				active: '',
			};
		}
	}

	render() {
		return (
			<button className={'square ' + this.state.classN + ' ' + this.state.fixed + ' ' + this.state.active} onClick={this.setClick} onKeyUp={this.setKey}>{this.state.value}</button>
		);
	}
	
	setClick = () => {
		if (document.getElementsByClassName(this.state.classN)[0].className.indexOf('active') >= 0) {
			document.getElementsByClassName(this.state.classN)[0].className = document.getElementsByClassName(this.state.classN)[0].className.replace(/\bactive\b/g, "");
		} else {
			var $els = document.getElementsByClassName('active ');
			for (let i = 0; i < $els.length;i++) {
				$els[i].className = $els[i].className.replace(/\bactive\b/g, "");
			}
			document.getElementsByClassName(this.state.classN)[0].className += 'active ';
		}
	}
	
	setKey = (e) => {
		if ((0 < e.key && e.key < 10) || e.key === 'Backspace' || e.key === 'Escape') {
			if (document.getElementsByClassName(this.state.classN)[0].className.indexOf('active') >= 0) {
				if (0 < e.key && e.key < 10) {
					this.setState({ value: e.key });
				}
				if (e.key === 'Backspace' || e.key === 'Escape') {
					this.setState({ value: null });
				}
				document.getElementsByClassName(this.state.classN)[0].className = document.getElementsByClassName(this.state.classN)[0].className.replace(/\bactive\b/g, "");
			}
			this.check(e.key);
		}
	}
	
	check(key) {
		let isDuplicate = false;
		if (0 < key && key < 10) {
			let squareRow = document.getElementsByClassName('squareRow' + this.props.value_y);
			for (let i = 0; i < 9; i++) {
				if (key === squareRow[i].innerHTML) {
					isDuplicate = true;
					break;
				}
			}
			if (isDuplicate === false) {
				let squareCol = document.getElementsByClassName('squareCol' + this.props.value_x);
				for (let i = 0; i < 9; i++) {
					if (key === squareCol[i].innerHTML) {
						isDuplicate = true;
						break;
					}
				}
			}
			if (isDuplicate === false) {
				let squareBox = document.getElementsByClassName('squareBox'  + (Math.floor(this.props.value_x/3)) + (Math.floor(this.props.value_y/3)));
				for (let i = 0; i < 9; i++) {
					if (key === squareBox[i].innerHTML) {
						isDuplicate = true;
						break;
					}
				}
			}
		}
		if (isDuplicate) {
			document.getElementsByClassName(this.state.classN)[0].className += 'error ';
		} else {
			document.getElementsByClassName(this.state.classN)[0].className = document.getElementsByClassName(this.state.classN)[0].className.replace(/\berror\b/g, "");

			if (document.getElementsByClassName('error').length === 0) {
				var isCheck = true;
				var square = document.getElementsByClassName('square');
				for (var n in square) {
					if (square[n].innerHTML === "") {
						isCheck = false;
						break;
					}
				}

				if (isCheck) {
					this.props.clearMethod();
				}
			}
		}
	}
}

export default Square;