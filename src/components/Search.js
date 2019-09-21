import React from 'react'
import SongsView from './SongsView'
import SearchHeader from './SearchHeader'
import TopTenView from './TopTenView'

const Search = ({ chooseSong, getTopSearches, handleSearch, topTen, searchResult, showSearchResult, searchWord }) => {
	return (
		<div className="App">
			<SearchHeader
				getTopSearches={getTopSearches}
				handleSearch={handleSearch}
				searchWord={searchWord}
			/>
			{
				showSearchResult ? (
					<SongsView searchResult={searchResult} chooseSong={chooseSong}/>
				) : (
					<TopTenView topTen={topTen} handleSearch={handleSearch}/>
				)
			}
		</div>
	)
}

export default Search
