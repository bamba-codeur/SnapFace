import {Component, Input, OnInit} from '@angular/core';
import {FaceSnap} from "../model/face-snap";
import {FaceSnapsServiceService} from "../services/face-snaps-service.service";

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements  OnInit{


  @Input()  snap!:FaceSnap;
  valueSnap!:string;

  constructor(private faceSnapService:FaceSnapsServiceService) {
  }
  ngOnInit(): void {
      this.valueSnap='Oh snap';
  }

  onAddSnap(){
    if (this.valueSnap === 'Oh snap') {
       this.faceSnapService.snapFaceSnapById(this.snap.id)
      this.valueSnap = 'Oops unsnap';
    }else {

      this.faceSnapService.unsnapFaceSnapById(this.snap.id);
      this.valueSnap = 'Oh snap';
    }

  }


}
