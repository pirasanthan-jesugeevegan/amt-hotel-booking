// import createClient directly
import { createClient } from "contentful";

export default createClient({
  // This is the space ID. A space is like a project folder in Contentful terms
  space: "3m7jkjbucox6",
  // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
  accessToken: "ddDo5dXUKrBvKTz7kzaVADaun8vAXu-oGyyzhgb3Yy4"
});
