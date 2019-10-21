import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor() {}

  public getFilteredDataBySearch(
    list: Array<Object>,
    searchValue: String = "",
    searchTypes: Array<String>
  ) {
    console.log(list, searchValue, searchTypes);

    const filteredList = list.filter((dataNote: Object) => {
      return searchTypes.some((propName: string) => {
        return dataNote[propName].toLowerCase().indexOf(searchValue.toLowerCase()) === -1
          ? false
          : true;
      });
    });

    return filteredList;
  }
}