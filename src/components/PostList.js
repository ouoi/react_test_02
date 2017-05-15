import React from 'react';

const PostList = (props) => {
	return (
		<div>Post ID: {props.match.params.postId}</div>
	);
}

export default PostList;