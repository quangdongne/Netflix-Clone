import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService =  inject(LoginService);
  const router = inject(Router);
  
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(!loginService.isLoggedIn){
     return router.createUrlTree(['/login']);
    }
    else{
      return true;
    }
 
};
