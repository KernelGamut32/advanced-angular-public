import { Pipe, PipeTransform } from '@angular/core';

export enum SortOrder {
  Ascending,
  Descending
}

@Pipe({
  name: 'orderSorter'
})
export class OrderSorterPipe implements PipeTransform {

  transform(value: any[], primarySort: string, secondarySort?: string, secondarySortOrder: SortOrder = SortOrder.Ascending):
      any[] {
    if (value && primarySort) {
      return value.sort((a: any, b: any) => {
        if (a[primarySort] < b[primarySort]) {
          return -1;
        } else if (a[primarySort] > b[primarySort]) {
          return 1;
        } else {
          const firstSecondarySortResult = secondarySortOrder === SortOrder.Ascending ? -1 : 1;
          const secondSecondarySortResult = secondarySortOrder === SortOrder.Ascending ? 1 : -1;
          if (a[secondarySort] < b[secondarySort]) {
            return firstSecondarySortResult;
          } else if (a[secondarySort] > b[secondarySort]) {
            return secondSecondarySortResult;
          }
          return 0;
        }
      });
    }
  }

}
