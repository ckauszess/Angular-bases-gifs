import { Component, Input } from '@angular/core';
import { Gif } from 'src/app/gifs/interfaces/gifs.interfaces';
import { GifsService } from 'src/app/gifs/services/gifs.service';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private gifservice: GifsService) { }
  get tags():string[] {
    return this.gifservice.tagsHistory;

  }
  public searchTag(tag:string):void{
     this.gifservice.searchTag(tag)
  }
}
