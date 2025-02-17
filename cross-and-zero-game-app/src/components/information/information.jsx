import PropTypes from 'prop-types';
import { InformationLayout } from './informationLayout';

export const Information = ({currentPlayer, winner}) => {
	return <InformationLayout currentPlayer={currentPlayer} winner={winner}/>
}

Information.propTypes = {
	currentPlayer: PropTypes.string,
	winner: PropTypes.string,
}
