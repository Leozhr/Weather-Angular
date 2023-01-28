import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  map: any;
  temp: any;

  constructor(private location: ApiService) {}

  ngOnInit(): void {
    this.location.Weather().subscribe(
      (res) => {
        this.map = res;
        this.temp = parseInt(this.map.main.temp);
      },
      (err) => console.log(err)
    );
  }
}
