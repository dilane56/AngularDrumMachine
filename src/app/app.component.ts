import {Component, OnInit,HostListener} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DrumService} from './service/DrumService';
import {Audio} from './model/Audio';
import {NgForOf} from '@angular/common';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf,CommonModule],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.scss'
})
export class AppComponent  implements OnInit {
  constructor( private drumService: DrumService ) {
  }
  title = 'drumMachine';
 powerOn : boolean = false;
 bankOn : boolean = false;
 isDragging: boolean = false;
 display : string='';
 allAudioButton !: Audio [];
 allSecondAudioButton !: Audio [];
  volume: number = 0.5; // Volume initial (de 0 à 1)
  currentAudio: HTMLAudioElement | null = null;
  audio!: HTMLAudioElement;

  ngOnInit(): void {
    this.allAudioButton = this.drumService.getAllAudios()
    this.allSecondAudioButton = this.drumService.getAllSecondAudio()
  }
  playAudio(id: string) {
    if(this.powerOn){
      const audioElement = document.getElementById(id) as HTMLAudioElement;
      if (audioElement) {
        audioElement.play();
        audioElement.volume = this.volume;
        this.display = audioElement.id;

      }
    }

  }
  @HostListener('window:keydown', ['$event'])
  handleKeyDown(event: KeyboardEvent) {
    const keyCode = event.keyCode;
    const audioButton = (this.bankOn ? this.allSecondAudioButton : this.allAudioButton).find(button => button.KeyCode === keyCode);
    if (audioButton) {
      this.playAudio(audioButton.btn);
    }
  }

  powerActive() {
    this.powerOn = !this.powerOn;
  }

  bankActive() {
    this.bankOn = !this.bankOn;
  }

  handleVolumeClick(event: MouseEvent) {
    if (this.powerOn) {
      const volumeBar = event.currentTarget as HTMLElement;
      const rect = volumeBar.getBoundingClientRect();
      const clickPosition = event.clientX - rect.left; // Position du clic par rapport à la barre
      const newVolume = Math.min(Math.max(clickPosition / rect.width, 0), 1); // Normaliser entre 0 et 1
      //const newVolume = clickX / rect.width;
      this.volume = newVolume;
      this.display = "volume: "+Math.floor(this.volume * 100);
      this.audio.volume = this.volume;

    }
  }
   updateVolume(volume : number):void {

  }

}
