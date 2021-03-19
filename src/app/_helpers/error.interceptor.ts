import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthenticationService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if ([401, 403].includes(err.status) && this.authenticationService.userValue) {
                // auto logout if 401 or 403 response returned from api
                this.authenticationService.logout();
            }

            const error = (err && err.error && err.error.message) || err.statusText;
            console.error(err);
            return throwError(error);
        }))
    }
}


// by implementing the HttpInterceptor interface you can create a custom interceptor to catch all error responses from the
//  server in a single location.

// The Error Interceptor intercepts http responses from the api to check if there were any errors.
//  If the response is 401 Unauthorized or 403 Forbidden, the user is automatically logged out of the application,
//   all other errors are logged
//  to the console and re-thrown up to the calling service so an alert with the error can be displayed in the UI.


// old Version
// return next.handle(request).pipe(catchError( err => {
//     if (err.status === 401) {
//         this.authenticatedService.logout();
//     }
//         const error = err.error.message || err.statusText;
//         return throwError(error);
    
//  } ));