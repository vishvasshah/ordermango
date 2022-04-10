import React from "react";

function BannerName({ name, discount, more }) {
  const currency = "₹";
  return (
    <div className="bannerContent">
      <p>
        Get free discount for every <span>{`${currency}${discount}`}</span>{" "}
        purchase
      </p>
      <a href={more}>Learn More</a>
    </div>
  );
}

export default BannerName;