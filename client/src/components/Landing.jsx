import React, { useState } from 'react'
import Popup from './Popup';

const Landing = () => {

    const [active, setActive] = useState(false);

  return (
    <div>
        <button onClick={() => setActive(!active)}>CLICK ME</button>
        <Popup active={active} setActive={setActive} />
    </div>
  )
}

export default Landing