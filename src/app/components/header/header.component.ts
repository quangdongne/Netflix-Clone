import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LOGIN_URL } from '../../constants/config';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  logoURL = LOGIN_URL;

}
