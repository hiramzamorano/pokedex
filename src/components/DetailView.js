import React from 'react';
import './styles/DetailView.css';

const DetailView = () => {

    return (
        <section className="detail-view">
            <img className='sprite-image' />
            <div className='data-wrapper'>
                <h1 className='data-name'>Name: </h1>
                <p className="data-char">Stats: </p>
            </div>
        </section>
    )
};

export default DetailView;
