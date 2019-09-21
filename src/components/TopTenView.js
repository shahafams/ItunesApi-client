import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

const styles = theme => ({
	listLocation: {
		display: 'flex',
		width: '250px',
		margin: 'auto',
	},
})

const TopTenView = ({ classes, topTen, handleSearch }) => {
	const clickTopTen = (word) => {
		handleSearch(word)
	}
	return (
		<div>
			{
				topTen.map((word, index) => (
						<ListItem className={classes.listLocation} button onClick={() => clickTopTen(word.context)} key={index}>
							<ListItemText primary={word.context}/>
						</ListItem>
					),
				)
			}
		</div>
	)
}

export default withStyles(styles)(TopTenView)