import React from 'react'

const CallOut = () => {
  return (
    <div>CallOut
        <div class="callout">
  <div class="callout-header">Callout Header</div>
  <span class="closebtn" onclick="this.parentElement.style.display='none';">&times;</span>
  <div class="callout-container">
    <p>Some text...</p>
  </div>
</div>
    </div>
  )
}

export default CallOut