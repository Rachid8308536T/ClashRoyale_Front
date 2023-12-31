import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent {
  showButton = false;
  videoUrl = "../assets/ressources/Intro3.mp4";
  videoDuration: number = 50;

  constructor(private router: Router) {}

  InsideVideo() {
    this.showButton = true;
  }

  OutsideVideo() {
    this.showButton = false;
  }


  redirection() {
    this.router.navigate(['/Accueil']);
  }


  onVideoTimeUpdate(event: Event) {
    const videoElement = event.target as HTMLVideoElement;
    const currentTime = videoElement.currentTime;

    if (currentTime >= 49) {
      this.redirection();
    }
  }
}
