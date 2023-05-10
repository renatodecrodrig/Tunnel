import * as Yup from 'yup';

export const signup = Yup.object().shape({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  newsletter: Yup.boolean().isTrue("News letter is required"),
});

export const meeting = Yup.object().shape({
  meeting: Yup.object({
    timeZone: Yup.string().required(),
    date: Yup.string().required(),
    hour: Yup.string().required()
  })
})

export const profile = Yup.object().shape({
  website: Yup.string().required(),
  company: Yup.string().required(),
  role: Yup.string().required(),
  haveNewsletter: Yup.boolean().required(),
  subscribers: Yup.string().required(),
  audience: Yup.string().required(),
  ableToInvest: Yup.boolean().required(),
})

type profileType = Yup.InferType<typeof profile>
type signupType = Yup.InferType<typeof signup>
type meetingType = Yup.InferType<typeof meeting>

export type {
  profileType,
  signupType,
  meetingType
}