import { useState } from 'react'
import { AppLayout } from './AppLayout'
import { emptyField } from './constants';

function App() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
	const [field, setField] = useState(emptyField);
	const [isGameEnded, setGameEnded] = useState(false);
	const [isDraw, setDraw] = useState(false);
	const [winner, setWinner] = useState('');

	function resetButtonClick () {
		setCurrentPlayer('X');
		setField(emptyField);
		setGameEnded(false);
		setDraw(false);
		setWinner('')
	}

	return <AppLayout
	field={field}
	setField={setField}
	currentPlayer={currentPlayer}
	setCurrentPlayer={setCurrentPlayer}
	resetButtonClick={resetButtonClick}
	winner={winner}
	setWinner={setWinner}
	isGameEnded={isGameEnded}
	setGameEnded={setGameEnded}
	setDraw={setDraw}
	/>
}

export default App
