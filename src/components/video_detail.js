import React from 'react';

class VideoDetail extends React.Component {
    render() {
        const {video} = this.props;
        const url = (video) ? `https://www.youtube.com/embed/${video.id.videoId}` : '' ;
        return ( <div>
                   { video ?
                     <div className="video-detail col-md-8">
                       <div className="embed-responsive embed-responsive-16by9">
                         <iframe src={ url }
                                 frameBorder="0"
                                 className="embed-responsive-item"></iframe>
                       </div>
                       <div className="details">
                         <div>
                           { video.snippet.title }
                         </div>
                         <div>
                           { video.snippet.description }
                         </div>
                       </div>
                     </div>
                     :
                     <div>
                       Loading
                     </div> }
                 </div>
            );
    }
}

export default VideoDetail;