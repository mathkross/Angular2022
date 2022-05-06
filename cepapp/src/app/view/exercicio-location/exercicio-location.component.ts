import { Component, OnInit } from '@angular/core';
import { TimeZoneService } from 'src/app/services/time-zone.service';
import { Location } from 'src/app/Model/location';
@Component({
  selector: 'app-exercicio-location',
  templateUrl: './exercicio-location.component.html',
  styleUrls: ['./exercicio-location.component.css']
})
export class ExercicioLocationComponent implements OnInit {
area = '';
location?: Location;
locationInput = '';
  constructor(private endService: TimeZoneService) { }

  ngOnInit(): void {
  }

  consultarLocation()
  {
    this.endService.obterLocation(this.area, this.locationInput).subscribe(location => {
      this.location = location;
    });
  }
}
