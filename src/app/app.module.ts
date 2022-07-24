import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ttClassDirective } from './tt-class.directive';
import { ttIfDirective } from './tt-if.directive';
import { ttToggleDirective } from './tt-toggle.directive';
import { ttTooltipDirective } from './tt-tooltip.directive';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ttClassDirective, ttIfDirective , ttToggleDirective, ttTooltipDirective],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
