import { Component, OnInit } from '@angular/core';
import { Tuit } from 'src/app/core/datos/dtosTwitter';
import { Input } from '@angular/core';

@Component({
  selector: 'app-tuit',
  templateUrl: './tuit.component.html',
  styleUrls: ['./tuit.component.css']
})
export class TuitComponent implements OnInit {

  @Input() tuit: Tuit;
  private urlPerfil: String;

  constructor() { }

  ngOnInit() {
    if (this.tuit.usuario) {
      this.urlPerfil = "https://twitter.com/" + this.tuit.usuario.nick;
      this.tuit.usuario.nick = "@" + this.tuit.usuario.nick;
    }
  }

}
