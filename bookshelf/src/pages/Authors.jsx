import React, { useState } from 'react';
import authorData from '../data/authorData.json';
import '../assets/styles/Authors.css'
import Header from '../componentes/Header';
import Footer from '../componentes/Footer';


function Authors() {
    const [authors] = useState(authorData);

    return (
        <div className='author-container'>
            <Header />
            <h1 className='h1'>Autores populares</h1>
            <div>
                {authors.map((author, index) => (
                    <div key={index} className='author-card'>
                        <img className='author-image' src={author.image} alt={author.name} />
                        <p className='author-title'>{author.name}</p>
                        <p className='views'>{author.views}</p>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}

export default Authors;
