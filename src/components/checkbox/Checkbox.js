import React from 'react'
import './checkbox.css'
const Checkbox = (props) => {
  const {label,onChange, name }=props
  return (
    <label className="check">{label}
    <input name={name} type="checkbox" onChange={onChange}/>
    <span className="checkmark"></span>
  </label>
  )
}

export default Checkbox

{/* <div>Checkbox
<label class="container">One
  <input type="checkbox" checked="checked"/>
  <span class="checkmark"></span>
</label>

<label class="container">Two
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

<label class="container">Three
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>

<label class="container">Four
  <input type="checkbox"/>
  <span class="checkmark"></span>
</label>
<input type="text" name="search" placeholder="Search.."></input>
    </div> */}