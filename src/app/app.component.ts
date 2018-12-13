import { Component, OnInit } from "@angular/core";
import * as firebase from 'firebase';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyByh-BPrEzF0oMgth9mWQIemZfCgxWaMQ4",
      authDomain: "ng-recipe-book-d2c47.firebaseapp.com"
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
