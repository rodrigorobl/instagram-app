import { createClient } from "pexels";

const apikey = import.meta.env.VITE_KEY_API_PEXELS;

const client = createClient(apikey);

export const getPhotos = async (photosPerPage, callback) => {
  let response = [];

  try {
    response = await client.photos.curated({
      page: 1,
      per_page: photosPerPage,
    });
    return response?.photos;
  } catch (error) {
    console.log(error);
  }finally {
    callback();
  }
};
