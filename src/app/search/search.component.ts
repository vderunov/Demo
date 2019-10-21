import { Component, OnInit, Input } from '@angular/core';

import { SearchService } from './search.service';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchTypes: Array<String>;
  @Input() list: Array<Object>;

  public searchValue: String;
  public faSearch = faSearch;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  public search(): void {
    this.getFilteredDataBySearch();
  }

  public getFilteredDataBySearch(): Array<Object> {
    return this.searchService.getFilteredDataBySearch(
      this.list,
      this.searchValue,
      this.searchTypes
    );
  }
}