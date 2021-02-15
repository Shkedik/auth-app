import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  isLogin: boolean = true;
  constructor(private authService: AuthenticationService) { }

  ngOnInit(): void {

    this.authService.isLogin$
      .subscribe(data => {
        this.isLogin = data;
        console.log('data', data);
      })

  }

}
