/**
 * 1. after successful login: generate a jwt token
 * npm i jsonwebtoken, cookie-parser
 * jwt.sign(payload,secrete,{expiresIn: '1d'})
 * 
 * 2. send token (generated in the server side) to the client side
 * localstorage ---> easier
 * 
 * httpOnly cookies ---> better
 * 
 * 
 * 3. for sensitive or secure or private or protected apis: send toke to the server side
 * 
 * on the server side
 * app.use(cors({
   origin: ['http://localhost:5173'],// access for react frontend url
   credentials: true // enable cookies from react client
 })); 

 * 
  in the client side
  use asios get,post,delete, for secure apis and must use: {withCredentials: true}
 * 4. validate the token in the server side:
 * if  valid : provide data
 * if not valid : logout
 * 
 * 5. check right user accesing his / her own data based permision
 */