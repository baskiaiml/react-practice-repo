import React from 'react';
export default function Header({ imageUrl }) {
    return (
            <header id="header">
                <img src={imageUrl} alt="Logo with Bag full of money" />
                <h1 img={imageUrl}>Investment Calculator </h1>
            </header>
    );
}