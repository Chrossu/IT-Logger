import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addTech } from '../../actions/techActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js'

const AddTechModal = ({ addTech }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const onSubmit = () => {
        if (firstName === '' || lastName === '') {
            M.toast({ html: 'Please, enter the First and Last name', classes: 'rounded' });
        } else {
            const newTech = {
                firstName,
                lastName
            };

            addTech(newTech);
            M.toast({ html: `${firstName} ${lastName} was added as a new Tech`, classes: 'rounded'});
        }

        // Clear form
        setFirstName('');
        setLastName('');
    }

    return (
        <div id="add-tech-modal" className="modal" style={{ height: '36%' }}>
            <div className="modal-content">
                <h4>New Technician</h4>
                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="firstName"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)}
                        />
                        <label htmlFor="firstName" className="active">
                            First name
                        </label>
                    </div>
                </div>

                <div className="row">
                    <div className="input-field">
                        <input
                            type="text"
                            name="LastName"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                        <label htmlFor="lastName" className="active">
                            First name
                        </label>
                    </div>
                </div>
            </div>
            <div className="modal-footer" style={{ textAlign: 'left' }}>
                <a
                    href="#!"
                    onClick={onSubmit}
                    className="modal-close waves-effect waves-light btn blue"
                    style={{ marginLeft: '1rem' }}
                >
                    <i className="material-icons left">add</i>Add New Tech
                </a>
            </div>
        </div>
    )
}

AddTechModal.propTypes = {
    addTech: PropTypes.func.isRequired
}

export default connect(null, { addTech })(AddTechModal);