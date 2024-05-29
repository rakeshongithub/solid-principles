import React from "react";

function WithBanner(WrappedComponent) {
  const WithBannerComponent = (props) => {
    return (
      <div className="post-detail-with-banner">
        <div className="image-wrapper">
          <img src="https://picsum.photos/800/300" alt="Banner" />
        </div>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return React.memo(WithBannerComponent);
}

export default WithBanner;
