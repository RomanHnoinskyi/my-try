import React, {createRef, useEffect, useRef, useState} from 'react';
import { deletePost } from "../store/feed/feed-action";
import {useDispatch} from "react-redux";
import DeleteIcon  from "@mui/icons-material/Delete";
import EditIcon from '@mui/icons-material/Edit';
import Button from "@mui/material/Button";
import { Divider, List, ListItem, ListItemText, Slide } from "@mui/material";
import Typography from "@mui/material/Typography";
import './post.css'
import EditPostDialog from "./ui/EditPost/EditPostDialog";


export const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" ref={ref} {...props}  />;
});

const PostItem = ({ post: { id, title, body }} ) =>  {
    const dispatch = useDispatch();
    const [open, setOpen] = useState(false);
    const dialogForm = useRef();

    // const openEditDialog = () => {
    //     setOpen(true);
    // };

    const closeDialog = () => {
        setOpen(false);
    };

    useEffect(() => {
        const maybeHandler = (event) => {
            if (dialogForm.current !== undefined) {
                if (!dialogForm.current.contains(event.target)) {
                    setOpen(false);
                }
            }
        };
        document.addEventListener("mousedown", maybeHandler);
        return () => {
            document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return (
            <List
                className='post'>
                <ListItem
                    alignItems="flex-start">
                    <ListItemText
                        primary= { title }
                        secondary={
                            <React.Fragment>
                                <Typography
                                    sx={{ display: 'inline' }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    { body }
                                </Typography>
                            </React.Fragment>
                        }
                    />
                    <div className='post__btns'
                    >
                        <Button
                            className='post__btn'
                            variant="outlined"
                            startIcon={<DeleteIcon />}
                            onClick={() => dispatch(deletePost(id))}>
                            Delete
                        </Button>
                        <Button
                            className='post__btn'
                            variant="outlined"
                            startIcon={<EditIcon />}
                            onClick={() => setOpen((isOpen) => !isOpen)}
                        >
                            Edit
                        </Button>

                        <EditPostDialog
                            ref={dialogForm}
                            post={{id, title, body}}
                            open={open}
                            onClose={closeDialog}
                        />
                    </div>
                </ListItem>
                <Divider style={{width:'100%'}} />
        </List>
    );
    }

export default PostItem;