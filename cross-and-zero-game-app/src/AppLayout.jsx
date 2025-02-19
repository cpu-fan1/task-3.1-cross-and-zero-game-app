import PropTypes from 'prop-types';
import styles from './app.module.css'
import { Field, Information } from './components'

export const AppLayout = ({
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
