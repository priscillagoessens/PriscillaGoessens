import React from 'react'

function Services() {
  return (
    <section class="services" id="services">
    <div class="content">
      <div class="title"><span>My Services</span></div>
      <div class="boxes">
        <div class="box">
          <div class="icon">
            <i class="fas fa-desktop"></i>
          </div>
          <div class="topic">Web Development</div>
          <p>Your apps, your style, create them any way you want with</p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-quidditch"></i>
          </div>
          <div class="topic">UI/UX Design</div>
          <p>Designing is not just what it looks like and feels like. Design is how it works</p>
        </div>
        <div class="box">
          <div class="icon">
            <i class="fas fa-tablet-alt"></i>
          </div>
          <div class="topic">Apps Development</div>
          <p>Build apps that users love. Simple as that</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Services
