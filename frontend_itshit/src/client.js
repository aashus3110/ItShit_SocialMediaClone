import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const client = sanityClient({
  projectId: "75alhzhe",
  dataset: "production",
  apiVersion: "2023-10-22",
  useCdn: true,
  token:
    "sk6SkMpJcg7QZFOUWANrq0YXQsIRkTZZE4oVeej1lD5MKkQ97T9DdhsdPJN7zgIgn8ZE2KnKjWazbfoc9gTeMHNfL76oD4iLT8Yu7j3phreeLPVvrKStA46eOOXru7noTs00AQMYbIRHU994wmzZuNMXnIXS6Gmd0M09N7rg4PqsauDJEkWg",
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);

export default client;
