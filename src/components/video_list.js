import React from 'react';

import VideoListItem from './video_list_item';

class VideoList extends React.Component {
    render() {
        const {videos} = this.props;
        return (
            <ul className="col-sm-4 list-group">
              { videos.map((video) => ( <VideoListItem video={ video } /> )) }
            </ul>
            );
    }
}

export default VideoList;