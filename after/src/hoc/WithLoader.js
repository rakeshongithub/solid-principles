import React from "react";
import Preloader from "../components/Preloader";

function WithLoader(WrappedComponent) {
  const WithLoaderComponent = ({ isLoading, ...rest }) => {
    return (
      <div className="loader-wrapper">
        {isLoading ? <Preloader /> : null}
        <WrappedComponent {...rest} />
      </div>
    );
  };

  return React.memo(WithLoaderComponent);
}

export default WithLoader;
