import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Moment from 'moment'

const styles = theme => ({
	card: {
		width: '450px',
		margin: '25px',
		padding: '15px'
	},
})

const MainView = ({ classes, searchResult, chooseSong }) => (
	<div>
		{
			searchResult.map((result, index) => (
					<Card className={classes.card} key={`card-${index}`} onClick={() => chooseSong(result)}>
						<CardHeader
							avatar={
								<Avatar src={result.artworkUrl60}/>
							}
							title={result.trackName}/>
						<Divider/>
						<CardContent>
							<div>artist name: {result.artistName}</div>
							<div>time: {Moment(result.trackTimeMillis).format('HH:mm')}</div>
						</CardContent>
					</Card>
				)
			)
		}
	</div>
)

export default withStyles(styles)(MainView)