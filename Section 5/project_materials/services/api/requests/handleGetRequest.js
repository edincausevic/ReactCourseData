import { getDB } from "../db";

// GET request handler
export default function handleGetRequest({endpoint, resolve, reject, createResponse, headers}) {
    const db = getDB();
    let apartments = db.apartments;

    const endpointParts = endpoint.split('?')
    const endpointPath = endpointParts[0];
    const queryParams = endpointParts[1];
    
    switch (endpointPath) {
        // case '/users':
        //     let users = db.users;
        //     // Simple filtering by query parameters
        //     if (queryParams.has('id')) {
        //         users = users.filter(user => user.id == queryParams.get('id'));
        //     }
        //     if (queryParams.has('email')) {
        //         users = users.filter(user => user.email === queryParams.get('email'));
        //     }
        //     resolve(createResponse(users, 200, { 'x-total-count': users.length }));
        //     break;
        
            
        case '/api/apartments':
            
            const url = new URL(endpoint, `http://fakedomain.com/`);
            
            const page = parseInt(url.searchParams.get('page')) || 1;
            const limit = parseInt(url.searchParams.get('limit')) || 6;
            
            // Filter parameters
            const location = url.searchParams.get('location');
            const price = url.searchParams.get('price');
            const apartment = url.searchParams.get('apartment');
            const house = url.searchParams.get('house');
            const pool = url.searchParams.get('pool');
            const checkin = url.searchParams.get('checkin');
            const checkout = url.searchParams.get('checkout');
            
            let filteredApartments = [...apartments];
            
            // Apply filters if parameters are provided
            if (location) {
                filteredApartments = filteredApartments.filter(apt => 
                    apt.location.toLowerCase().includes(location.toLowerCase())
                );
            }
            
            if (price) {
                const maxPrice = parseInt(price);
                filteredApartments = filteredApartments.filter(apt => apt.price <= maxPrice);
            }
            
            // Filter by property type
            const propertyTypes = [];
            if (apartment === 'on') propertyTypes.push('Apartment', 'Studio', 'Condo', 'Loft', 'Penthouse');
            if (house === 'on') propertyTypes.push('Townhouse', 'Brownstone', 'Cottage');
            
            if (propertyTypes.length > 0) {
                filteredApartments = filteredApartments.filter(apt => 
                    propertyTypes.includes(apt.type)
                );
            }
            
            // Filter by amenities
            if (pool === 'on') {
                filteredApartments = filteredApartments.filter(apt => 
                    apt.amenities.includes('Pool')
                );
            }

            
            // Calculate pagination
            const startIndex = (page - 1) * limit;
            const endIndex = startIndex + limit;
            const paginatedApartments = filteredApartments.slice(startIndex, endIndex);
            
            // Set pagination headers
            const totalPages = Math.ceil(filteredApartments.length / limit);

            const resData = {
                data: paginatedApartments,
                pagination: {
                    total_count: filteredApartments.length,
                    totalPages,
                    page, 
                    limit,
                    hasNext: page < totalPages,
                    hasPrev: page > 1
                }
            }

            resolve(createResponse(resData, 200, { 'x-total-count': apartments.length }));
            break;
        
        case '/api/favorite_apartments':
            const favoriteApartments = apartments.filter(apartment => apartment.favorite)

            resolve(createResponse(favoriteApartments, 200, { 'x-total-count': favoriteApartments.length }));
            break;
        case '/api/popular':
            const popularApartments = apartments.filter(apartment => apartment.rating > 4.9)
            
            resolve(createResponse(popularApartments, 200, { 'x-total-count': popularApartments.length }));
            break;
            
        // case '/posts':
        //     let posts = db.posts;
        //     if (queryParams.has('userId')) {
        //         posts = posts.filter(post => post.userId == queryParams.get('userId'));
        //     }
        //     resolve(createResponse(posts, 200, { 'x-total-count': posts.length }));
        //     break;
            
        // case '/comments':
        //     let comments = db.comments;
        //     if (queryParams.has('postId')) {
        //         comments = comments.filter(comment => comment.postId == queryParams.get('postId'));
        //     }
        //     resolve(createResponse(comments, 200, { 'x-total-count': comments.length }));
        //     break;
            
        default:
            resolve(createResponse({ 
                error: 'Endpoint not found',
                message: `The requested resource ${endpoint} was not found`
            }, 404));
    }
}
