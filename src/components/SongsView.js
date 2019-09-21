import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import Moment from 'moment'
import Grid from '@material-ui/core/Grid'
import CircularProgress from '@material-ui/core/CircularProgress'

const styles = theme => ({
	card: {
		width: '450px',
		margin: '25px',
		padding: '15px',
	},
	circleLocation: {
		margin: '150px auto 0 auto',
	},
})

const SongsView = ({ classes, searchResult, chooseSong, loading }) => (
	<div>
		{
			loading ? (
				<CircularProgress className={classes.circleLocation}/>
			) : (
				<Grid container spacing={0}>
					{
						searchResult.map((result, index) => (
								<Grid key={index}>
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
								</Grid>
							),
						)
					}
				</Grid>
			)
		}
	</div>
)

export default withStyles(styles)(SongsView)