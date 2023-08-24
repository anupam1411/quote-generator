import React from "react";

function QuotesText(props) {
  return (
    <div>
      <span>
        <div className="quote-text text-center pt-7 font-[Mochiy Pop P One]" style={{ color: props.color }}>
          <span id="quote">{props.quote}</span>
        </div>
      </span>
    </div>
  );
}

export default QuotesText;
