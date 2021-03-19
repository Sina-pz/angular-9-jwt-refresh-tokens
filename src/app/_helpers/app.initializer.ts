import { AuthenticationService } from '@app/_services';

export function appInitializer(authenticationService: AuthenticationService) {
    return () => new Promise(resolve => {
        // attempt to refresh token on app start up to auto authenticate
        authenticationService.refreshToken()
            .subscribe()
            // when we subscribe as it is lazy , it start doing action; so after subscribe the action is completed so we need to 
            // announce that it is completed
            // it is another action which is added by add(logic); logic : resolve=> meaning that it is completed
            .add(resolve);
    });
}

//
// authenticationService.refreshToken() to get a new JWT token from the api. If the user has logged in previously (without logging out)
//  and the browser still contains a valid refresh token cookie, they will be automatically logged in when the app loads.

// The call to the .subscribe() method triggers the request to the api, and the 
// .add() method is used for executing additional logic after the request completes (success or failure), so it works like a promise finally() method.

