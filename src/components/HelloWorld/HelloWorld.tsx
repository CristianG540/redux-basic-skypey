import React from 'react'
import PropTypes, { InferProps } from 'prop-types'

const HelloWorld = ({ tech }: InferredProps): JSX.Element => {
  return (
    <div className='hello-world'>
      Hello World <span className='hello-world__tech'>{tech}!</span>
    </div>
  )
}

const propTypes = {
  tech: PropTypes.string.isRequired
}
type InferredProps = InferProps<typeof propTypes>
HelloWorld.propTypes = propTypes

export default HelloWorld
