import { useState, useEffect } from 'react';
import { Button, Box, Modal } from '@mui/material';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import '../css/Messages.css';

function Messages() {
    const [msgs, setMsgs] = useState([]);
    const [open, setOpen] = useState(false);
    const [obj, setObj] = useState({
        name: '',
        message: ''
    });
    const [pass, setPass] = useState("");
    const [isAdmin, setAdmin] = useState(false);

    useEffect(() => {
        fetchMessages();
    }, [])

    async function fetchMessages() {
        axios.get(`${process.env.REACT_APP_SERVER}/messages`).then((messages) => {
            setMsgs(messages.data);
        })
    }

    const changeOpen = () => {
        setOpen(!open);
    }

    const handleChange = (e) => {
        if (e.target.id === "Name") {
            setObj({
                name: e.target.value,
                message: obj.message
            });
        } else {
            setObj({
                name: obj.name,
                message: e.target.value
            });
        }
    }

    const sendInfo = async () => {
        if (obj.name === 'KA1') {
            // open modal
            changeOpen();
        } else {
            await axios.post(`${process.env.REACT_APP_SERVER}/create-message`, obj);
            fetchMessages();
        }
    };

    const onSubmit = async () => {
        let res = await axios.post(`${process.env.REACT_APP_SERVER}/test-pass`, { pass });
        setAdmin(res.data);
    }

    const passChange = (e) => {
        setPass(e.target.value);
    }

    const deleteThis = async (id) => {
        // Send delete req to server with specific message index
        await axios.delete(`${process.env.REACT_APP_SERVER}/delete-this?id=${id}`);
        fetchMessages();
    }

    return (
        <div id="messages">
            <Box
                id="messages"
                component="form"
                sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                }}
                noValidate
                autoComplete="off"
            >
                <TextField id="Name" label="Name" variant="standard" onChange={handleChange} />
                <TextField id="Message" label="Message" variant="standard" onChange={handleChange} />
                <Button variant="outlined" onClick={sendInfo}>Submit</Button>
            </Box>
            <Modal
                open={open}
                onClose={changeOpen}
            >
                <div className="adminAuthenticate">
                    <TextField onChange={passChange} label="Confirm Password" />
                    <Button onClick={onSubmit} variant="outlined">Submit</Button>
                </div>
            </Modal>
            {msgs.length ? msgs.map((message, idx) => (
                <div className="individual-message" key={idx}>
                    <p className="message-name">{message.name}:</p>
                    <p className="message-message">{message.message}</p>
                    {isAdmin ? (
                        <>
                            <Button onClick={() => deleteThis(message._id)}>Delete</Button>
                        </>
                    ) : null}
                </div>
            )) : null}
        </div>
    );
}

export default Messages;
