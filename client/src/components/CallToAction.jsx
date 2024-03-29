import { Button } from 'flowbite-react';
import pic1 from '/whatsapp-community-2.png'

export default function CallToAction() {
  return (
    <div className='flex flex-col sm:flex-row p-3 border border-amber-700 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center bg-green-500'>
        <div className="flex-1 justify-center flex flex-col ">
            <h2 className='text-2xl'>
            Stay Connected to Planetcrypto Community!
            </h2>
            <p className='text-white my-2'>
            Join Planet Crypto's WhatsApp community for exclusive updates on cryptocurrency insights, valuable airdrops, step-by-step tutorials, and the latest trends in the crypto world. Don't miss out on the chance to pave your way to 💰$Millions💸🤑!

            </p>
            <Button color="warning" className='rounded-tl-xl rounded-bl-none'>
                <a href="https://chat.whatsapp.com/CI8csy2cFCp5NDx0bnJumM " target='_blank' rel='noopener noreferrer'>
                    Join Now
                </a>
            </Button>
        </div>
        <div className="p-7 flex-1">
            <img alt='Join our whatsapp community' src={pic1} />
        </div>
    </div>
  )
}