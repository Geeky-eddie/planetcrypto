import React from 'react';
import Adsfooter from '../components/Adsfooter';
import Nativead from '../components/Nativead';

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        
      <Adsfooter />
      <Nativead />
        <div>
  <h1 className='text-3xl font-semibold text-center my-7'>
    Welcome to PlanetCrypto
  </h1>
  <div className='text-md text-gray-500 flex flex-col gap-6'>
  <p>
  Welcome to Planet Crypto, your premier platform for embarking on a journey to financial freedom through the world of cryptocurrencies. We're dedicated to equipping you with the knowledge, tools, and resources necessary to navigate the exciting realm of digital assets and blockchain technology.
</p>

<p>
  Founded with a vision to revolutionize the way people engage with finance and technology, Planet Crypto brings together a team of seasoned experts and enthusiasts passionate about cryptocurrencies. Our mission is to empower individuals like you to seize opportunities, make informed investment decisions, and unlock the potential of decentralized finance.
</p>

<p>
  Whether you're a seasoned trader, a curious beginner, or simply intrigued by the possibilities of cryptocurrency, Planet Crypto offers a wealth of resources tailored to your journey. From in-depth insights and market analysis to practical tutorials and real-world case studies, we're here to guide you every step of the way.
</p>

<p>
  Join the Planet Crypto community today and embark on your path to financial prosperity. Connect with fellow enthusiasts, share valuable insights, and stay ahead of the curve with the latest trends and developments in the crypto space. Together, let's explore the endless possibilities of the digital economy and chart a course towards financial independence.
</p>


  </div>
  <a
    href='https://chat.whatsapp.com/B6dzarAw0zC1LS3hNS0qxQ'
    target='_blank'
    rel='noopener noreferrer'
    className='inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded my-7'
  >
    Join Our WhatsApp Community
  </a>
</div>

        <Adsfooter />
      </div>
      
    </div>
  );
}
