import React from 'react'
import "./index.css";

export default function AboutSection() {
    return (
        <section className="section about-section">
            <p>Section 2 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
            </button>
        </section>
    )
}
