import React from 'react';
import PostItem from "./PostItem";

const PostList = ({ posts }) => {
    return (
        <div className='postList'>
            {posts.length === 0
                ? <h2>There are are no posts</h2>
                : posts.map((post, index) => {
                    return <PostItem  post={ post } key={ index }/>
                })
            }
        </div>
    );
};

export default PostList;