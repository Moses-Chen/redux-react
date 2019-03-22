import React from 'react';
import { Row, Col } from 'react-grid-system';

function Input(props) {
    function handleTextChanged(callback, value) {
        callback(value);
    }

    return (
        <Row>
            <Col md={3}>
                <label>{props.label}</label>
            </Col>
            <Col md={2}>
                <input onChange={event => { handleTextChanged(props.callback, event.target.value); }}
                    value={props.value} />
            </Col>
        </Row>
    );
}

export default Input;