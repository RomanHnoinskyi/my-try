import '../Components/post.css'
import { useDispatch, useSelector} from "react-redux";
import React, {useEffect,  useState} from "react";
import {addPost, fetchPosts} from "../store/feed/feed-action";
import axios from "axios";
import {
    CircularProgress,
    Dialog, Slide,
    TextField
} from "@mui/material";
import PostList from "../Components/PostList";
import Button from "@mui/material/Button";
import {Route} from "react-router-dom";
import PropTypes from "prop-types";
import CreateNewPost from "../Components/ui/CreateNewPost/CreateNewPost";


const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props} />;
});


function SendIcon() {
    return null;
}

const Posts = () => {
    const dispatch = useDispatch()
    const posts = useSelector(state => state.feed.posts);
    const [loading, SetLoading] = useState(false);

     useEffect(async () => {
         if(posts.length !== 0) {
             return;
         }
         SetLoading(true);
         const { data } = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5');
         dispatch(fetchPosts( data ));
         SetLoading(false);
     }, []);

    function CreateNewPost(props) {
        const { onClose, selectedValue, open } = props;
        const [post, SetPost] = useState({id: Date.now(), title:'', body:''})
        const dispatch = useDispatch();

        CreateNewPost.propTypes = {
            onClose: PropTypes.func.isRequired,
            open: PropTypes.bool.isRequired,
            selectedValue: PropTypes.string.isRequired,
        };

        const handleSubmit = (e) => {
            e.preventDefault()
            if (post.title.trim() && post.body.trim() ){
                dispatch(addPost(post));
            }
        }

        const handleClose = () => {
            onClose(selectedValue);
        };

        return (
            <Dialog
                TransitionComponent={Transition}
                onClose={handleClose} open={open}>
                <form onSubmit={handleSubmit} className='myInputContent'>
                    <h2>Post</h2>
                    <div className='input'>
                        <TextField
                            style={{ width: "400px", margin: "10px" }}
                            className='post_inputTitle'
                            value={post.title}
                            fullWidth
                            id="standard-basic"
                            label="Заголовок"
                            variant="outlined"
                            onChange={e => SetPost({...post, title: e.target.value})}
                        />
                        <TextField
                            style={{ width: "400px", margin: "10px" }}
                            className='post_inputBody'
                            value={post.body}
                            label="Сам пост"
                            fullWidth
                            variant="outlined"
                            onChange={e => SetPost({...post, body: e.target.value})}
                            id="standard-multiline-static"
                            multiline
                            rows={4}
                        />
                    </div>
                    <Button
                        type="submit"
                        variant="contained"
                        endIcon={<SendIcon />}
                    >
                        Create post
                    </Button>
                </form>
            </Dialog>
        );

    }



    function CreateNewPostDemo() {
        const [open, SetOpen] = React.useState(false);
        const [selectedValue, SetSelectedValue] = React.useState();

        const handleClickOpen = () => {
            SetOpen(true);
        };

        const handleClose = (value) => {
            SetOpen(false);
            SetSelectedValue(value);
        };

        return (
            <div>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={handleClickOpen}>
                    Create New Post
                </Button>
                <CreateNewPost
                    selectedValue={selectedValue}
                    open={open}
                    className='myInputContent'
                    onClose={handleClose}
                />
            </div>
        );
    }



    return (
        <div className="Posts">
            <div>
                {loading
                    ? <CircularProgress  disableShrink />
                    : <PostList posts={posts} />
                }
                <div className='button_post'>
                    <CreateNewPostDemo />
                </div>

            </div>

        </div>
    );
}

export default Posts;
