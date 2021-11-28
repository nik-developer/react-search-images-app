import React from "react";

const Button = ({onClick}) => {
return (
    <div className="LoadMoreButton">
    <button onClick={onClick} type="button" className="Button">
      Load more
    </button>
  </div>
)
}
export default Button