import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public constructor(private readonly router: Router) { }

  public executeSearchQuery(searchQuery: string) {
    this.router.navigate(['/search'], { queryParams: { query: searchQuery }});
  }
}