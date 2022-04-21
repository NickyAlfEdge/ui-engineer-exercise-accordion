import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Faq } from 'src/util/types';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ui-engineer-exercise';

  faqs: Observable<Array<Faq>> | null;

  constructor(private http: HttpClient) { 
    this.faqs = null;
  }

  ngOnInit(): void {
    const faqs = this.http.get<Faq[]>("assets/faqs/faqs.json").pipe(
      map((res: any) => { 
        return res; 
      })
    );
    
    faqs ? this.faqs = faqs : this.faqs = null;
  }

}