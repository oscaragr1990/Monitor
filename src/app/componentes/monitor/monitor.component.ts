import { Component, OnInit } from '@angular/core';
import { TwitterService } from 'src/app/servicios/redesSociales/twitter.service';
import { Tuit } from 'src/app/core/datos/dtosTwitter';

@Component({
  selector: 'app-monitor',
  templateUrl: './monitor.component.html',
  styleUrls: ['./monitor.component.css']
})
export class MonitorComponent implements OnInit {
  private tuits: Tuit[];

  constructor(private twitter: TwitterService) { }

  ngOnInit() {
    this.twitter.obtenerTuits("cafe").subscribe(tuits => { this.tuits = tuits });


    if (!this.tuits) {
      this.tuits = new Array<Tuit>();
    }

  }

}
