import { Component, OnInit, Input } from '@angular/core';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Input() searchTypes: Array<String>;
  @Input() list: Array<Object>;

  public searchValue: String;

  constructor(private searchService: SearchService) {}

  ngOnInit() {}

  public search(): void {
    this.getFilteredDataBySearch();
  }

  public getFilteredDataBySearch() {
    this.searchService.getFilteredDataBySearch(
      this.list,
      this.searchValue,
      this.searchTypes
    );
  }
}
