import { useState } from "react";
import "./InputFilter.css";
import PropTypes from "prop-types";

function InputFilter({ handleInputSubmit, placeHolderText, labelText }) {
  const [text, setText] = useState("");
  function handleInputChange(e) {
    setText(e.target.value);
  }
  return (
    <>
      <form
        onSubmit={(e) => handleInputSubmit(e, text)}
        className="InputFilter"
        data-testid="input-form"
      >
        <label>{labelText} </label>
        <input
          type="text"
          value={text}
          onChange={handleInputChange}
          placeholder={placeHolderText}
          data-testid="input-element"
        />
      </form>
    </>
  );
}

InputFilter.defaultProps = {
  handleInputSubmit: () => {},
  placeHolderText: "",
  labelText: "",
};

InputFilter.propTypes = {
  handleInputSubmit: PropTypes.func,
  placeHolderText: PropTypes.string,
  labelText: PropTypes.string,
};

export default InputFilter;
