import React from 'react';
import Moment from 'react-moment';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { deleteLog, setCurrent } from '../../actions/logActions';
import M from 'materialize-css/dist/js/materialize.min.js'

const LogItem = ({ log, deleteLog, setCurrent }) => {
    const { id, attention, message, tech, date } = log;
    const onDelete = () => {
        deleteLog(id);
        M.toast({ html: `Log ${id} successfully deleted`})
    }
    return (
        <li className="collection-item">
            <div>
                <a
                    href="#edit-log-modal"
                    className={`modal-trigger ${attention ? 'red-text' : 'blue-text'}`}
                    onClick={() => setCurrent(log)}>
                    {message}
                </a>
            </div>
            <br />
            <span className="grey-text">
                <span className="black-text">ID: #{id} </span>
                Last Updated by: <span className="black-text">{tech} </span>
                on <Moment format='Do MMMM YYYY, h:mm:ss a'>{date}</Moment>
            </span>
            <a href="#!" onClick={onDelete} className="secondary-content">
                <i className="material-icons grey-text">delete</i>
            </a>
        </li>
    )
}

LogItem.propTypes = {
    log: PropTypes.object.isRequired,
    deleteLog: PropTypes.func.isRequired
}

export default connect(null, { deleteLog, setCurrent })(LogItem);