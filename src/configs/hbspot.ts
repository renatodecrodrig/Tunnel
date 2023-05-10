import { Client } from '@hubspot/api-client'

const hubspotClient = new Client({
  accessToken: process.env.API_KEY,
});

export default hubspotClient