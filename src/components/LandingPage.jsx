import React from 'react';
import './LandingPage.css';

const LandingPage = ({ onCreateWish }) => {
    return (
        <div className="landing-page page">
            <div className="particles" id="particles-container"></div>

            <div className="landing-content content-center fade-in">
                <div className="logo-container mb-lg">
                    <div className="magic-symbol">✨</div>
                </div>

                <h1 className="landing-title mb-md">
                    Some dates don't fade.<br />
                    They return.
                </h1>

                <p className="landing-subtitle mb-xl">
                    Create a cinematic tribute to a special date. A rhythmic, meditative animation
                    that echoes a single memory through time.
                </p>

                <button
                    className="btn btn-primary btn-large"
                    onClick={onCreateWish}
                >
                    <span>✨</span>
                    Begin the Memory
                    <span>🎁</span>
                </button>

                <div className="features-grid mt-xl">
                    <div className="feature-card slide-up stagger-1">
                        <div className="feature-icon">🎉</div>
                        <h3>Special Occasions</h3>
                        <p>Birthday, Anniversary, New Year & more</p>
                    </div>

                    <div className="feature-card slide-up stagger-2">
                        <div className="feature-icon">🧮</div>
                        <h3>Mathematical Magic</h3>
                        <p>Ramanujan-inspired 4×4 magic squares</p>
                    </div>

                    <div className="feature-card slide-up stagger-3">
                        <div className="feature-icon">🎨</div>
                        <h3>Beautiful Animation</h3>
                        <p>Smooth, emotional visual experience</p>
                    </div>

                    <div className="feature-card slide-up stagger-4">
                        <div className="feature-icon">📥</div>
                        <h3>Download & Share</h3>
                        <p>Get your wish as an animated GIF</p>
                    </div>
                </div>
            </div>

            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
