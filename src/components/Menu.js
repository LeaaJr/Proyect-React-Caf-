import React from 'react';

const Menu = () => {
  return (
    <section className="section menu" id="menu">
      <div className="menu-container container">
        <div className="menu-text">
          <h4 className="section-subtitle"><i>Our Menu</i></h4>
          <h2 className="section-title">Our Popular Menu</h2>
          <p className="section-description">
            Our place designed by pro architecture with psychologist to build best place suit you.
          </p>
        </div>
        <div className="menu-content">
          <div className="menu-items">
            <MenuItem imgSrc="images/m4.png" topic="Americano Roasted Coffee" description="It is a long established fact that a reader will be distracted by the readable." discountPrice="$18.99" realPrice="$20.66" />
            <MenuItem imgSrc="images/m1.png" topic="Americano Roasted Coffee" description="It is a long established fact that a reader will be distracted by the readable." discountPrice="$18.99" realPrice="$20.66" />
            <MenuItem imgSrc="images/m2.png" topic="Americano Roasted Coffee" description="It is a long established fact that a reader will be distracted by the readable." discountPrice="$18.99" realPrice="$20.66" />
            <MenuItem imgSrc="images/m3.png" topic="Americano Roasted Coffee" description="It is a long established fact that a reader will be distracted by the readable." discountPrice="$18.99" realPrice="$20.66" />
          </div>
          <TimeTable />
        </div>
      </div>
    </section>
  );
};

const MenuItem = ({ imgSrc, topic, description, discountPrice, realPrice }) => {
  return (
    <div className="menu-item flex">
      <img src={imgSrc} alt="" className="menu-img" />
      <div className="menuItem-details">
        <h4 className="menuItem-topic">{topic}</h4>
        <p className="menuItem-des">{description}</p>
      </div>
      <div className="menuItem-price flex">
        <span className="discount-price">{discountPrice}</span>
        <span className="real-price">{realPrice}</span>
      </div>
    </div>
  );
};

const TimeTable = () => {
  return (
    <div className="time-table">
      <span className="time-topic">Find Your Time ☕</span>
      <ul className="time-lists">
        <li className="time-list flex"><span className="open-day"> Sunday</span><span className="open-time">Closed</span></li>
        <li className="time-list flex"><span className="open-day"> Monday</span><span className="open-time">7.00am - 3.00pm</span></li>
        <li className="time-list flex"><span className="open-day"> Tuesday</span><span className="open-time">7.00am - 3.00pm</span></li>
        <li className="time-list flex"><span className="open-day"> Wednesday</span><span className="open-time">7.00am - 3.00pm</span></li>
        <li className="time-list flex"><span className="open-day"> Thursday</span><span className="open-time">7.00am - 3.00pm</span></li>
        <li className="time-list flex"><span className="open-day"> Friday</span><span className="open-time">7.00am - 3.00pm</span></li>
        <li className="time-list flex"><span className="open-day"> Saturday</span><span className="open-time">9.00am - 2.00pm</span></li>
      </ul>
    </div>
  );
};

export default Menu;