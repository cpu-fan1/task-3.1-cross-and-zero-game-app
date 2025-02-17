import styles from './field.module.css'
import PropTypes from 'prop-types';

export const FieldLayout = ({field, setFieldCell}) => {
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

FieldLayout.propTypes = {
	field: PropTypes.array,
	setFieldCell: PropTypes.func,
}
