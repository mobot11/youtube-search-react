import React from 'react'
import VideoListItem from './video_list_item'

//rendering an array assumes its a list, adds an automatic key prop to keep track of
//a number in the list
const VideoList = (props) => {
	const videoItems = props.videos.map((video) => {
		return (
			<VideoListItem
			onVideoSelect={props.onVideoSelect}
			video={video} key={video.etag} />
		)
	})
	return(
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	)
}

export default VideoList