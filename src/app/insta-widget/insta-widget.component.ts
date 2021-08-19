import { Component, OnInit } from '@angular/core';
import { InstagramService } from '../services/instagram/instagram.service';
import { IgUserDto } from '../shared/dtos/ig-user.dto';
import { BusinessIgAccMediaDto } from '../shared/dtos/business-ig-acc-media.dto';
import { InstagramMediaTypeEnum } from '../shared/enums/instagram-media-type.enum';
import { onWindowLoad } from '../shared/helpers/on-window-load.function';

@Component({
  selector: 'insta-widget',
  templateUrl: './insta-widget.component.html',
  styleUrls: ['./insta-widget.component.scss']
})
export class InstaWidgetComponent implements OnInit {

  public profile: IgUserDto;
  public media: BusinessIgAccMediaDto[] = [];
  public readonly mediaType: typeof InstagramMediaTypeEnum = InstagramMediaTypeEnum;

  constructor(private instagramService: InstagramService) { }

  ngOnInit(): void {
    onWindowLoad(this, () => {
      this.getProfileData();
      this.getMedia();
    });
  }

  private getProfileData() {
    this.instagramService.getProfileData().subscribe(response => this.profile = response.data);
  }

  private getMedia() {
    this.instagramService.getMedia().subscribe(response => this.media = response.data);
  }
}
