import React from 'react';

class VideoListItem extends React.Component {
    render() {
        const {video} = this.props;
        const {onVideoSelet} = this.props;
        return (
            <li className="list-group-item"
                onClick={ () => onVideoSelet(video) }>
              <div className="video-list media">
                <div className="media-left">
                  <img className="media-object"
                       src={ video.snippet.thumbnails.default.url } />
                </div>
                <div className="media-body">
                  <div className="media-heading">
                    { video.snippet.title }
                  </div>
                </div>
              </div>
            </li>
            );
    }
}

export default VideoListItem;