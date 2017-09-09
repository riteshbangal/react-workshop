import React from 'react'
import ReactDOM from 'react-dom'

import { AutoShrinkingText } from "./AutoShrinkingText";

export class Calculator extends React.Component {
	constructor() {
		super();
		this.state = {
			previousValue: null,
			displayValue: '0',
			operator: null,
			waitingForOperand: false
		};
	}

	clearAll() {
		this.setState({
		  previousValue: null,
		  displayValue: '0',
		  operator: null,
		  waitingForOperand: false
		})
	}
	
	clearDisplay() {
		this.setState({
		  displayValue: '0'
		})
	}
	
	clearLastChar() {
		const { displayValue } = this.state	
		this.setState({
		  displayValue: displayValue.substring(0, displayValue.length - 1) || '0'
		})
	}

	toggleSign() {
    const { displayValue } = this.state
    this.setState({
			displayValue: displayValue.charAt(0) === '0' ? displayValue 
					: displayValue.charAt(0) === '-' ? displayValue.substr(1) : '-' + displayValue
    })
	}
	
	inputDigit(digit) {		
		//console.log("Input Digit: " + digit);
		//console.log("waitingForOperand: " + this.state.waitingForOperand);
		const { displayValue, waitingForOperand } = this.state
		if (waitingForOperand) {
			this.setState({
				displayValue: String(digit),
				waitingForOperand: false
			});
		} else {
			this.setState({
					displayValue: displayValue === '0' ? String(digit) : displayValue + digit,
					waitingForOperand: false
			})						
		}
	}

	inputDot() {
		//console.log("waitingForOperand: " + this.state.waitingForOperand);
		const { displayValue, waitingForOperand } = this.state
		if (waitingForOperand) {
			this.setState({
				displayValue: '.',
				waitingForOperand: false
			});
		} else if (!(/\./).test(displayValue)) {
			this.setState({
				displayValue: displayValue + '.',
				waitingForOperand: false
			})
		}
	}
	
	inputPercent() {
    const { displayValue } = this.state
    const value = parseFloat(displayValue)
    if (value === 0)
      return this.setState({
				displayValue: String(value / 100)
			})
	}
	
	performOperation(nextOperator) {
		//console.log("Next Operator: " + nextOperator);
		//console.log("waitingForOperand: " + this.state.waitingForOperand);
		const { displayValue, previousValue, operator } = this.state

		const inputValue = parseFloat(displayValue);
		
		const calculatorOperations = {
			'/': (prevValue, nextValue) => prevValue / nextValue,
			'*': (prevValue, nextValue) => prevValue * nextValue,
			'+': (prevValue, nextValue) => prevValue + nextValue,
			'-': (prevValue, nextValue) => prevValue - nextValue,
			'=': (prevValue, nextValue) => nextValue
		}

		if (previousValue == null) {
			// No previous value, hit a operator key
			this.setState({
				previousValue: inputValue,
			});
		} else if (operator) {
			const currentValue = previousValue || 0;
			const computedValue = calculatorOperations[operator](currentValue, inputValue);
			console.log("prevValue: " + currentValue + ", nextValue: " + inputValue 
					+ ", operator: " + operator + " & computedValue: " + computedValue);

			this.setState({
				displayValue: String(computedValue),
				previousValue: computedValue
			});
		}		

    this.setState({
			operator: nextOperator,
			waitingForOperand: true,
		});
		//console.log("waitingForOperand: " + this.state.waitingForOperand);
	}

	render() {
		const { displayValue } = this.state

		return (
			<div className="calculator">				
				<div className="calculator-display">
					<AutoShrinkingText displayValue={displayValue} />
				</div>
				<div className="calculator-keypad">
					<div className="input-keys">
						<div className="function-keys">
						  <button className="calculator-key key-clear" onClick={() => this.clearAll()}>AC</button>
						  <button className="calculator-key key-sign" onClick={() => this.toggleSign()}>±</button>
						  <button className="calculator-key key-percent" onClick={() => this.inputPercent()}>%</button>
						</div>
						<div className="digit-keys">
							<button className="calculator-key key-0" onClick={() => this.inputDigit(0)}>0</button>
						  <button className="calculator-key key-dot" onClick={() => this.inputDot()}>●</button>
						  <button className="calculator-key key-1" onClick={() => this.inputDigit(1)}>1</button>
						  <button className="calculator-key key-2" onClick={() => this.inputDigit(2)}>2</button>
						  <button className="calculator-key key-3" onClick={() => this.inputDigit(3)}>3</button>
						  <button className="calculator-key key-4" onClick={() => this.inputDigit(4)}>4</button>
						  <button className="calculator-key key-5" onClick={() => this.inputDigit(5)}>5</button>
						  <button className="calculator-key key-6" onClick={() => this.inputDigit(6)}>6</button>
						  <button className="calculator-key key-7" onClick={() => this.inputDigit(7)}>7</button>
						  <button className="calculator-key key-8" onClick={() => this.inputDigit(8)}>8</button>
						  <button className="calculator-key key-9" onClick={() => this.inputDigit(9)}>9</button>
						</div>
					</div>
					<div className="operator-keys">
						<button className="calculator-key key-divide" onClick={() => this.performOperation('/')}>÷</button>
						<button className="calculator-key key-multiply" onClick={() => this.performOperation('*')}>×</button>
						<button className="calculator-key key-subtract" onClick={() => this.performOperation('-')}>−</button>
						<button className="calculator-key key-add" onClick={() => this.performOperation('+')}>+</button>
						<button className="calculator-key key-equals" onClick={() => this.performOperation('=')}>=</button>
					</div>
				</div>
			</div>
		)
	}
}
