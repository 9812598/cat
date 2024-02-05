import React, { useState } from "react";

import Select from "react-select";

const options = [
  { value: "aed", label: "AED" },
  { value: "rub", label: "RUB" },
  { value: "all", label: "ALL" },
  { value: "amd", label: "AMD" },
];

const MyComponent = () => (
  <Select
    options={options}
    styles={{
      control: (baseStyles, state) => ({
        ...baseStyles,
        borderColor: state.isFocused ? "#DAD6D6" : "#DAD6D6",
        borderRadius: "10px",
        color: "#000000",
        width: "181px",
      }),

      placeholder: (baseStyles) => ({
        ...baseStyles,
        color: "#000000",
      }),
      dropdownIndicator: (baseStyles) => ({
        ...baseStyles,
        color: "#000000",
      }),
      menu: (baseStyles) => ({
        ...baseStyles,
        width: "181px",
        borderRadius: "0",
        overflowY: "scroll",
      }),
      option: (baseStyles, state) => ({
        ...baseStyles,
        backgroundColor: state.isFocused ? "#F0EFEF" : "",
        color: state.isSelected ? "#000000" : "",
      }),
    }}
    placeholder={<div className="placeholder">RUB</div>}
    components={{
      IndicatorSeparator: () => null,
    }}
  />
);

export default MyComponent;
