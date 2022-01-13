import React, {forwardRef, useRef, useState} from 'react';
import {updatePost} from "../../../store/feed/feed-action";
import {Dialog, TextField} from "@mui/material";
import Button from "@mui/material/Button";
import {useDispatch} from "react-redux";
import {Transition} from "../../PostItem";


function SendIcon() {
    return null;
}

const EditPostDialog = forwardRef((props, ref) => {
    const {post, open, onClose} = props;
    const {id, title, body} = post;

    const [NewTitle, SetNewTitle] = useState("")
    const [NewBody,SetNewBody] = useState("")
    const dispatch = useDispatch();

    const handleEdit = (e) => {
        e.preventDefault();
        const data = {
            id,
            title: NewTitle ? NewTitle: title,
            body: NewBody ? NewBody : body,
        }
        dispatch(updatePost(data));
    }

    const handleTitleChange = (event) => {
        SetNewTitle(event.target.value);
    };
    const handleBodyChange = (event) => {
        SetNewBody(event.target.value)
    };

    return (
        <Dialog
            TransitionComponent={Transition}
            open={open}
        >
            <form ref={ref} onSubmit={handleEdit} className='myInputContent'>
                <h2>Edit Post</h2>
                <div className='input'>
                    <TextField
                        style={{ width: "500px", margin: "10px" }}
                        className='post_inputTitle'
                        defaultValue={title}
                        onChange={ handleTitleChange }
                        fullWidth
                        id="standard-basic"
                        variant="outlined"
                    />
                    <TextField
                        style={{ width: "500px", margin: "10px" }}
                        className='post_inputBody'
                        defaultValue={body}
                        onChange={handleBodyChange}
                        fullWidth
                        variant="outlined"
                        id="standard-multiline-static"
                        multiline
                        rows={4}
                    />
                </div>
                <Button
                    type="submit"
                    variant="contained"
                    endIcon={<SendIcon />}
                    onClick={onClose}
                >
                    Edit
                </Button>
            </form>
        </Dialog>
    );
});

export default EditPostDialog;