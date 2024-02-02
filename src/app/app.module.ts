import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BagComponent } from './bag/bag.component';
const appRouting: Routes = [
  {path: "", component: HomeComponent},
   {path: "women", component: WomenComponent},
   {path: "men", component:MenComponent},
   {path: "bag", component:BagComponent}
  ]


@NgModule({
  declarations: [
    AppComponent,
    MenComponent,
    WomenComponent,
    HomeComponent,
    MenuComponent,
    BagComponent,
  
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRouting)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
