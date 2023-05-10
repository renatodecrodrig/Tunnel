import { createCompaniesType } from "../validationSchema/createCompanies"

const arrayToObject = (values: any) => {
  const { 
    firstName,
    lastName,
    email,
    meeting,
    newsletter,
    website,
    company,
    role,
    haveNewsletter,
    subscribers,
    audience,
    ableToInvest,
  } = values

  return {
    firstName,
    lastName,
    email,
    meeting,
    newsletter,
    website,
    company,
    role,
    haveNewsletter,
    subscribers,
    audience,
    ableToInvest,
  }
}

export const signupObject = (values: createCompaniesType) => {
  const { 
    firstName,
    lastName,
    email,
  } = values

  return {
    firstName,
    lastName,
    email,
  }
}

export const meetingObject = (values: createCompaniesType) => {
  const { 
    meeting
  } = values

  return {
    meeting
  }
}

export const profileObject = (values: createCompaniesType) => {
  const { 
    newsletter,
    website,
    company,
    role,
    haveNewsletter,
    subscribers,
    audience,
    ableToInvest,
  } = values

  return {
    newsletter,
    website,
    company,
    role,
    haveNewsletter,
    subscribers,
    audience,
    ableToInvest,
  }
}


export default arrayToObject