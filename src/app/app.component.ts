import { Component } from '@angular/core';
import { ApiService } from './service/api.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-RickAndMorthy';
  constructor(private api: ApiService){}

  public characters = []

  ngOnInit(){
    this.api.getCharacters().subscribe(
      (results: any) => {
        this.characters = results.results
      }
    )
  }
}
