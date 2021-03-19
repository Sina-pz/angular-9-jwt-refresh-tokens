// import { AuthenticationService } from './../_services/authentication.service';
// import { environment } from './../../environments/environment';
// import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';



// // JWT interceptor

// import { Injectable } from "@angular/core";
// import { Observable } from 'rxjs';

// @Injectable()
// export class BasicAuthInterceptor implements HttpInterceptor  {
//     constructor(private authenticationService: AuthenticationService) {}
//     intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//          // add header with basic auth credentials if user is logged in and request is to the api url
//          const user = this.authenticationService.userValue;
//          const isLoggedIn = user && user.authdata;
//          const isApiUrl = request.url.startsWith(environment.apiUrl);
//          if (isLoggedIn && isApiUrl) {
//              request = request.clone({
//                  setHeaders: {
//                    Authorization:  `Basic $(user.authdata)`
//                  }
//              });
//          }
//          return next.handle(request);
//     }
// }