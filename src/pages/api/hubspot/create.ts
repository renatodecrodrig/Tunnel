import type { NextApiRequest, NextApiResponse } from "next";
import hubspotClient from "./config";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  // create a new company goes here
  try {
    const company = await JSON.parse(req.body)
    
    const body = {
      name: company.company,
      // hubspot_owner_id: `${company.firstName} ${company.lastName}`,
      // lastname: company.lastName,
      email: company.email,
      newsletter: company.newsletter,
      time_zone: company.timeZone,
      meeting: `${company.meeting.date.slice(0, 10)} ${company.meeting.hour}`,
      website: company.website,
      businessrole: company.role,
      havenewsletter: company.haveNewsletter,
      subscribers: company.subscribers,
      audience: company.audience,
      investment: company.ableToInvest
    }

    const createdCompany = await hubspotClient.crm.companies.basicApi.create({properties: body});

    res.status(201).json(createdCompany);
    // res.status(404)
  } catch (error: any) {
    console.log(error.message)
    res.status(400).send(error.message)
  }
}