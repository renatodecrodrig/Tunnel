import { Typography } from '@mui/material';
import { Form, Formik } from 'formik';
import Image from 'next/image';
import React from 'react'
import { CustomField } from '../../../components';
import { signup, type signupType } from './schema';
import ai from "public/ai.png"
import { handleField, initialState, nextStep, selectState } from '../../../store/companies';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {

  const dispatch = useDispatch()
  const state = useSelector(selectState)

  const initialValues: signupType = {
    firstName: '',
    lastName: '',
    email: '',
    newsletter: true,
  };
  
  const onSubmit = (values: signupType) => {
    console.log("values", values)
    dispatch(handleField(values))
    dispatch(nextStep())
  };

  return (
    <div className='md:w-8/12 sm:w-10/12 lg:w-5/12 mx-auto [&>*]:my-6'>

      {/* content section */}
      <div className='text-center mx-2'>
        <Typography variant='h4'>Let’s Get Started!</Typography>
        <Typography>Simply provide your name and email to get started with the Daily.ai platform.</Typography>
      </div>

      {/* form section */}
      <Formik
        initialValues={initialValues}
        validationSchema={signup}
        onSubmit={onSubmit}
      >
        {
          ({ errors, touched, isSubmitting }) => (
            <Form className='[&>div]:my-4 w-10/12 m-auto'>
              {
                [
                  { label: "Enter Your First Name*", name: "firstName" },
                  { label: "Enter Your Last Name*", name: "lastName" },
                  { label: "Enter Your Email*", name: "email" },
                ].map(({label, name}, index) => (
                  <CustomField
                    label={label}
                    name={name}
                    key={index}
                    errors={errors}
                    touched={touched}
                  />
                ))
              }

              <button
                type="submit"
                disabled={isSubmitting}
                className="block mx-auto bg-rootblue p-3 w-full rounded-sm text-white disabled:bg-blue-200"
              >
                Continue To Next Step
              </button>

              <div className='[&>*]:my-2'>

                <Typography className='font-bold text-rootblue'>*Requiered fields</Typography>

                <div className='fr-jb-ic justify-start h-20 -my-4 gap-2 [&>span]:text-rootblue [&>div>input]:w-5 [&>div>input]:h-5 relative'>
                  <div className='absolute h-full w-full z-10' onClick={() => dispatch(handleField( {newsletter: !state.companies.newsletter }))}/>
                  <CustomField
                    type='checkbox'
                    name={"newsletter"}
                    errors={errors}
                    touched={touched}
                    // @ts-ignore
                    checked={state.companies.newsletter}
                  />
                  <label htmlFor="newsletter" id="newsletter" className='font-bold absolute top-5 left-10'>
                    Subscribe To “AI Insider” Newsletter
                  </label>
                </div>

                <div className='fr-jb-ic items-start'>
                  <Image src={ai} alt='ai' className='w-2/3 p-3 pb-4' />
                  <Typography className='mt-4'>
                    Stay ahead of the AI innovation curve with AI Insider, <span className='font-bold'>the first AI-written</span>
                    and distributed newsletter, powered by, you guessed it, cutting-edge AI technology.
                  </Typography>
                </div>

              </div>
            </Form>
          
          )
        }
      </Formik>

    </div>

  )
}

export default Signup
