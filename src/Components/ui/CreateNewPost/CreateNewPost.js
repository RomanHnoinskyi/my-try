// import React, {useRef, useState} from 'react';
// import './CreateNewPost.css'
// import {Container, Dialog, TextField} from "@mui/material";
// import Button from "@mui/material/Button";
// import {useDispatch} from "react-redux";
// import {addPost} from "../../../store/feed/feed-action";
// import { useHistory } from 'react-router-dom'
// import PropTypes from "prop-types";
//
// function SendIcon() {
//     return null;
// }
//
// const CreateNewPost = () => {
//     const [post, setPost] = useState({id: Date.now(), title:'', body:''})
//     const dispatch = useDispatch();
//     const history = useHistory();
//
//     CreateNewPost.propTypes = {
//                 onClose: PropTypes.func.isRequired,
//                 open: PropTypes.bool.isRequired,
//                 selectedValue: PropTypes.string.isRequired,
//             };
//
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         if (post.title.trim() && post.body.trim() ){
//             dispatch(addPost(post));
//             history.push('/posts');
//         }
//     }
//     const handleClose = () => {
//                 onClose(selectedValue);
//             };
//
//     return (
//         <Dialog
//                         TransitionComponent={Transition}
//                         onClose={handleClose} open={open}>
//                 <form onSubmit={handleSubmit} className='myInputContent'>
//                     <h2>Post</h2>
//                     <div className='input'>
//                         <TextField
//                             style={{ width: "400px", margin: "10px" }}
//                             className='post_inputTitle'
//                             value={post.title}
//                             fullWidth
//                             id="standard-basic"
//                             label="Заголовок"
//                             variant="outlined"
//                             onChange={e => setPost({...post, title: e.target.value})}
//                         />
//                         <TextField
//                             style={{ width: "400px", margin: "10px" }}
//                             className='post_inputBody'
//                             value={post.body}
//                             label="Сам пост"
//                             fullWidth
//                             variant="outlined"
//                             onChange={e => setPost({...post, body: e.target.value})}
//                             id="standard-multiline-static"
//                             multiline
//                             rows={4}
//                         />
//                     </div>
//                     <Button
//                         type="submit"
//                         variant="contained"
//                         endIcon={<SendIcon />}
//                     >
//                         Create post
//                     </Button>
//                 </form>
//         </Dialog>
//     );
// };
//
// export default CreateNewPost;