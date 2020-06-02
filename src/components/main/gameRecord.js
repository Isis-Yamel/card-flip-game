import React from 'react';
import { connect } from 'react-redux';

const GameRecord = props => {
    return (
        <div>
            <section>
                <h2>Current Player</h2>
                <p>Name: </p>
                <p>Tries: {props.data.tries} </p>
            </section>
            <section>
                <h2>Position Table</h2>
                <p>Player -- tries</p>
            </section>
        </div>
    )
};

const mapStateProps = state => {
    return {
        data: state
    };
};

export default connect(mapStateProps, null)(GameRecord);