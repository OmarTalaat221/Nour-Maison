

import React from 'react'
import "./style.scss"
import cx from "classnames"
const SolidCheckbox = ({onChange , small , ...rest}) => {
  return (
<div className="content">
  <label className={cx("checkBox" , {"small": small})}>
    <input onChange={onChange} id="ch1" type="checkbox" {...rest} />
    <div className="transition"></div>
  </label>
</div>
  )
}

export default SolidCheckbox