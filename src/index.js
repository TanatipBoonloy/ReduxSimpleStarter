import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import _ from 'lodash';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selected_video: null
        }

        this.videoSearch('');
    }

    API_KEY = 'AIzaSyDvOfYtwV-WE5fytyxaMJV02Et0P7QV2Ks';

    videoSearch(searchKeyword) {
        YTSearch({
            key: this.API_KEY,
            term: searchKeyword
        }, (videos) => this.setState({
            videos: videos,
            selected_video: videos[0]
        }))
    }

    render() {
        const {videos} = this.state;
        const {selected_video} = this.state;

        return ( <div>
                   <SearchBar onSearchKeywordChange={ _.debounce((keyword) => {
                                                          this.videoSearch(keyword)
                                                      }, 300) } />
                   <VideoDetail video={ selected_video } />
                   <VideoList videos={ videos }
                              onVideoSelet={ (selectedVideo) => this.setState({
                                                 selected_video: selectedVideo
                                             }) } />
                 </div>
            );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));