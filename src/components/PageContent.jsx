
import React from 'react'
import AboutScetion from './AboutScetion'
import ContactSection from './ContactSection'
import ProjectSection from './ProjectSection'

function PageContent() {
  return (
    <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <ProjectSection></ProjectSection>
        <AboutScetion></AboutScetion>
        <ContactSection></ContactSection>
        <div className="w3-container">
            <img src="https://www.w3schools.com//w3images/map.jpg" className="w3-image" style={{ width: "100%" }} />
        </div>

        



    </div>

  )
}

export default PageContent