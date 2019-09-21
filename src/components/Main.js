import React, { Fragment } from 'react'
import Search from '../components/Search'
import Song from '../components/Song'
import Axios from 'axios/index'

class Main extends React.Component {
	state = {
		chosenSong: {},
		showChosenSong: true,
		topTen: [],
		searchResult: [],
		showSearchResult: true,
		searchWord: '',
	}

	getTopSearches = async () => {
		const result = await Axios({
			method: 'GET',
			url: 'http://localhost:4000/',
		})
		this.setState({ topTen: result.data, showSearchResult: false })
	}

	handleSearch = async (word) => {
		const { searchWord } = this.state
		if (word && word !== '' && word !== searchWord) {
			const result = await Axios({
				method: 'GET',
				url: `http://itunes.apple.com/search?term=${word}&country=il&entity=musicVideo,song
			&attribute=songTerm&limit=25`,
			})
			const url = result.request.responseURL
			const start = url.indexOf('term=') + 5
			const end = url.indexOf('&country')
			if (decodeURI(url.slice(start, end)) === word) {
				this.setState({ searchResult: result.data.results, showSearchResult: true, searchWord: word })
			}
			await Axios({
				method: 'POST',
				url: 'http://localhost:4000/',
				data: { context: word },
			})
		}
	}

	chooseSong = (songData) => {
		this.setState({ chosenSong: songData, showChosenSong: false })
	}

	backToSearch = () => {
		this.setState({ chosenSong: {}, showChosenSong: true })
	}

	render() {
		const { chosenSong, showChosenSong, topTen, searchResult, showSearchResult, searchWord } = this.state
		return (
			<Fragment>
				{
					showChosenSong ? (
						<Search
							chooseSong={this.chooseSong}
							getTopSearches={this.getTopSearches}
							handleSearch={this.handleSearch}
							topTen={topTen}
							searchResult={searchResult}
							showSearchResult={showSearchResult}
							searchWord={searchWord}
						/>
					) : (
						<Song
							chosenSong={chosenSong}
							backToSearch={this.backToSearch}
						/>
					)
				}
			</Fragment>
		)
	}
}

export default Main
