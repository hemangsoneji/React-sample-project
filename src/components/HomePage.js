import React from 'react';
import Link from '@mui/material/Link';

export const HomePage = () => {
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
        <h1>Welcome to Fashionably Yours,</h1>
        <div>
          <h2>where style meets comfort and individuality reigns supreme!</h2>
          <p>
            At Fashionably Yours, we believe that fashion is more than just a trend; it's a form of
            self-expression. We understand that every individual has their unique sense of style, and our
            mission is to empower you to embrace your own fashion identity.
          </p>
          <p>
            Our brand is built on a foundation of quality craftsmanship and attention to detail. We meticulously
            design each garment, ensuring that it not only looks great but also feels amazing when you wear it.
            From the luxurious fabrics we select to the innovative cuts and patterns, we strive to provide you
            with pieces that make you feel confident and comfortable all day long.
          </p>
          <p>
            Whether you're searching for a casual outfit for a weekend getaway, an elegant ensemble for a
            special occasion, or versatile essentials to upgrade your everyday wardrobe, Fashionably Yours
            has got you covered. Our diverse range of collections offers a wide array of options for men, women,
            and children, so everyone can find something that speaks to their personal style.
          </p>
          <p>
            But our commitment doesn't stop at creating beautiful clothes. We also prioritize sustainability and
            ethical practices. We source materials responsibly, and our production processes prioritize
            eco-friendly techniques. We believe in giving back to the communities that have supported us, and
            that's why we actively participate in initiatives that make a positive impact on society and the
            environment.
          </p>
          <p>
            Join us on this fashion journey and discover a world where comfort, style, and individuality collide.
            Shop with us today and experience the perfect blend of timeless elegance and contemporary fashion.
          </p>
          <p>
            Welcome to Fashionably Yours. Dress to express.
          </p>
        </div>
      </div>

    </div>
  )
}

export default HomePage;