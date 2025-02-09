import PropTypes from 'prop-types';
import styles from './field.module.css'

const FieldLayout = ({field, setFieldCell}) => {
	return (
		<>
			<div className={styles['game-field']}>
				{field.map((elem, i) => (
					<button key={i} onClick={() => setFieldCell(i)}>{elem}</button>
				))}
			</div>
		</>
	)
}

export const Field = ({field, setField, currentPlayer, setCurrentPlayer, setWinner, isGameEnded, setGameEnded, setDraw}) => {


	function setFieldCell (index) {
		const WIN_PATTERNS = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8],
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6]
		  ];

		if (field[index] || isGameEnded)
			return;

		const newField = field.map((cell,i) => {
			if (i === index) {
				return currentPlayer;
			}
			return cell;
		})
		setField(newField);

		setCurrentPlayer(currentPlayer === 'X' ? '0' : 'X')

		const winnerFound = WIN_PATTERNS.some((pattern) => {
			if (!newField[pattern[0]]) return false;
			const isWinner = pattern.every((index) => newField[index] === newField[pattern[0]]);
			if (isWinner) {
				setGameEnded(true);
				setWinner(`Победитель ${newField[pattern[0]]}`);
			}
		});

		if (!winnerFound && newField.every(cell => cell)) {
			setDraw(true);
			setGameEnded(true);
			setWinner('Ничья!')
		}
	}


	return <FieldLayout field={field}  setFieldCell={setFieldCell}/>
}

FieldLayout.propTypes = {
	field: PropTypes.array,
	setFieldCell: PropTypes.func,
}

Field.propTypes = {
	field: PropTypes.array,
	setField: PropTypes.func,
	currentPlayer: PropTypes.string,
	setCurrentPlayer: PropTypes.func,
	resetButtonClick: PropTypes.func,
	setWinner: PropTypes.func,
	isGameEnded: PropTypes.bool,
	setGameEnded: PropTypes.func,
	setDraw: PropTypes.func,
}
