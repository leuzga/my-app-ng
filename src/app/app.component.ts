import { RouterOutlet }              from '@angular/router';
import { Component, inject }         from '@angular/core';
import { CopyrightDirective }        from './shared/directives/copyright.directive';
import { ProductListComponent }      from "./components/product-list/product-list.component";
import { APP_SETTINGS, appSettings } from './app.settings';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ProductListComponent, CopyrightDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [{ provide: APP_SETTINGS, useValue: appSettings }]
})
export class AppComponent {
  settings = inject(APP_SETTINGS);
}
