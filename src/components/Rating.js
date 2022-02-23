import React from "react";

function RatingC(props) {
  const { Rating, numReviews } = props;
  return (
    <div className="rating">
      <span>
        <i
          className={
            Rating >= 1
              ? "fa fa-star"
              : Rating > 0.5
              ? "fa fa-star-o-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            Rating >= 2
              ? "fa fa-star"
              : Rating > 1.5
              ? "fa fa-star-o-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            Rating >= 3
              ? "fa fa-star"
              : Rating > 2.5
              ? "fa fa-star-o-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            Rating >= 4
              ? "fa fa-star"
              : Rating > 3.5
              ? "fa fa-star-o-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>
        <i
          className={
            Rating >= 5
              ? "fa fa-star"
              : Rating > 4.5
              ? "fa fa-star-o-half"
              : "fa fa-star-o"
          }
        ></i>
      </span>
      <span>{numReviews + " Reviews"}</span>
    </div>
  );
}

export default RatingC;
