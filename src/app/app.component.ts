import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Tuit } from 'src/app/core/datos/dtosTwitter';
import { TwitterService } from 'src/app/servicios/redesSociales/twitter.service';
import { RedSocial } from 'src/app/core/datos/dtosUtil';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tuits: Tuit[];
  private concepto: string;
  private redesSociales: RedSocial[];

  constructor(private twitter: TwitterService, private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.concepto = "";
    this.iniciarFiltroRedesSociales();
    if (!this.tuits) {
      this.tuits = new Array<Tuit>();
    }
  }

  /**
   * 
   */
  iniciarFiltroRedesSociales() {
    this.redesSociales = new Array<RedSocial>();
    this.redesSociales.push(new RedSocial("FBK", "Facebook", "facebook-box.svg", true, false));
    this.redesSociales.push(new RedSocial("TWT", "Twitter", "twiiter-box.svg", true, false));
    this.redesSociales.push(new RedSocial("INS", "Instagram", "instagram-box.svg", true, false));

    for (let red of this.redesSociales) {
      this.matIconRegistry.addSvgIcon(red.icon,
        this.domSanitizer.bypassSecurityTrustResourceUrl("/../assets/icons/redesSociales/" + red.icon)
      );
    }
  }

  buscarConcepto() {
    console.log(this.concepto)
    this.twitter.obtenerTuits(this.concepto).subscribe(tuits => { this.tuits = tuits; });
    if (!this.tuits) {
      this.tuits = new Array<Tuit>();
    }
  }


}
