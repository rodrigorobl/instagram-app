export const getPhotos = async (photosPerPage, callback) => {
  const apikey = import.meta.env.VITE_KEY_API_PEXELS;
  const baseUrl = "https://api.pexels.com/v1/curated";

  let response = [];

  try {
    response = await fetch(`${baseUrl}?page=1&per_page=${photosPerPage}`, {
      mathod: "get",
      headers: new Headers({
        Authorization: apikey,
      }),
    })
      .then((response) => response.json())
      .then((data) => data.photos);

    return response;
  } catch (error) {
    console.log(error);
  } finally {
    callback();
  }

  return response;
};
