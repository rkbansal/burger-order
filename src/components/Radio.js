import React from "react";
import { Radio } from 'antd';
const RadioButton = ({value, setValue, options, title}) => {
  const onChange = e => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  return (
      <div className="row">
        <div className="title">{title}</div>
        <Radio.Group onChange={onChange} value={value}>
            {options.map((option) => <Radio value={option}>{option}</Radio>)}
        </Radio.Group>
    </div>
  );
};

export default RadioButton;