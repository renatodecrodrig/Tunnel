import { Typography } from '@mui/material'
import { Field, FieldConfig, FormikErrors, FormikTouched, useField } from 'formik'
import { NextPage } from 'next'
import React, { ReactNode } from 'react'

interface Props extends FieldConfig {
  label?: string,
  errors: FormikErrors<any>,
  touched: FormikTouched<any>
}

const index: NextPage<Props> = ({ label, errors, touched, ...props }) => {

  return (
    <div className='h-24'>
      {
        label && <label htmlFor={props.name}>{label}</label>
      }
      <br/>
      <Field
        className={`block w-full mt-2 p-2 border-2 rounded-sm ${errors[props.name] && touched[props.name] ? "border-red-400" : "border-rootblue"}`}
        {...props}
        name={props.name}
      />
      {
        errors[props.name] && touched[props.name] 
          //@ts-ignore 
          ? <Typography className='font-normal text-sm text-red-500'>{errors[props.name]}</Typography>
          : null
      }
      
    </div>
  )
}

export default index