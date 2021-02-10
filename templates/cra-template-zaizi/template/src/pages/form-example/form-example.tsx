import React, { useState } from "react";
import ReactDOM from "react-dom";
import './styles.scss';

export const FormExample = () => {
  
  const [textValue, setTextValue] = useState<string>();

  return (<>  <form>
<input/>
</form>
  <div>{textValue}</div>
  </>
)};

export default FormExample;