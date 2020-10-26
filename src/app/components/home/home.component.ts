import { Component, OnInit } from '@angular/core';
import { RandomUserService } from '../../services/random-user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myUsers: any[] = [];
  error: boolean;
  errorMessage: string;
  loading: boolean = false;

  constructor(private user: RandomUserService) {}

  ngOnInit(): void {
    this.loading = true;
    this.user.getRandomUser()
    .subscribe( (data: any) => {
      console.log('Mostrando los datos', data);
      this.myUsers = data.results;
      console.log('MyUsers', this.myUsers);
      this.loading = false;
    }, (error) => {
      this.loading = false;
      this.error = true;
      this.errorMessage = error.message;
      // console.log('El error que se ha producido es:', error);
    } );
  }

}
