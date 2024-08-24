import React from 'react';

const Review = () => {
  return (
    <section className="section review" id="review">
      <div className="review-container container">
        <div className="review-text">
          <h4 className="section-subtitle"><i>Reviews</i></h4>
          <h2 className="section-title">What our customers say</h2>
          <p className="section-description">
            We always aim to provide the best service possible. Here's what our customers have to say about us.
          </p>
        </div>
        <div className="review-content">
          {/* Aquí podrías agregar más reviews */}
          <div className="review-item flex">
            <div className="review-image">
              <img src="images/reviewImg1.jpg" alt="" className="review-img" />
            </div>
            <div className="review-details">
              <h4 className="review-name">John Doe</h4>
              <p className="review-text">Amazing coffee! The atmosphere is very cozy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Review;