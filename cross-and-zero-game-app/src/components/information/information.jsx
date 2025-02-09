import PropTypes from 'prop-types';
import styles from './information.module.css'

const InformationLayout = ({currentPlayer, winner}) => {
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

export const Information = ({currentPlayer, winner}) => {
	return <InformationLayout currentPlayer={currentPlayer} winner={winner}/>
}

InformationLayout.propTypes = {
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
}

Information.propTypes = {
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
}
