import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuoteService {

  getDailyQuote(): string {
    return 'A liz vell.';
  }
}
