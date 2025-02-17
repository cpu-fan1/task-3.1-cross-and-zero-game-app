import PropTypes from 'prop-types';
import styles from './information.module.css'

export const InformationLayout = ({currentPlayer, winner}) => {
	return(
		<>
			<div className={styles.info}>
				<div className={styles.state}>
					<p>{winner}</p>
				</div>
				<div className={styles['current-player']}>
					<h3>Сейчас играет:</h3>
					<p>{currentPlayer}</p>
				</div>
			</div>
		</>
	)
}

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
}
