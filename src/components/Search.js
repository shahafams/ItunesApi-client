import React from 'react'
import Axios from 'axios/index'
import MainView from './MainView'
import SearchHeader from './SearchHeader'
import TopTenView from './TopTenView'

class Search extends React.Component {
	state = {
		topTen: [],
		searchResult: [],
		showSearchResult: true,
		searchWord: ''
	}

	getTopSearches = async () => {
		const result = await Axios({
			method: 'GET',
			url: 'http://localhost:4000/'
		})
		this.setState({ topTen: result.data, showSearchResult: false })
	}

	handleSearch = async (word) => {
		if (word && word !== '') {
			const result = await Axios({
				method: 'GET',
				url: `http://itunes.apple.com/search?term=${word}&country=il&entity=musicVideo,song
			&attribute=songTerm&limit=25`
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
				data: { context: word }
			})
		}
	}

	render() {
		const { topTen, searchResult, showSearchResult, searchWord } = this.state
		const { chooseSong } = this.props
		return (
			<div className="App">
				<SearchHeader
					getTopSearches={this.getTopSearches}
					handleSearch={this.handleSearch}
					searchWord={searchWord}
				/>
				{
					showSearchResult ? (
						<MainView searchResult={searchResult} chooseSong={chooseSong}/>
					) : (
						<TopTenView topTen={topTen} handleSearch={this.handleSearch}/>
					)
				}
			</div>
		)
	}
}

export default Search
