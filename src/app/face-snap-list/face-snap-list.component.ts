import {Component, OnInit} from '@angular/core';
import {FaceSnap} from "../model/face-snap";
import {FaceSnapsServiceService} from "../services/face-snaps-service.service";

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements  OnInit{
  title = 'snapFace';
  faceSnaps!: FaceSnap[];
  myOtherSnap!: FaceSnap;
  myLastSnap!:FaceSnap;
  ngOnInit(): void {

  }
  constructor(private faceSnapService:FaceSnapsServiceService) {
    this.faceSnaps=this.faceSnapService.getAllSnap();
  }

}
