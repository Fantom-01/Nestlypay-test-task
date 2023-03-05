import React from 'react'
import { useState } from 'react'
import dashboardImg from '../assets/AccountDashboard.png'
// import '../styles/slidersect.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import SliderItem from './sliderItem.jsx'
import SliderData from '../sliderData'

import imageA1 from '../assets/sliderImages/phoneA1.png'
import imageA2 from '../assets/sliderImages/phoneA2.png'
import imageB1 from '../assets/sliderImages/phoneB1.png'
import imageB2 from '../assets/sliderImages/phoneB2.png'
import imageB3 from '../assets/sliderImages/phoneB3.png'
import imageC1 from '../assets/sliderImages/phoneC1.png'
import imageC2 from '../assets/sliderImages/phoneC2.png'
import imageC3 from '../assets/sliderImages/phoneC3.png'
import imageD1 from '../assets/sliderImages/phoneD1.png'
import imageD2 from '../assets/sliderImages/phoneD2.png'

const slidersect = () => {
  const items = [
    {
      catogeries: "A",
      id: "1",
      heading: "Effortlessly Track Bills and Time",
      paragraph: "Follow up on customers with automated payment reminders and keep track of invoice status so you'll never leave money off the table again.",
      image: imageA1,
    },

    {
      catogeries: "A",
      id: "2",
      heading: "Effortlessly Track Bills and Time",
      paragraph: "Follow up on customers with automated payment reminders and keep track of invoice status so you'll never leave money off the table again.",
      image: imageA2,
    },

    {
      catogeries: "B",
      id: "3",
      heading: "Create Free Invoice",
      paragraph: 'Receive payments in one click by creating a free invoice template for you business or for your Job as a Freelancer.',
      image: imageB1,
    },

    {
      catogeries: "B",
      id: "4",
      heading: "Create Free Invoice",
      paragraph: 'Receive payments in one click by creating a free invoice template for you business or for your Job as a Freelancer.',
      image: imageB2,
    },

    {
      catogeries: "B",
      id: "5",
      heading: "Create Free Invoice",
      paragraph: 'Receive payments in one click by creating a free invoice template for you business or for your Job as a Freelancer.',
      image: imageB3,
    },

    {
      catogeries: "C",
      id: "6",
      heading: "Assign Roles and Users",
      paragraph: 'Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.',
      image: imageC1,
    },

    {
      catogeries: "C",
      id: "7",
      heading: "Assign Roles and Users",
      paragraph: 'Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.',
      image: imageC2,
    },

    {
      catogeries: "C",
      id: "8",
      heading: "Assign Roles and Users",
      paragraph: 'Ease work within your organization by assigning users and roles. Empower your members to manage transactions and invoices without sharing the username and password.',
      image: imageC3,
    },

    {
      catogeries: "D",
      id: "9",
      heading: "Everything You Need to Secure Your Cashflow",
      paragraph: "Follow up on customers with automated payment reminders and keep track of invoice status so you'll never leave money off the table again.",
      image: imageD1,
    },

    {
      catogeries: "D",
      id: "10",
      heading: "Everything You Need to Secure Your Cashflow",
      paragraph: "Follow up on customers with automated payment reminders and keep track of invoice status so you'll never leave money off the table again.",
      image: imageD2,
    },
  ];
  const listItems = items.map((item) => {
      return (
        <SliderItem
          key={item.id}
          heading={item.heading}
          paragraph={item.paragraph}
          image={item.image}
        />
      )
    }
  )
  const settings = {
    dots: true,
    autoplay: false,
    cssEase: "linear",
    autoplaySpeed: 2000,
    customPaging: i => (
        <div
          style={{
            width: "15px",
            color: "white",
            border: "none"
          }}
        >
          {i + 1}
        </div>
      )
  };
  return (
    <div className="slider--container">
      <Slider {...settings}>
          {/* <div className="card">
            <img src={dashboardImg}/>
            <p>Image One</p>
          </div>
          <div className="card">
            <img src={dashboardImg}/>
            <p>Image Two</p>
          </div>
          <div className="card">
            <img src={dashboardImg}/>
            <p>Image Three</p>
          </div>
          <div className="card">
            <img src={dashboardImg}/>
            <p>Image Four</p>
          </div> */}
          
          {/* {data.map((data) => (
            <SliderItem
              key={data.id}
              heading={data.heading}
              paragraph={data.paragraph}
              image={data.image}
            />
          ))} */}

          {listItems}

        </Slider>
    </div>
  )
}

export default slidersect