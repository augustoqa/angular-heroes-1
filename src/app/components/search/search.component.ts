import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, HeroesService } from '../../servicios/heroes.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html'
})
export class SearchComponent implements OnInit {
  heroes: Heroe[];
  term: string;

  constructor( private activatedRoute: ActivatedRoute,
               private router: Router,
               private _heroService: HeroesService ) {
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe( params => {
      this.term = params['term'];
      this.heroes = this._heroService.buscarHeroe( this.term );
    });
  }
}
