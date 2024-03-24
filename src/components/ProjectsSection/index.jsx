import React from 'react'

export default function ProjectsSection() {
    return (
        <section className="section main-section">
            <p>Section 3 (welcome to fullpage.js)</p>
            <button onClick={() => fullpageApi.moveSectionDown()}>
                Click me to move down
            </button>
        </section>
    )
}
