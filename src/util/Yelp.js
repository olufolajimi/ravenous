const apiKey = 'YgjV2Rm-kBMn7ebBwi6tBDXWj2UpEMrM2f48MuKpLMZT6AWqCTRe88aeKYsE9vn1xoJyUHostucvO6_HkgFBDBiG3CetlNEV-uhONVpLGsky41W3Kp3g_qq_LSbVXnYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`,
        { headers: { 'Authorization': `Bearer ${apiKey}` } }
        ).then((response) => { 
            return response.json() 
        }).then((jsonResponse) => { 
            if (jsonResponse.businesses) {
                return jsonResponse.businesses.map((business) => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                } )
            }
         } ) 
    }
}

export { Yelp }