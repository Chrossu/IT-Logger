import React from 'react'

const ButtonAdd = () => {
    return (
        <div className="fixed-action-btn">
            <a href="#add-log-modal" class="btn-floating btn-large blue darken-2 modal-trigger">
                <i className="large material-icons">add</i>
            </a>
            <ul>
                <li>
                    <a href="#tech-list-modal" className="btn-floating green modal-trigger">
                        <a href="" className="material-icons">person</a>
                    </a>
                </li>
                <li>
                    <a href="#tech-modal" className="btn-floating red modal-trigger">
                        <a href="" className="material-icons">person_add</a>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default ButtonAdd
