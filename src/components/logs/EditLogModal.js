import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js'

const EditLogModal = () => {
    const [message, setMessage] = useState('');
    const [attention, setAttention] = useState(false);
    const [tech, setTech] = useState('');

    const onSubmit = () => {
        if(message === '' || tech === '') {
            M.toast({ html: 'Please, enter a Message or Tech', classes: 'rounded'});
        } else {
            console.log(message, attention, tech);
        }

        // Clear form
        setMessage('');
        setAttention(false);
        setTech('');
    }

    return (
        <div id="edit-log-modal" className="modal" style={modalStyle}>
            <div className="modal-content">
                <h4>Enter System Log</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="message"
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                        />
                        <label htmlFor="message" className="active">
                            Log message
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="input-field">
                        <select
                            name="tech"
                            value={tech}
                            className="browser-default"
                            onChange={e => setTech(e.target.value)}
                        >
                            <option value="" disabled>Select Technician</option>
                            <option value="John Doe">John Doe</option>
                            <option value="Sam Smith">Sam Smith</option>
                            <option value="Sara Wilson">Sara Wilson</option>
                        </select>
                    </div>
                </div>
                <div className="row input-field">
                    <label>
                        <input
                            type="checkbox"
                            className="filled-in"
                            checked={attention}
                            value={attention}
                            onChange={e => setAttention(!attention)}
                        />
                        <span>Needs Attention</span>
                    </label>
                </div>
            </div>
            <div className="modal-footer" style={{ textAlign: 'left' }}>
                <a
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect waves-light btn blue"
                    style={{ marginLeft: '1rem', marginTop: '3rem' }}
                >
                    <i className="material-icons left">add</i>Edit
                </a>
            </div>
        </div>
    )
}

const modalStyle = {
    width: '75%',
    height: '75%'
}

export default EditLogModal;