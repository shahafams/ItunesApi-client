import React from 'react'
import './App.css'
import Search from './components/Search'
import Song from './components/Song'

class App extends React.Component {
	state = {
		chosenSong: {},
		showChosenSong: true
	}

	chooseSong = (songData) => {
		this.setState({ chosenSong: songData, showChosenSong: false })
	}

	backToSearch = () => {
		this.setState({ chosenSong: {}, showChosenSong: true })
	}

	render() {
		const { chosenSong, showChosenSong } = this.state
		return (
			<div className="App">
				{
					showChosenSong ? (
						<Search
							chooseSong={this.chooseSong}/>
					) : (
						<Song
							chosenSong={chosenSong}
							backToSearch={this.backToSearch}
						/>
					)
				}
			</div>
		)
	}
}

export default App
