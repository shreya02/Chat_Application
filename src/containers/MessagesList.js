import React from 'react';
import PropTypes from 'prop-types';

const MessagesList=({messages}) =>
(
    <section id="messages-list">
    <ul>
        {messages.map(message => (
            <Messages key={message.id}
            {...message}
            />
        ))}
    </ul>
    </section>
)
MessagesList.PropTypes = {
    message: PropTypes.arrayOf(
        PropTypes.shape({
            id:PropTypes.number.isRequired,
            message:PropTypes.string.isRequired,
            author:PropTypes.string.isRequired
        }).isRequired
    ).isRequired
}
export default MessagesList;