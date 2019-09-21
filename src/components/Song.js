import React, { Fragment } from 'react'
import Moment from 'moment'
import { withStyles } from '@material-ui/core/styles/index'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import ArrowBack from '@material-ui/icons/ArrowBack'
import Iframe from 'react-iframe'
import Tooltip from '@material-ui/core/Tooltip'

const styles = theme => ({
	buttonLocation: {
		display: 'flex',
		marginLeft: '60px',
		marginTop: '20px',
	},
	dataLocation: {
		width: '600px',
		margin: 'auto',
	},
	songHeader: {
		display: 'flex',
	},
	titleLocation: {
		margin: 'auto',
	},
	data: {
		marginTop: '20px',
	},
	dataRow: {
		padding: '5px',
	},
})

class Song extends React.Component {
	render() {
		const { classes, chosenSong, backToSearch } = this.props

		return (
			<Fragment>
				<div className={classes.buttonLocation}>
					<Tooltip title="Back">
						<IconButton onClick={backToSearch}>
							<ArrowBack/>
						</IconButton>
					</Tooltip>
				</div>
				<div className={classes.dataLocation}>
					<div className={classes.songHeader}>
						<Avatar src={chosenSong.artworkUrl60}/>
						<div className={classes.titleLocation}>song name: {chosenSong.trackName}</div>
					</div>
					<div className={classes.data}>
						<div className={classes.dataRow}>Genre Name: {chosenSong.primaryGenreName}</div>
						<div className={classes.dataRow}>Artist Name: {chosenSong.artistName}</div>
						<div className={classes.dataRow}>Collection Name: {chosenSong.collectionName}</div>
						<div className={classes.dataRow}>Time: {Moment(chosenSong.trackTimeMillis).format('HH:mm')}</div>
						<div className={classes.dataRow}>Release Date: {Moment(chosenSong.releaseDate).format('YYYY-MM-DD')}</div>
					</div>
					<Iframe url={chosenSong.previewUrl}
									width="450px"
									height="250px"
									display="initial"
									position="relative"/>
				</div>
			</Fragment>

		)
	}
}

export default withStyles(styles)(Song)