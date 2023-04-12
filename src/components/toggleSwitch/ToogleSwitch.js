import React from 'react'

const ToogleSwitch = () => {
  return (
    <div>ToogleSwitch

{/* <!-- Rectangular switch --> */}
<label class="switch">
  <input type="checkbox"/>
  <span class="slider"></span>
</label>

{/* <!-- Rounded switch --> */}
<label class="switch">
  <input type="checkbox"/>
  <span class="slider round"></span>
</label>
    </div>
  )
}

export default ToogleSwitch