import { Component, inject, Inject } from '@angular/core';
import { BG_URL, LOGIN_URL } from '../../constants/config';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule,HeaderComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  bgURL = BG_URL;
  email!:string;
  password!:string;
  loginService=inject(LoginService);
  router = inject(Router);
  toasterService = inject(ToastrService);
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    if(this.loginService.isLoggedIn){
      this.router.navigateByUrl('/browse');
    }
  }
onSubmit(){
  //validiate
  if(!this.email || !this.password){
    this.toasterService.error('Nhập tài khoản và mật khẩu');
    return;
  }
  //login
  this.loginService.login(this.email, this.password);
  this.toasterService.success('Đăng nhập thành công!!');
  this.router.navigateByUrl('/browse');

}


}


