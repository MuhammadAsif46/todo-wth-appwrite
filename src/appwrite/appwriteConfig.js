import { Client, Account, Databases } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject("6644da7700067a0b466b");

  export const account = new Account(client)

//   Database
  export const databases = new Databases(client,"6644dcd20016b8e86331")