import { Injectable } from '@angular/core';
import {FaceSnap} from "../model/face-snap";

@Injectable({
  providedIn: 'root'
})
export class FaceSnapsServiceService {


  faceSnaps:FaceSnap[] = [
    {
      id:1,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      location: 'Louga',
      snaps: 200
    },
    {
      id:2,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      location: 'Dakar',
      snaps: 0
    },
    {
      id:3,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imgUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      location: 'Thies',
      snaps: 0
    },
    {
      id:4,
      title: 'Archibald',
      description: 'Mon meilleur ami depuis tout petit !',
      imgUrl: 'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg',
      createdDate: new Date(),
      location: 'Louga',
      snaps: 0
    },
    {
      id:5,
      title: 'Three Rock Mountain',
      description: 'Un endroit magnifique pour les randonnées.',
      imgUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Three_Rock_Mountain_Southern_Tor.jpg/2880px-Three_Rock_Mountain_Southern_Tor.jpg',
      createdDate: new Date(),
      location: 'Dakar',
      snaps: 150
    },
    {
      id:6,
      title: 'Un bon repas',
      description: 'Mmmh que c\'est bon !',
      imgUrl: 'https://wtop.com/wp-content/uploads/2020/06/HEALTHYFRESH.jpg',
      createdDate: new Date(),
      location: 'Thies',
      snaps: 40
    }
  ];
  constructor() { }

  getAllSnap(){
    return this.faceSnaps;
  }
  snapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
      faceSnap.snaps++;
    } else {
      throw new Error('FaceSnap not found!');
    }
  }
  unsnapFaceSnapById(faceSnapId: number): void {
    const faceSnap = this.faceSnaps.find(faceSnap => faceSnap.id === faceSnapId);
    if (faceSnap) {
      faceSnap.snaps--;
    } else {
      throw new Error('FaceSnap not found!');
    }
  }
}
