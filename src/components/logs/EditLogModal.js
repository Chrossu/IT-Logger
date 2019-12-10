import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateLog, clearCurrent } from '../../actions/logActions';
import PropTypes from 'prop-types';
import M from 'materialize-css/dist/js/materialize.min.js';

const EditLogModal = ({ currentLog, updateLog, clearCurrent }) => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  useEffect(() => {
    if (currentLog && currentLog !== null) {
      setMessage(currentLog.message);
      setAttention(currentLog.attention);
      setTech(currentLog.tech);
    }
    // eslint-disable-next-line
  }, [currentLog]);

  const onSubmit = () => {
    if (message === '' || tech === '') {
      M.toast({ html: 'Please, enter a Message or Tech', classes: 'rounded' });
    } else {
      const editedLog = {
        id: currentLog.id,
        message: message,
        attention: attention,
        tech: tech,
        date: new Date()
      };

      updateLog(editedLog);
      M.toast({ html: `Log ${currentLog.id} updated successfully`, classes: 'rounded' });

      // Clear form
      setMessage('');
      setAttention(false);
      setTech('');

      // Clear current
      clearCurrent();
    }
  };

  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Edit System Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={e => setTech(e.target.value)}>
              <option value='' disabled>
                Select Technician
              </option>
              <option value='John Doe'>John Doe</option>
              <option value='Sam Smith'>Sam Smith</option>
              <option value='Sara Wilson'>Sara Wilson</option>
            </select>
          </div>
        </div>
        <div className='row input-field'>
          <label>
            <input
              type='checkbox'
              className='filled-in'
              checked={attention}
              value={attention}
              onChange={() => setAttention(!attention)}
            />
            <span>Needs Attention</span>
          </label>
        </div>
      </div>
      <div className='modal-footer' style={{ textAlign: 'left' }}>
        <a
          href='#!'
          onClick={onSubmit}
          className='modal-close waves-effect waves-light btn blue'
          style={{ marginLeft: '1rem', marginTop: '3rem' }}>
          <i className='material-icons left'>add</i>Edit
        </a>
      </div>
    </div>
  );
};

const modalStyle = {
  width: '75%',
  height: '75%'
};

EditLogModal.propTypes = {
  updateLog: PropTypes.func.isRequired,
  clearCurrent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  currentLog: state.log.current
});

export default connect(mapStateToProps, { updateLog, clearCurrent })(EditLogModal);
