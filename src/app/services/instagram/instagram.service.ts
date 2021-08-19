import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IgUserDto } from '../../shared/dtos/ig-user.dto';
import { API_HOST } from '../../shared/constants';
import { ResponseDto } from '../../shared/dtos/response.dto';
import { BusinessIgAccMediaDto } from '../../shared/dtos/business-ig-acc-media.dto';

@Injectable({
  providedIn: 'root'
})
export class InstagramService {

  constructor(private http: HttpClient) { }

  getProfileData() {
    return this.http.get<ResponseDto<IgUserDto>>(`${API_HOST}/api/v1/instagram/profile`);
  }

  getMedia() {
    return this.http.get<ResponseDto<BusinessIgAccMediaDto[]>>(`${API_HOST}/api/v1/instagram/media`);
  }
}
