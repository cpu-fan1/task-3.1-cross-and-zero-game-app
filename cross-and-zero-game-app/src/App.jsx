import { useState } from 'react'
import PropTypes from 'prop-types';
import styles from './app.module.css'
import { Field, Information } from './components'


const AppLayout = ({
	field,
	setField,
	currentPlayer,
	setCurrentPlayer,
	resetButtonClick,
	winner,
	setWinner,
	isGameEnded,
	setGameEnded,
	setDraw
	}) => {
	return (
		<>
			<div className={styles.app}>
				<h1>Крестики-Нолики</h1>
				<Information currentPlayer={currentPlayer} winner={winner}/>
				<Field
				field={field}
				setField={setField}
				currentPlayer={currentPlayer}
				setCurrentPlayer={setCurrentPlayer}
				setWinner={setWinner}
				setGameEnded={setGameEnded}
				isGameEnded={isGameEnded}
				setDraw={setDraw}
				/>
				<button className={styles['reset-button']} onClick={resetButtonClick}>Начать заново</button>
			</div>

		</>
	  )
}

function App() {
    const [currentPlayer, setCurrentPlayer] = useState('X');
	const [field, setField] = useState(['', '', '', '', '', '', '', '', '', ]);
	const [isGameEnded, setGameEnded] = useState(false);
	const [isDraw, setDraw] = useState(false);
	const [winner, setWinner] = useState('');


	function resetButtonClick () {
		setCurrentPlayer('X');
		setField(['', '', '', '', '', '', '', '', '', ]);
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

AppLayout.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	resetButtonClick: PropTypes.func,
	winner: PropTypes.string,
	setWinner: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setGameEnded: PropTypes.func,
	setDraw: PropTypes.func,
}
