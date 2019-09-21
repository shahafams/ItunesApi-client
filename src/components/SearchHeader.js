import React, { Fragment } from 'react'
import { withStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import IconButton from '@material-ui/core/IconButton'
import Search from '@material-ui/icons/Search'
import Tooltip from '@material-ui/core/Tooltip'
import Button from '@material-ui/core//Button'

const styles = theme => ({
	location: {
		marginRight: ' 15px',
	},
})

class SearchHeader extends React.Component {
	state = {
		songName: '',
	}

	componentDidUpdate(prevProps) {
		if (this.props.searchWord !== prevProps.searchWord) {
			this.setState({ songName: this.props.searchWord })
		}
	}

	handleSearchClick = () => {
		const { handleSearch } = this.props
		const { songName } = this.state
		handleSearch(songName)
	}

	onChangeInput = () => (e) => {
		this.setState({ songName: e.target.value })
	}

	getTopTen = () => {
		const { getTopSearches } = this.props
		getTopSearches()
	}

	render() {
		const { classes } = this.props
		const { songName } = this.state

		return (
			<Fragment>
				<TextField
					label="name"
					placeholder="song name"
					className={classes.location}
					variant="outlined"
					value={songName}
					onChange={this.onChangeInput()}
				/>
				<Tooltip title="Search">
					<IconButton
						onClick={this.handleSearchClick}
						className={classes.location}
					><Search/></IconButton>
				</Tooltip>
				<Button
					variant="contained"
					color="primary"
					onClick={this.getTopTen}
				>Top 10</Button>
			</Fragment>
		)
	}
}

export default withStyles(styles)(SearchHeader)