import {Injectable} from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  constructor() {
  }

  getDailyQuote(): string {

    return 'The quick brown fox jump over the lazy dog.';
  }
}
