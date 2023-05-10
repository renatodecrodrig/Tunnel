import { boolean, InferType, number, object, string } from 'yup';

export const companiesSchema = object().shape({
  firstName: string().required(),
  lastName: string().required(),
  email: string().email('Invalid email').required(),
  // phone: number().min(9).max(16).nullable(),
  website: string().url().required(),
  company: string().required(),
  // rolt: nativeEnum({business: "business", director: "director"}),
  role: string().required(),
  newsletter: boolean().required().isTrue(),
  haveNewsletter: boolean().required(),
  subscribers: number().nullable().required(),
  audience: string().required(),
  ableToInvest: boolean().required(),
  timeZone: string().required(),
  meeting: object({
    date: string().required(),
    hour: string().required()
  })
});

export type createCompaniesType = InferType<typeof companiesSchema>
