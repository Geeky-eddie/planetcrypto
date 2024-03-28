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
    Welcome to HealthRepublicMedia
  </h1>
  <div className='text-md text-gray-500 flex flex-col gap-6'>
  <p>
  Welcome to Health Republic Media, your ultimate destination for embracing a healthier lifestyle and well-being. We're committed to providing you with valuable insights, tips, and resources to help you thrive physically, mentally, and emotionally.
</p>

<p>
  Founded with a mission to inspire and empower individuals in their journey towards optimal health, Health Republic Media is curated by a team of passionate health enthusiasts and experts. We aim to deliver comprehensive information, guidance, and support to assist you in making informed choices and achieving your wellness goals.
</p>

<p>
  Whether you're exploring nutrition, fitness, mental health, or holistic wellness practices, Health Republic Media offers a diverse array of resources tailored to your needs. From expert articles and guides to community discussions and event updates, we're here to accompany you on your path to well-being.
</p>

<p>
  At Health Republic Media, we believe in fostering a supportive community where individuals can connect, learn, and grow together. Join our WhatsApp community to engage with like-minded individuals, share experiences, and stay updated on the latest trends and developments in the health and wellness world.
</p>

  </div>
  <a
    href='https://chat.whatsapp.com/CI8csy2cFCp5NDx0bnJumM'
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
