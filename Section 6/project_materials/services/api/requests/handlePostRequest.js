import { getDB, updateDB } from "../db";
import { generateToken } from "../util/generateToken"
import { calculateQuizResults } from "../util/calculateQuizResults"

// POST request handler
export default function handlePostRequest(endpoint, body, resolve, reject, createResponse) {
    const db = getDB();
  
    try {
        const data = typeof body === 'string' ? JSON.parse(body) : body;
        
        
        switch (endpoint) {
            case '/api/register':
            
                // does user exist
                const userExists = db.users.find(user => user.email === data.email)
        
                if(userExists) { 
                    resolve(createResponse({ error: 'An account with this email already exists. Would you like to log in instead?' }, 409));
                }else {

                    const newUser = {
                        id: Date.now(),
                        token: generateToken(),
                        ...data,
                        createdAt: new Date().toISOString()
                    };
                    db.users.push(newUser);
                
                    updateDB(db);
                    resolve(createResponse(newUser, 201));
                }
                break;
            case '/api/login':
             
                //does user exist
                const user = db.users.find(user => user.email === data.login_email)
                
                // is password ok
                const isPasswordOk = db.users.some(user => user.password === data.login_password)
                
                if(!user) { 
                    resolve(createResponse({ error: 'No account exists with this email address.' }, 409));
                }
                if(!isPasswordOk) {
                    resolve(createResponse({ error: 'Incorrect password. Please check for typos or caps lock.' }, 409));
                }
                if(isPasswordOk && user) {
                    
                    resolve(createResponse(user, 201));
                }

                
                break;
            case '/api/verify_token':

                // does user exist
                const tokenUser = db.users.find(user => user.token === data.token)

                if(!tokenUser) {
                    resolve(createResponse({
                        success: false,
                        message: "Invalid token"
                    }, 401));
                }else {

                    resolve(createResponse({
                        user: tokenUser,
                        success: true,
                        message: "Token is valid"
                    }, 200));
                }

                break;
            case '/api/all_quiz_questions':
                
                    if(data.quizId === 'general_knowledge') {
                        
                         resolve(createResponse({
                             data: db.generalKnowledge,
                             success: true,
                         }, 200)); 
                    }
                    if(data.quizId === 'science_challenge') {
                         resolve(createResponse({
                            data: db.scienceChallenge,
                             success: true,
                         }, 200)); 
                    }
                    if(data.quizId === 'travel_geography') {
                         resolve(createResponse({
                                data: db.travelGeography,
                             success: true,
                         }, 200)); 
                    }

                break;
            case '/api/question':
                if(data.quizId === 'general_knowledge') {

                    const activeQuestions = db.generalKnowledge.find(question => question.id === data.id)
                            
                    resolve(createResponse({
                        activeQuestions: activeQuestions,
                        success: true,
                    }, 200)); 
                }
                if(data.quizId === 'science_challenge') {

                    const activeQuestions = db.scienceChallenge.find(question => question.id === data.id)
                            
                    resolve(createResponse({
                        activeQuestions: activeQuestions,
                        success: true,
                    }, 200)); 
                }
                if(data.quizId === 'travel_geography') {

                    const activeQuestions = db.travelGeography.find(question => question.id === data.id)
                            
                    resolve(createResponse({
                        activeQuestions: activeQuestions,
                        success: true,
                    }, 200)); 
                }

                break;
            case '/api/question_answer':
                if(data.quizId === 'general_knowledge') {
                    let generalKnowledgeQuestions = db.generalKnowledge;
                    
                    
                    generalKnowledgeQuestions.forEach(question => {
                        
                    
                        if(question.id === data.questionId) {
                            question.question.done = true;
                            
                            question.question.options.forEach(option => {
                                if(option.id === data.answerId) option.selected = true;
                                option.blocked = true
                            })
                        }
                    })
                    db.generalKnowledge  = generalKnowledgeQuestions
                    updateDB(db);
                }
                if(data.quizId === 'science_challenge') {
                    let scienceChallengeQuestions = db.scienceChallenge;
                    
                    
                    scienceChallengeQuestions.forEach(question => {
                        
                    
                        if(question.id === data.questionId) {
                            question.question.done = true;
                            
                            question.question.options.forEach(option => {
                                if(option.id === data.answerId) option.selected = true;
                                option.blocked = true
                            })
                        }
                    })
                    db.scienceChallenge  = scienceChallengeQuestions
                    updateDB(db);
                }
                if(data.quizId === 'travel_geography') {
                    let travelGeographyQuestions = db.travelGeography;
                    
                    
                    travelGeographyQuestions.forEach(question => {
                        
                    
                        if(question.id === data.questionId) {
                            question.question.done = true;
                            
                            question.question.options.forEach(option => {
                                if(option.id === data.answerId) option.selected = true;
                                option.blocked = true
                            })
                        }
                    })
                    db.travelGeography  = travelGeographyQuestions
                    updateDB(db);
                }
                        
                resolve(createResponse({
                    data: data,
                    success: true,
                }, 200)); 
                
                break;
            case '/api/block_question':

                if(data.quizId === 'general_knowledge') {
                    let generalKnowledgeQuestions = db.generalKnowledge;
                    
                    
                    generalKnowledgeQuestions.forEach(question => {
                        
                    
                        if(question.id === data.questionId) {
                            question.question.done = true;
                            
                            question.question.options.forEach(option => {
                                option.selected = false;
                                option.blocked = true
                            })
                        }
                    })
                    db.generalKnowledge  = generalKnowledgeQuestions
                    
                    updateDB(db);
                }
                if(data.quizId === 'science_challenge') {
                    let scienceChallengeQuestions = db.scienceChallenge;
                    
                    
                    scienceChallengeQuestions.forEach(question => {
                        
                    
                        if(question.id === data.questionId) {
                            question.question.done = true;
                            
                            question.question.options.forEach(option => {
                                option.selected = false;
                                option.blocked = true
                            })
                        }
                    })
                    db.scienceChallenge  = scienceChallengeQuestions
                    
                    updateDB(db);
                }
                if(data.quizId === 'travel_geography') {
                    let travelGeographyQuestions = db.travelGeography;
                    
                    
                    travelGeographyQuestions.forEach(question => {
                        
                    
                        if(question.id === data.questionId) {
                            question.question.done = true;
                            
                            question.question.options.forEach(option => {
                                option.selected = false;
                                option.blocked = true
                            })
                        }
                    })
                    db.travelGeography  = travelGeographyQuestions
                    
                    updateDB(db);
                }
                        
                resolve(createResponse({
                    data: data,
                    success: true,
                }, 200)); 

                break;
            case '/api/reset_quiz':
                if(data.quizId === 'general_knowledge') {
                    
                    let generalKnowledgeQuestions = db.generalKnowledge;
                    
                    generalKnowledgeQuestions.forEach(question => {
                    
                        question.question.done = false;
                        
                        question.question.options.forEach(option => {
                            option.selected = false;
                            option.blocked = false
                        })
                    })
                
                    db.generalKnowledge  = generalKnowledgeQuestions
                    updateDB(db);
                }
                if(data.quizId === 'science_challenge') {
                    
                    let scienceChallengeQuestions = db.scienceChallenge;
                    
                    scienceChallengeQuestions.forEach(question => {
                    
                        question.question.done = false;
                        
                        question.question.options.forEach(option => {
                            option.selected = false;
                            option.blocked = false
                        })
                    })
                
                    db.scienceChallenge  = scienceChallengeQuestions
                    updateDB(db);
                }
                if(data.quizId === 'travel_geography') {
                    
                    let travelGeographyQuestions = db.travelGeography;
                    
                    travelGeographyQuestions.forEach(question => {
                    
                        question.question.done = false;
                        
                        question.question.options.forEach(option => {
                            option.selected = false;
                            option.blocked = false
                        })
                    })
                
                    db.travelGeography  = travelGeographyQuestions
                    updateDB(db);
                }
                        
                resolve(createResponse({
                    data: {quiz: 'general_knowledge', reseted: true},
                    success: true,
                }, 200)); 

                break;
            case '/api/results':
                let results;
            
                if(data.quizId === 'general_knowledge') {
                    results = calculateQuizResults(db.generalKnowledge)
                }
                if(data.quizId === 'science_challenge') {
                    results = calculateQuizResults(db.scienceChallenge)
                }
                if(data.quizId === 'travel_geography') {
                    results = calculateQuizResults(db.travelGeography)
                }
                        
                resolve(createResponse({
                    data: results,
                    success: true,
                }, 200)); 

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