import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LogoComponent } from './logo/logo.component';
import { DescrizioneComponent } from './descrizione/descrizione.component';
import { TeamComponent } from './team/team.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,LogoComponent,DescrizioneComponent,TeamComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'lista_giocatori';
}
