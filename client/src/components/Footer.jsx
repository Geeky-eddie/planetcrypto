import React from 'react'
import { Footer } from 'flowbite-react';
import { Link } from 'react-router-dom';
import {BsFacebook, BsTwitter, BsInstagram, BsWhatsapp, BsTiktok} from 'react-icons/bs';
import logo from "../../public/2hr.png";

export default function FooterCom() {
  return (
    <Footer container className='border border-t-8 border-amber-500  bg-amber-100 text-gray-700 dark:text-gray-200 dark:bg-[rgb(16,23,42)]'>
        <div className="w-full max-w-7xl mx-auto">
            <div className="grid w-full justify-between sm:flex md:grid-cols-1">
                <div className="mt-5">
                <Link to="/" className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white'>
            {/* <span className='px-2 py-1  bg-amber-500 rounded-lg text-white'>Career</span> */}
           <img src={logo} alt="logo" height={50} width={100} />
                </Link>
                </div>
                <div className="grid grid-cols-2 gap-8 mt-4 sm:grid-cols-3 sm:gap-6">
  <div>
    <Footer.Title title='About us' />
    <Footer.LinkGroup col>
      <Footer.Link href='https://traversefaultlessashamed.com/tvsqgu7h?key=77210600284472feec81b21a019d83dd' target='_blank' rel='noopener noreferrer'>
        Learn more about HealthRepublicMedia
      </Footer.Link>
      <Footer.Link href='https://traversefaultlessashamed.com/tvsqgu7h?key=77210600284472feec81b21a019d83dd' target='_blank' rel='noopener noreferrer'>
        Explore how to create a website like this
      </Footer.Link>
    </Footer.LinkGroup>
  </div>
  <div>
    <Footer.Title title='Contact us' />
    <Footer.LinkGroup col>
      <Footer.Link href='https://chat.whatsapp.com/CI8csy2cFCp5NDx0bnJumM' target='_blank' rel='noopener noreferrer'>
        Join our WhatsApp Community
      </Footer.Link>
      <Footer.Link href='https://twitter.com/Geekyeddie' target='_blank' rel='noopener noreferrer'>
        Contact us on Twitter
      </Footer.Link>
      <Footer.Link href='https://www.instagram.com/geekyeddietech/' target='_blank' rel='noopener noreferrer'>
        Contact us on Instagram
      </Footer.Link>
    </Footer.LinkGroup>
  </div>
  <div>
    <Footer.Title title='Legal' />
    <Footer.LinkGroup col>
        <Link to="/privacy-policy">
        <Footer.Link target='_blank' href='/privacy-policy' rel='noopener noreferrer'>
        Privacy Policy
      </Footer.Link>
        </Link>
        <Link to="/terms">
            <Footer.Link target='_blank' href='/terms' rel='noopener noreferrer'>
        Terms &amp; Conditions
      </Footer.Link>
        </Link>
        <Link to="/disclaimer">
            <Footer.Link target='_blank' href='/disclaimer' rel='noopener noreferrer'>
        Check out our Disclaimer
      </Footer.Link>
        </Link>
      
    </Footer.LinkGroup>
  </div>
  <div>
  </div>
  <div>
    
  </div>
</div>

            </div>
            <Footer.Divider />
            <div className="w-full sm:flex sm:items-center sm:justify-between"> 
                <Footer.Copyright href='#' by='Healthrepublicmedia' year={new Date().getFullYear()} />
            </div>
            <div className="flex gap-6 sm:mt-0 mt-4 sm:justify-center">
                <Footer.Icon href='https://traversefaultlessashamed.com/tvsqgu7h?key=77210600284472feec81b21a019d83dd' icon={BsFacebook} target='_blank'/>
                <Footer.Icon href='https://twitter.com/Geekyeddie' icon={BsTwitter} target='_blank'/>
                <Footer.Icon href='https://www.instagram.com/geekyeddietech/' icon={BsInstagram} target='_blank'/>
                <Footer.Icon href='https://traversefaultlessashamed.com/tvsqgu7h?key=77210600284472feec81b21a019d83dd' icon={BsWhatsapp} target='_blank'/>
                <Footer.Icon href='https://traversefaultlessashamed.com/tvsqgu7h?key=77210600284472feec81b21a019d83dd' icon={BsTiktok} target='_blank'/>
            </div>
        </div>
    </Footer>
  )
}
