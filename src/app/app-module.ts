// import { HttpClient, HttpClientModule } from "@angular/common/http";
// import { NgModule } from "@angular/core";
// import { BrowserModule } from "@angular/platform-browser";
// import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

// @NgModule({
//   ...
//   imports: [
//     BrowserModule,
//     TranslateModule.forRoot({
//       loader: {
//         provide: TranslateLoader,
//         useFactory: HttpLoaderFactory,
//         deps: [HttpClient]
//       }
//     }),
//   ],
// })
// export class AppModule {}

// export function HttpLoaderFactory(http: HttpClient) {
//   return new TranslateHttpLoader(http, './assets/translations/', '.json');
// }