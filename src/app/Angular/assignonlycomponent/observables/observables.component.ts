import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { SearchService } from './search.service';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {
  map,
  debounceTime,
  distinctUntilChanged,
  switchMap,
  tap
} from "rxjs/operators";
import { Observable } from 'rxjs';

class SearchItem {
  constructor(
    public track: string,
    public artist: string,
    public link: string,
    public thumbnail: string,
    public artistId: string
  ) {}
}


@Component({
  selector: 'app-observables',
  templateUrl: './observables.component.html',
  styleUrls: ['./observables.component.css']
})
export class ObservablesComponent implements OnInit {

  private loading: boolean = false;
  private results: Observable<SearchItem[]>;
  private searchField: FormControl;
  
  widthExp:any='500';
  constructor(private itunes: SearchService) {}

  ngOnInit(): void {
    this.searchField = new FormControl();
    this.results = this.searchField.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(_ => (this.loading = true)),
      switchMap(term => this.itunes.search(term)),
      tap(_ => (this.loading = false))
    );
  }


  doSearch(term: string) {
    this.itunes.search(term);
  }

}
