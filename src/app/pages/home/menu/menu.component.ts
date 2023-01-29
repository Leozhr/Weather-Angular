import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';
import { locateSearch } from 'src/interface/weather';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  forms: FormGroup;
  city: string;
  map: any;
  temp: any;
  $string: HTMLInputElement;

  constructor(private location: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.forms = this.fb.group({
      result: ['', Validators.required],
    });
  }

  Search(city: HTMLInputElement) {
    if (this.forms.valid) {
      this.location.Weather(city.value).subscribe({
        next: (result) => {
          this.map = result;
          this.temp = parseInt(this.map.main.temp);
          console.log(this.map);
        },
        error: () => {
          (err) => console.log(err);
        },
      });
    }
  }
}
