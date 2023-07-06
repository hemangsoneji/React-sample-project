import React from 'react';
import Link from '@mui/material/Link';

export const AboutPage = () => {
  return (
    <div>
      <header>
        <div class="grid-container" style={{
          display: 'grid',
          gridTemplateColumns: 'auto auto auto auto auto',
          backgroundColor: 'lightblue',
          height: '50px',
          padding: '10px'
        }}>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/">Home</Link></div>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/about">About</Link></div>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/contact">Contact</Link></div>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/todolist">To Do List</Link></div>
          <div class="grid-item" style={{
            fontSize: '20px',
            textAlign: 'center'
          }}><Link href="/shoppingcart">Cart</Link></div>
        </div>
      </header>
      <div style={{
        textAlign: 'center',
        padding: '20px'
      }}>
        <h2 style={{
          textAlign: 'center'
        }}>About the Company</h2>
        <div>
          <p>
            Fashionably Yours is a vibrant and dynamic clothing brand that has been revolutionizing the
            fashion industry since its inception. Established in 2010, our brand has quickly gained recognition
            for its unique blend of contemporary styles, impeccable quality, and commitment to customer
            satisfaction.
          </p>
        </div>
        <div>
          <h2 style={{
            textAlign: 'center'
          }}>Meet Our Team</h2>
          <div>
            <p>
              1.<b>Sarah Thompson</b> - <i>Founder and CEO</i>: Sarah, a fashion enthusiast and visionary, founded
              Fashionably Yours with the aim of creating a brand that celebrates individuality and
              self-expression through clothing. With her keen eye for design and business acumen, she leads
              the team and sets the brand's strategic direction.
            </p>
            <p>2.<b>Mark Anderson</b> - <i>Operations Manager</i>: Mark is responsible for overseeing the day-to-day
              operations of Fashionably Yours. From managing the supply chain to ensuring efficient
              production and timely deliveries, he ensures that everything runs smoothly and seamlessly.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{
          textAlign: 'center'
        }}>Project</h2>
        <div style={{
          textAlign: 'center',
          padding: '20px'
        }}>
          <h4><i>Sustainable Fashion Initiative</i></h4>
          <p>
            Fashionably Yours is dedicated to making a positive impact on the environment and the communities
            it serves. As part of their ongoing commitment to sustainability, the company has launched the
            Sustainable Fashion Initiative. The goal of this project is to create a sustainable supply chain
            that prioritizes eco-friendly materials, ethical manufacturing practices, and reduces the brand's
            carbon footprint.
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutPage;