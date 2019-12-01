const apiKey =
  "IwsaOEMdyi-f60lpyUkyETHTjqF0S2fAfUrFikqdr1Sv7MDaUi07-hSzWYEn9bzRG-l06CXuDim_DVXv6IOFpsS3zayibCTx4JwcBlBz-ljiHydrdY6fOb14v2WLXXYx";

const Yelp = {
  //retieves search results from Yelp API
  async searchYelp(term, location, sortBy) {
    const response = await fetch(
      //due to CORS restriction using https://cors-anywhere.herokuapp.com/
      `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
      { headers: { Authorization: `Bearer ${apiKey}` } }
    );
    const jsonResponse = await response.json();
    if (jsonResponse.businesses) {
      return jsonResponse.businesses.map(business => {
        return {
          id: business.id,
          imageSrc: business.image_url,
          name: business.name,
          address: business.location.address1,
          city: business.location.city,
          state: business.location.state,
          zipCode: business.location.zip_code,
          category: business.categories[0].title,
          rating: business.rating,
          reviewCount: business.review_count,
          isClosed: business.is_closed
        };
      });
    } else {
      alert("Could't find your request");

      window.location.reload();
    }
  }
};
export default Yelp;
