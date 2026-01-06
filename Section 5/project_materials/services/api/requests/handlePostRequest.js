import { getDB, updateDB } from "../db";

// POST request handler
export default function handlePostRequest(endpoint, body, resolve, reject, createResponse) {
    const db = getDB();
    
    try {
        const data = typeof body === 'string' ? JSON.parse(body) : body;
        
        switch (endpoint) {
            case '/api/users':
                const newUser = {
                    id: Date.now(),
                    ...data,
                    createdAt: new Date().toISOString()
                };
                db.users.push(newUser);
                updateDB(db);
                resolve(createResponse(newUser, 201));
                break;
            case '/api/favorite':

                const newApartments = db.apartments.map(item => {
                    if(data.id === item.id && !item.favorite)  return {...item, favorite: true}
                    if(data.id === item.id && item.favorite)  return {...item, favorite: false}
                    else return item
                })
              
                db.apartments = newApartments;
                
                updateDB(db);
                resolve(createResponse({id: data.id}, 201));
                break;
            case '/api/apartment':
                const apartment = db.apartmentData.filter(apartment => apartment.id === Number(data.id))
                
                updateDB(db);
                resolve(createResponse({...apartment[0]}, 200));
                break;
            case '/api/comments':
                const newComment = {
                    id: Date.now(),
                    ...data,
                    createdAt: new Date().toISOString()
                };
                db.comments.push(newComment);
                updateDB(db);
                resolve(createResponse(newComment, 201));
                break;
            default:
                resolve(createResponse({ error: 'Endpoint not found' }, 404));
        }
    } catch (error) {
        resolve(createResponse({ error: 'Invalid JSON body' }, 400));
    }
}