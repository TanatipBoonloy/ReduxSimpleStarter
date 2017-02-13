import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: []
        }

        YTSearch({
            key: this.API_KEY,
            term: 'surfboards'
        }, (videos) => this.setState({
            videos
        }))
    }

    API_KEY = 'AIzaSyDvOfYtwV-WE5fytyxaMJV02Et0P7QV2Ks';

    render() {
        const {videos} = this.state;
        return ( <div>
                   <SearchBar />
                   <VideoList videos={ videos } />
                 </div>
            );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));