import React from 'react';
import './DetailView.css';

const DetailView = ({ job }) => {
  const { id, title, created_on, location, description, url } = job;
  
  
  return (
    <section className="detail-view">
      <div className='data-wrapper'>
        <h1 className='data-name'>{title}</h1>
        <h1 className='data-name'>{created_on}</h1>
        <h1 className='data-name'>{created_on}</h1>
        <p className="data-char"><a href={url}>{url}</a></p>
        <p className="data-char">{location}</p>
        <p className="data-char">{description}</p>
      </div>
    </section>
  )
}

export default DetailView;