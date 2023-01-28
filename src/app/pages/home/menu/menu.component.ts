import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  map: any;

  constructor(private location: ApiService) {}

  ngOnInit(): void {
    this.location.Weather().subscribe(
      (res) => {
        console.log(res);
        this.map = res;
      },
      (err) => console.log(err)
    );
  }
}
