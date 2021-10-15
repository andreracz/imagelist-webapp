import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ImageListComponent } from "./imagelist/imagelist.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, ImageListComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  bootstrap: [AppComponent]
})
export class AppModule {}
