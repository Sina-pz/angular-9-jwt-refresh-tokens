import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthenticationService } from '@app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        //
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { 
        // redirect to home if already logged in
        if (this.authenticationService.userValue) { 
            this.router.navigate(['/']);
        }
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // get return url from route parameters or default to '/'

        // console.log(this.route.snapshot.queryParams['route'] || '*');
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '*';
        console.log(this.returnUrl);
        
        
    }

    // convenience getter for easy access to form fields
    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;

        // stop here if form is invalid
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;
        this.authenticationService.login(this.f.username.value, this.f.password.value)
            .pipe(first())
            .subscribe({
                next: () => {
                    this.router.navigate([this.returnUrl]);
                },
                error: error => {
                    this.error = error;
                    this.loading = false;
                }
            });
    }
}


// https://www.tektutorialshub.com/angular/angular-passing-parameters-to-route/
// We then learn how to pass the parameters to the route using the routerLink directive. 
// Finally, we learn how to retrieve the parameters using the ActivatedRoute Service
// The parameters can be retrieved by either using snapshot method or by subscribe method.

//The ActivatedRoute is a service, which keeps track of the currently activated route associated with the loaded Component.

// Using Snapshot :  this.id=this._Activatedroute.snapshot.paramMap.get("id");
// Using observable : 
// this._Activatedroute.paramMap.subscribe(params => { 
//     this.id = params.get('id'); 
// });


// We usually retrieve the value of the parameter in the ngOninit life cycle hook, when the component initialised.

// When the user navigates to the component again, the Angular does not create the new component but reuses
//  the existing instance. In such circumstances, the ngOnInit method of the component is not called again.
//  Hence you need a way to get the value of the parameter.