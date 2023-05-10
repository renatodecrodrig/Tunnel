import { CircularProgress, FormControlLabel, Radio, RadioGroup, Typography } from '@mui/material'
import { Form, Formik } from 'formik';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { CustomField } from '../../../components';
import { RootState } from '../../../store';
import { createCompanies, handleField, nextStep } from '../../../store/companies';
import arrayToObject from '../../../utils/toObject';
import { profile, profileType } from './schema';

const Profile = () => {

  const dispatch = useDispatch()
  const { companies } = useSelector((store: RootState) => store)

  const initialValues: profileType = {
    website: "",
    company: "",
    role: "",
    haveNewsletter: true,
    subscribers: "",
    audience: "",
    ableToInvest: false
  };

  
  const onSubmit = async (values: profileType) => {
    console.log("values", { ...companies, ...values})
    dispatch(handleField({...values}))
    const val = arrayToObject({ ...companies, ...values})
    // @ts-ignore
    dispatch(createCompanies(val))
  };

return (
  <div className='lg:w-5/12 mx-auto sm:w-10/12 md:w-8/12 [&>*]:my-6'>
    <div className='fc-jc-ic gap-4'>
      {/* content section */}
      <div className='sm:w-10/12 lg:w-full text-center'>
        <Typography variant='h4'>Final Step!</Typography>
        <Typography variant='subtitle1'>Tell us more about your email marketing setup and goals by filling out your profile information.</Typography>
      </div>

      {/* form section */}
      <Formik
        initialValues={initialValues}
        validationSchema={profile}
        onSubmit={onSubmit}
      >
        {
          ({ errors, touched, isSubmitting }) => (
            <Form className='[&>div]:my-6 mx-6'>
              {/* website, company, role fields */}
              <div>
                {
                  [
                    { label: "Enter Your Website URL*", name: "website" },
                    { label: "Enter Your Company Name*", name: "company" },
                    { label: "What’s Your Role In the Business*", name: "role" },
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
              </div>

              {/* newsletter section */}
              <div className='fc-jb-ic gap-2 [&>span]:text-rootblue'>
                <Typography id="demo-radio-buttons-group-label">
                  Do You Have a Newsletter?*
                </Typography>
                <RadioGroup>
                  <div
                    className='fr-jb-ic justify-start gap-4 h-12 [&>div>input]:mt-3 [&>div>input]:w-6 [&>div>input]:h-6 relative'
                  >
                    <div className='absolute h-full w-full' onClick={() => dispatch(handleField({ haveNewsletter: true }))}/>
                    <CustomField
                      name={"haveNewsletter"}
                      errors={errors}
                      touched={touched}
                      value={companies.haveNewsletter === true}
                      type="radio"
                    />
                    <Typography fontWeight={300}>I do have a newsletter (or several)</Typography>
                  </div>

                  <div
                    className='fr-jb-ic justify-start gap-4 h-12 [&>div>input]:mt-3 [&>div>input]:w-6 [&>div>input]:h-6 relative'
                  >
                    <div className='absolute h-full w-full' onClick={() => dispatch(handleField({ haveNewsletter: false }))}/>
                    <CustomField
                      name={"haveNewsletter"}
                      errors={errors}
                      touched={touched}
                      value={companies.haveNewsletter === false}
                      type="radio"
                    />
                    <Typography fontWeight={300}>I don’t, my <span className='font-bold'>Daily.ai</span> newsletter is the first one</Typography>
                  </div>
                </RadioGroup>
              </div>

              {/* subscribers */}
              <div>
                {
                  [
                    { label: "If Yes, How Many Subscribers Do You Have?", name: "subscribers" },
                    { label: "Describe the audience you intend to reach with your newsletter *", name: "audience" },
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
              </div>

              {/* abelity to investement section */}
              <div className='fc-jb-ic gap-2 [&>span]:text-rootblue'>
                <Typography fontWeight={600} variant="h5">
                  If we both decide your business is a fit for the Daily Early Adopters Program, the investment ranges between $500 - $1,000 a month*
                </Typography>
                <RadioGroup>
                  <div
                    className='fr-jb-ic justify-start gap-4 h-12 [&>div>input]:mt-3 [&>div>input]:w-6 [&>div>input]:h-6 relative'
                  >
                    <div className='absolute h-full w-full' onClick={() => dispatch(handleField({ ableToInvest: true }))}/>
                    <CustomField
                      name={"ableToInvest"}
                      errors={errors}
                      touched={touched}
                      value={companies.ableToInvest == true}
                      type="radio"
                      />
                    <Typography fontWeight={300}>Yes, I have money to invest in my business</Typography>
                  </div>

                  <div
                    className='fr-jb-ic justify-start gap-4 h-12 [&>div>input]:mt-3 [&>div>input]:w-6 [&>div>input]:h-6 relative'
                  >
                    <div className='absolute h-full w-full' onClick={() => dispatch(handleField({ ableToInvest: false }))}/>
                    <CustomField
                      name={"ableToInvest"}
                      errors={errors}
                      touched={touched}
                      value={companies.ableToInvest == false}
                      type="radio"
                    />
                    <Typography fontWeight={300}>No, I don't have money to invest in my business</Typography>
                  </div>
                </RadioGroup>
              </div>

              <div>
                {
                  companies.error
                    ? <Typography>{companies.error}</Typography>
                    :companies.loading
                      ? <CircularProgress />
                      : (
                        <button
                          type="submit" disabled={isSubmitting}
                          className="block mx-auto bg-rootblue p-3 w-full rounded-sm text-white"
                        >
                          Continue To Next Step
                        </button>      
                      )
                }
              </div>

            </Form>
          )
        }
      </Formik>

    </div>

  </div>
  )
}

export default Profile