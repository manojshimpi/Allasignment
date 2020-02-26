import { Component, OnInit } from '@angular/core';
import { SocialloginService } from './sociallogin.service';
import { NgxSpinnerService} from 'ngx-spinner';
import { takeUntil } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sociallogin',
  templateUrl: './sociallogin.component.html',
  styleUrls: ['./sociallogin.component.css']
})
export class SocialloginComponent implements OnInit {
  videos: any[];
  
  unsubscribe$:Observable<any>;

  constructor(private spinner: NgxSpinnerService, private SocialloginService: SocialloginService) { }
  
  ngOnInit() {
    
    this.spinner.show()

    setTimeout(()=>
    {
      this.spinner.hide()
    },3000)
    
    this.videos = [];
    
    this.SocialloginService.getVideosForChanel('UCF0-VQwaifmvwWlv_J3-puw', 15).pipe(takeUntil(this.unsubscribe$)).subscribe(lista => {
    for (let element of lista["items"]) 
    {
      //console.log("manoj shimpi")
      this.videos.push(element)
    }
    });
    }

}
