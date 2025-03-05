import {Injectable} from '@angular/core';
import {Audio} from '../model/Audio';
import {audio2} from '../data/data';
import {elementAt} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export  class DrumService {


allAudio2 : Audio[]=[];
   heater1 : string = "/assets/audios/Heater-1.mp3";
   heater3 : string = "/assets/audios/Heater-3.mp3";
   heater4 : string = "/assets/audios/Heater-4_1.mp3";
   heater2: string = "/assets/audios/Heater-2.mp3";
   clap: string ="/assets/audios/Heater-6.mp3";
   openHH : string ="/assets/audios/Dsc_Oh.mp3"
   kicknHat: string ="/assets/audios/Kick_n_Hat.mp3";
   kick : string ="/assets/audios/RP4_KICK_1.mp3";
   closedHH : string =  "/assets/audios/Cev_H2.mp3";

  allAudio : Audio[] = [
    {
      KeyCode: 81,
      id: "Heater-1",
      src: this.heater1,
      btn: 'Q'
    },
    {
      KeyCode: 87,
      id: "Heater-2",
      src: this.heater2,
      btn: 'W'
    },
    {
      KeyCode: 69,
      id: "Heater-3",
      src: this.heater3,
      btn: 'E'
    },
    {
      KeyCode: 65,
      id: "Heater-4",
      src:  this.heater4,
      btn: 'A'
    },
    {
      KeyCode: 83,
      id: "Clap",
      src:  this.clap,
      btn: 'S'
    },
    {
      KeyCode: 68,
      id: "Open-HH",
      src:  this.openHH,
      btn: 'D'
    },
    {
      KeyCode: 90,
      id: "Kick-n'-Hat",
      src:  this.kicknHat,
      btn: 'Z'
    },
    {
      KeyCode: 88,
      id: "Kick",
      src:  this.kick,
      btn: 'X'
    },
    {
      KeyCode: 67,
      id: "Closed-HH",
      src:  this.closedHH,
      btn: 'C'
    }
  ];

getAllAudios() : Audio[]{
  return this.allAudio;
}
getAllSecondAudio() : Audio[]{
  audio2.map(
   element => {
     this.allAudio2.push(element);
   }
  )
  return this.allAudio2;
}

}
