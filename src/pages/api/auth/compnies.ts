import type { NextApiRequest, NextApiResponse } from "next";
import { Client } from '@hubspot/api-client'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const hubspotClient = new Client({
    accessToken: process.env.API_KEY,
  });

  // create a new company goes here
  try {
    const company = {
      properties: {
        name: req.body.company,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        emails: req.body.email,
        newsletter: req.body.newsletter,
        timeZone: req.body.timeZone,
        date: req.body.meeting,
        websit_url: req.body.website,
        busnisserole: req.body.role,
        haveNewsletter: req.body.haveNewsletter,
        subscription: req.body.subscribers,
        audience: req.body.audience,
        investement: req.body.ableToInvest
      },
    };
    // const getAllProps = await hubspotClient.crm.schemas.publicObjectSchemasApi.purge("props");
    // console.log(getAllProps)

    const createdCompany = await hubspotClient.crm.companies.basicApi.create(company);
    console.log(company)

    res.status(201).json(createdCompany);
  } catch (error) {
    // @ts-ignore
    console.log(error.message)
    // @ts-ignore
    res.status(400).send(error.message)
  }
}