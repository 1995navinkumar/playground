import React from "react";

export default function AutoComplete() {
  return (
    <div>
      <div className="input-container">
        <form>
          <input name="search-input" />
        </form>
        <div className="search-result-container">
          <div className="search-result-item">Hello</div>
          <div className="search-result-item">Hello</div>
          <div className="search-result-item">Hello</div>
          <div className="search-result-item">Hello</div>

          <div className="search-result-item">Hello</div>
          <div className="search-result-item">Hello</div>
          <div className="search-result-item">Hello</div>
        </div>
      </div>
      <div>Some other Content!</div>
    </div>
  );
}
