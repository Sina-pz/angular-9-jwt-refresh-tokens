import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';

// array in local storage for users
const usersKey = 'angular-9-jwt-refresh-token-users';
const users = JSON.parse(localStorage.getItem(usersKey)) || [];

// add test user and save if users array is empty
if (!users.length) {
    users.push({ id: 1, firstName: 'Test', lastName: 'User', username: 'test', password: 'test', refreshTokens: [] });
    localStorage.setItem(usersKey, JSON.stringify(users));
}
// database old version
// const users: User[] = [{ id: 1, username: 'test', password: 'test', firstName: 'Test', lastName: 'User' }];
@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const { url, method, headers, body } = request;

        // wrap in delayed observable to simulate server api call
        return of(null)
            .pipe(mergeMap(handleRoute))
            .pipe(materialize()) // call materialize and dematerialize to ensure delay even if an error is thrown (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(delay(500))
            .pipe(dematerialize());

        function handleRoute() {
            switch (true) {
                case url.endsWith('/users/authenticate') && method === 'POST':
                    return authenticate();
                // see if he is true 2- return user with jwtToken: generateJwtToken =>  `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`
                // ok  generateJwtToken => return token = new Date().getTime().toString();
                case url.endsWith('/users/refresh-token') && method === 'POST':
                    return refreshToken();

                // getRefreshToken from cookie
                // find if user has this token
                // delete this old token from token list
                // generateRefreshToken and push it in tokenList it is valid for 7 day
                case url.endsWith('/users/revoke-token') && method === 'POST':
                    return revokeToken();
                case url.endsWith('/users') && method === 'GET':
                    return getUsers();
                default:
                    // pass through any requests not handled above
                    return next.handle(request);
                // case url.endsWith('/users/authenticate') && method === 'POST':
                //     return authenticate();
                // case url.endsWith('/users') && method === 'GET':
                //     return getUsers();
                // default:
                // pass through any requests not handled above
                //return next.handle(request);
            }
        }

        // route functions

        function authenticate() {
            const { username, password } = body;
            const user = users.find(x => x.username === username && x.password === password);

            if (!user) return error('Username or password is incorrect');

            // add refresh token to user
            user.refreshTokens.push(generateRefreshToken());
            localStorage.setItem(usersKey, JSON.stringify(users));

            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                jwtToken: generateJwtToken()
            })
        }

        function refreshToken() {
            const refreshToken = getRefreshToken();
            // get refresh token from cookie
            // cookie: "fakeRefreshToken=1615926245474"
            if (!refreshToken) return unauthorized();

            const user = users.find(x => x.refreshTokens.includes(refreshToken));

            if (!user) return unauthorized();

            // replace old refresh token with a new one and save
            user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
            user.refreshTokens.push(generateRefreshToken());
            localStorage.setItem(usersKey, JSON.stringify(users));

            return ok({
                id: user.id,
                username: user.username,
                firstName: user.firstName,
                lastName: user.lastName,
                jwtToken: generateJwtToken()
            })
        }

        function revokeToken() {
            if (!isLoggedIn()) return unauthorized();

            const refreshToken = getRefreshToken();
            const user = users.find(x => x.refreshTokens.includes(refreshToken));

            // revoke token and save
            user.refreshTokens = user.refreshTokens.filter(x => x !== refreshToken);
            localStorage.setItem(usersKey, JSON.stringify(users));

            return ok();
        }

        function getUsers() {
            if (!isLoggedIn()) return unauthorized();
            return ok(users);
        }

        // helper functions

        function ok(body?) {
            return of(new HttpResponse({ status: 200, body }))
        }

        function error(message) {
            return throwError({ error: { message } });
        }

        function unauthorized() {
            return throwError({ status: 401, error: { message: 'Unauthorized' } });
        }
        // The btoa() method encodes a string in base-64.
        // Use the atob() method to decode a base-64 encoded string.
        function isLoggedIn() {
            // check if jwt token is in auth header
            const authHeader = headers.get('Authorization');
            if (!authHeader.startsWith('Bearer fake-jwt-token')) return false;

            // check if token is expired
            const jwtToken = JSON.parse(atob(authHeader.split('.')[1]));
            const tokenExpired = Date.now() > (jwtToken.exp * 1000);
            if (tokenExpired) return false;

            return true;
        }

        function generateJwtToken() {
            // create token that expires in 15 minutes
            const tokenPayload = { exp: Math.round(new Date(Date.now() + 15 * 60 * 1000).getTime() / 1000) };
            // tokenPayload = {exp: 1615928343}
            return `fake-jwt-token.${btoa(JSON.stringify(tokenPayload))}`;
        }

        function generateRefreshToken() {
            const token = new Date().getTime().toString();

            // add token cookie that expires in 7 days
            const expires = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toUTCString();
            document.cookie = `fakeRefreshToken=${token}; expires=${expires}; path=/`;

            return token;
        }

        function getRefreshToken() {
            // get refresh token from cookie
            // cookie: "fakeRefreshToken=1615926245474"
            return (document.cookie.split(';').find(x => x.includes('fakeRefreshToken')) || '=').split('=')[1];
        }
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};



// inventory.find(e => e.name === 'apples'); // { name: 'apples', quantity: 2 } 

// The fake backend contains a handleRoute function that checks if the request matches one of the faked routes in the switch statement,
//  at the moment this includes requests for handling authentication, refreshing tokens, revoking tokens, and getting all users.
//   Matching requests are intercepted and handled by one of the below 
  // route functions, non-matching requests are sent through to the real backend by calling next.handle(request);.
//    Below the route functions there are
    // helper functions for returning different response types and performing 
//    other tasks such as generating and validating jwt and refresh tokens.