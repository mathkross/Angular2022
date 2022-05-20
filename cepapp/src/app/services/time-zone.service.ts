import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Location} from '../Model/location';
@Injectable({
  providedIn: 'root'
})
export class TimeZoneService {

  constructor(private http: HttpClient)
  {
  }
  obterLocation(area: string, locationInput: string): Observable<Location>
  {
    const locationFixed = locationInput.replace(/[ ]/g, "_") // rejex para pegar os espaços e trocar por _
    return this.http.get<Location>(`http://worldtimeapi.org/api/timezone/${area}/${locationFixed}`);
  }
}
