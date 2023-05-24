import React from 'react'
import Head from './Head'
import './Assets/CSS/Portfolio.css';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.min.css';
import 'owl.carousel/dist/assets/owl.theme.default.min.css';
export default function Portfolio() {
  return (
    <section className='portfolio py-5' id='portfolio'>
       <div className="container">
       <Head title="Portfolio" dark={false} />
        <div className="row">
        <OwlCarousel  items={1}  
          className="owl-theme owl-drag"  
          loop  
          autoplay ={true}
          autoplayHoverPause={true}
          mouseDrag={true}
          fluidSpeed={800}>
        <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
                
                <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                    <h4 className='mb-3'>Delizus</h4>
                    <p className='mb-4'>
                        I developed a restaurant website that was built using HTML, CSS, and JavaScript, which included multiple pages to showcase the restaurant's menu, location, hours, and more. The website was designed to be fully responsive and adaptable to any device, allowing customers to easily access the website from their desktop or mobile device.
                    </p>
                    <Link target='_blank'  to="https://mariamtarek514.github.io/Delizus/">Demo</Link>
                </div>
                <figure className="box-1 mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2"></figure>
            </div>
            <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
                <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                    <h4 className='mb-3'>Calculator</h4>
                    <p className="mb-4">
                    I built a calculator using HTML, CSS, and React. With React's powerful components, I was able to create a user-friendly interface with interactive functionality.
                    </p>
                    <Link target='_blank' to="https://calculator-app-mariam.netlify.app/">Demo</Link>
                </div>
                <figure className="box-2 mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2"></figure>
            </div>
            <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
                <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                    <h4 className='mb-3'>To-do List</h4>
                    <p className='mb-4'>
                    I developed a to-do list with HTML, CSS, and JavaScript that stores data using local storage. This project was part of the Frontend Mentor challenge.
                    </p>
                    <Link target='_blank' to="https://mariamtarek514.github.io/todo-list/">Demo</Link>
                </div>
                <figure className="box-3 mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2"></figure>
            </div>
            <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
                <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                    <h4 className='mb-3'>E-commerce</h4>
                  <p className="mb-4">
                  At ITI, our JavaScript project was an e-commerce website built with HTML, CSS, and JavaScript. We integrated it with the 'dummy json' API to enhance its functionality
                  </p>
                    <Link target='_blank' to="https://mariamtarek514.github.io/Ecommerce/">Demo</Link>
                </div>
                <figure className="box-4 mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2"></figure>
            </div>
          
            <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
                <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                    <h4 className='mb-3'>Bithu</h4>
                    <p className="mb-4">
                    I was part of a team that developed a gaming website using HTML, CSS, and JavaScript. We also incorporated the Owl Cursor library to enhance the website's user experience
                    </p>
                    <Link target='_blank' to="https://mariamtarek514.github.io/Bithu/">Demo</Link>
                </div>
                <figure className="box-5 mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2"></figure>
            </div>
            <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
                <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                    <h4 className='mb-3'>Tasty</h4>
                 <p className="mb-4">
                 My HTML and CSS project at ITI, I created a food website using HTML, CSS, and JavaScript. I utilized the AOs library to enhance the website's functionality.
                 </p>
                    <Link target='_blank' to="https://mariamtarek514.github.io/Tasty/">Demo</Link>
                </div>
                <figure className="box-6 mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2"></figure>
            </div>
            <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
                <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                    <h4 className='mb-3'>Delivery</h4>
               <p className="mb-4">
               I developed a delivery website using HTML, CSS,JavaScript, and Sass. Sass's powerful features allowed me to efficiently write and organize the website's styles, resulting in a visually appealing and easy-to-use website.
               </p>
                    <Link target='_blank' to="https://mariamtarek514.github.io/Delivery/">Demo</Link>
                </div>
                <figure className="box-7 mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2"></figure>
            </div>
            <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
                <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                    <h4 className='mb-3'>Interactive rating component</h4>
                    <p className="mb-4">
                    As part of the Frontend Mentor challenge, I developed an interactive rating component using HTML, CSS, and JavaScript. The component's interactivity allows users to easily rate items and provides a visually appealing display of their selections
                    </p>
                    <Link target='_blank' to="https://mariamtarek514.github.io/Interactive-rating-component/">Demo</Link>
                </div>
                <figure className="box-8 mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2"></figure>
            </div>
        </OwlCarousel>
       
          
        </div>
       </div>
    </section>
  )
}
