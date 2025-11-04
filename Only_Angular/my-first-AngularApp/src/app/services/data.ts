import { Injectable, Signal, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Item {
      id: number;
      name: string;
}

@Injectable({
  providedIn: 'root',
})
export class Data {
  private itemsSignal = signal<Item[]>([]);
      private apiUrl = 'https://localhost:7001/api/items'; // Replace with your API URL

      constructor(private http: HttpClient) {}

      fetchItems(): void {
        this.http.get<Item[]>(this.apiUrl).subscribe(items => {
          this.itemsSignal.set(items);
        });
      }

      get items(): Signal<Item[]> {
        return this.itemsSignal;
      }
}
