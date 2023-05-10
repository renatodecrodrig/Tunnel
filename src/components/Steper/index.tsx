import { Step, StepLabel, Stepper } from '@mui/material'
import { NextPage } from 'next'
import React from 'react'

interface Props {
  active?: number | undefined
}

const index: NextPage<Props> = ({ active }) => {

  const steps = ["🚀  Signup", "🗓️  Meeting", "🙂  Profile", "🙌  Welcome"]

  return (
    <div className='lg:w-8/12 mx-auto  sm:w-5/6'>
      <Stepper alternativeLabel activeStep={active}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </div>
  )
}

export default index