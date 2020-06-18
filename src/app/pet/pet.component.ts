import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  public petName = 'hunter';
  public petImage = 'https://i.pinimg.com/736x/8b/89/15/8b8915a496a6f3d0f0fff78d2a14737a.jpg';

  constructor() { }

  updateName(name: any)
  {
    this.petName = name;
  }

  updateImage(image: string)
  {
    this.petImage = image;
  }

  ngOnInit(): void {
  }

}
