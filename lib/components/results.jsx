import React from 'react';
import Filter from './filter';
import SpecsResults from './specs-results';

const style = {
    'padding-bottom': '25px'
}

const Results = props => {
    return (
        <section className="has-background-grey-lighter" style={ style }>
            <div className="container">
                <Filter />
                <div className="tests">
                    <SpecsResults specs={ props.specs } />
                </div>
            </div>
        </section>
    )
};

export default Results;