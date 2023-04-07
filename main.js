import './style.css'

import profilePic from '/public/profile_pic.jpeg'
import demoVideo from '/public/demo_video.mp4'

document.querySelector('#app').innerHTML = `
  <div class="content-container">
    <div class="left-column">
      <img src="${profilePic}" class="hero-image" alt="Davy McAllister" />
    </div>
    <div class="right-column">
      <h1 class="artist-name">David McAllister</h1>
      <div class="video-wrapper">
  <video controls>
    <source src="https://dl.dropboxusercontent.com/s/fvpdwmo7u2r9vct/IMG_1137.MP4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

      <p class="placeholder-text">Available for weddings, private functions and bar bookings.</p>
      <a id="contactButton" class="contact-button">Contact</a>
    </div>
  </div>
`

document.getElementById('contactButton').addEventListener('click', function () {
  const defaultEmail = 'placeholder@email.com'
  const subject = encodeURIComponent('Inquiry for David McAllister')
  const body = encodeURIComponent('Hello David,\n\nI am interested in learning more about your music.\n\nBest regards,\n[Your Name]')
  window.location.href = `mailto:${defaultEmail}?subject=${subject}&body=${body}`
})

