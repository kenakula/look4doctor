import { buildConfig } from 'payload/config';
import path from 'path';
import UsersCollection from './collections/users.collection';
import GlobalSettings from './globals/global-settings';
import MediaCollection from './collections/media.collection';

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_BASE_DNS,
  admin: {
    user: UsersCollection.slug,
  },
  rateLimit: {
    trustProxy: true,
  },
  globals: [GlobalSettings],
  collections: [UsersCollection, MediaCollection],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
