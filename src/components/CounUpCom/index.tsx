import React from 'react'
import CountUp from 'react-countup'
import VisibilitySensor from "react-visibility-sensor"

type PropType = {
    end:number,
    duration:number
}

const index = React.memo((props:PropType) => {
  return <CountUp end={props.end} redraw={true}>
  {({ countUpRef, start }) => (
      <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
      </VisibilitySensor>
  )}
  
</CountUp>
})

export default index