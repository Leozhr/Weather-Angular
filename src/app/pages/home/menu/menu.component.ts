import { Component, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  forms: FormGroup;
  local: string;
  map: any;
  temp: number;
  icon: string;

  @Input() change: string;

  constructor(private location: ApiService, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.local = 'brasil';
    this.Location();
    this.forms = this.fb.group({
      result: ['', Validators.required],
    });
  }

  Search(city: HTMLInputElement) {
    if (this.forms.valid) {
      this.local = city.value;
      this.Location();
    }
  }

  Location() {
    this.location.Weather(this.local).subscribe({
      next: (result) => {
        this.map = result;
        this.temp = parseInt(this.map.main.temp);
        this.icon = `http://openweathermap.org/img/wn/${this.map.weather[0].icon}@2x.png`;
      },
      error: () => {},
    });
  }
}
