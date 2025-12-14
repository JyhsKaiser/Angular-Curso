import { Component } from '@angular/core';

/**
 * Component for displaying a page not found (404) error view.
 * 
 * This component is displayed when a user navigates to a route that does not exist
 * in the application.
 * 
 * @selector app-not-found
 * @standalone
 * @example
 * ```typescript
 * <app-not-found></app-not-found>
 * ```
 */
@Component({
  selector: 'app-not-found',
  imports: [],
  templateUrl: './not-found.html',
  styleUrl: './not-found.css',
})
export class NotFound {

}
