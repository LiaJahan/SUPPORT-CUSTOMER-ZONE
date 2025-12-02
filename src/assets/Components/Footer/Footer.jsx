import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer bg-black mx-auto max-w-full flex flex-col sm:flex-row sm:justify-around text-neutral-content p-10 gap-6 sm:gap-0">
                <nav className='flex flex-col'>
                    <a className="link text-5xl link-hover my-2 font-medium">CS — Ticket System</a>
                    <a className="link link-hover my-1">Need help? Our support heroes are standing by (capes optional).</a>
                    <a className="link link-hover my-1">Got a question? We’ve probably heard it before—try us.</a>
                    <a className="link link-hover my-1">Your tickets are safe with us… like, super safe.</a>
                    <a className="link link-hover my-1">Follow us for updates, memes, and occasional wisdom.</a>
                    <a className="link link-hover my-1">Your satisfaction is our priority.</a>
                    <a className="link link-hover my-1">Secure payments and verified ticket processing.</a>
                </nav>
                <nav className='flex flex-col'>
                    <a className="link link-hover text-3xl my-2">Company</a>
                    <a className="link link-hover my-2">Company</a>
                    <a className="link link-hover my-2">Our Mission</a>
                    <a className="link link-hover my-2">Contact Saled</a>
                </nav>
                <nav className='flex flex-col'>
                    <a className="link link-hover text-3xl my-2">Services</a>
                    <a className="link link-hover my-2">Products & Services</a>
                    <a className="link link-hover my-2">Customer Stories</a>
                    <a className="link link-hover my-2">Download Apps</a>
                </nav>
                <nav className='flex flex-col'>
                    <a className="link link-hover text-3xl my-2">Information</a>
                    <a className="link link-hover my-2">Privacy Policy</a>
                    <a className="link link-hover my-2">Terms & Conditions</a>
                    <a className="link link-hover my-2">Join Us</a>
                </nav>
                <nav className='flex flex-col'>
                    <a className="link link-hover text-3xl my-2">Social Links</a>
                    <a className="link link-hover flex items-center gap-2 my-2"><img src="https://i.ibb.co/bjnYQdgp/fi-5969020.png" alt="" />@CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-2 my-2"><img src="https://i.ibb.co/b5mn3LvL/fi-145807.png" alt="" />@CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-2 my-2"><img src="https://i.ibb.co/hxbL6d7T/fi-5968764.png" alt="" />@CS — Ticket System</a>
                    <a className="link link-hover flex items-center gap-2 my-2"><img src="https://i.ibb.co/bjNx4qnd/fi-6244710.png" alt="" />support@cst.com</a>
                </nav>
            </footer>
            <p className='bg-black text-white text-center text-2xl pb-10'>© {new Date().getFullYear()} CS — Ticket System. All rights reserved.</p>
        </div>
    );
};

export default Footer;
