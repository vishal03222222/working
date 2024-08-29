import React, { Component } from 'react';

import img1 from "../22background/original.jpg";
import img2 from "../22background/icemountain.jpg";
import img3 from "../22background/resort.jpg";

export default class BackGroundChange extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0,
            backgroundImages: [
                img1,
                img2,
                img3,
            ],
        };
    }

    componentDidMount() {
        this.intervalId = setInterval(this.changeBackground, 3000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    changeBackground = () => {
        this.setState((prevState) => ({
            currentIndex: (prevState.currentIndex + 1) % prevState.backgroundImages.length,
        }));
    };

    render() {
        const { backgroundImages, currentIndex } = this.state;
        const backgroundStyle = {
            backgroundImage: `url(${backgroundImages[currentIndex]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100%',
        };

        return (
            <div>
                <div style={{ marginRight: '20px', color: 'green', textAlign: 'center' }}>
                    <h2> Background Change</h2>
                </div>
                <div className="background-container" style={backgroundStyle}>
                    <h1>Background Image Change Effect</h1>
                </div>
            </div>
        );
    }
}
