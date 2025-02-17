import PropTypes from 'prop-types';
import { FieldLayout } from './fieldLayout'
import { WIN_PATTERNS } from '../../constants';

export const Field = ({field, setField, currentPlayer, setCurrentPlayer, setWinner, isGameEnded, setGameEnded, setDraw}) => {


	function setFieldCell (index) {

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
