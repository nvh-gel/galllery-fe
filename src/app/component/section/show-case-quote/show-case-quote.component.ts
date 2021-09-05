import {Component, OnInit} from '@angular/core';
import {QuoteService} from "../../../service/quote/quote.service";


@Component({
  selector: 'app-show-case-quote',
  templateUrl: './show-case-quote.component.html',
  styleUrls: ['./show-case-quote.component.scss']
})
export class ShowCaseQuoteComponent implements OnInit {

  quote!: string;

  constructor(private quoteService: QuoteService) {
  }

  ngOnInit(): void {
    this.quote = this.quoteService.getDailyQuote();
  }
}
