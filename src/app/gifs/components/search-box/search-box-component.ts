import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'gifs-search-box',
  template:`
  <h5> Buscar:</h5>
  <input type="text"
  class="form-control"
  placeholder="Buscar Gifs..."
  (keyup.enter)="SearchTag()"
  #txtTagInput
  >  `
})

export class SearchBoxComponent {
  @ViewChild('txtTagInput')
  tagInput!:ElementRef<HTMLInputElement>;

  constructor(private gifsService:GifsService) { }

  SearchTag():void{
    const newTag=this.tagInput.nativeElement.value
    this.gifsService.searchTag(newTag);
    this.tagInput.nativeElement.value=''

  }

}