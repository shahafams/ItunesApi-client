import React from 'react'
import SongsView from './SongsView'
import SearchHeader from './SearchHeader'
import TopTenView from './TopTenView'

const Search = ({
									chooseSong,
									getTopSearches,
									handleSearch,
									topTen,
									searchResult,
									showSearchResult,
									searchWord,
									loading,
								}) => {
	return (
		<div>
			<SearchHeader
				getTopSearches={getTopSearches}
				handleSearch={handleSearch}
				searchWord={searchWord}
			/>
			{
				showSearchResult ? (
					<SongsView searchResult={searchResult} chooseSong={chooseSong} loading={loading}/>
				) : (
					<TopTenView topTen={topTen} handleSearch={handleSearch}/>
				)
			}
		</div>
	)
}

export default Search
