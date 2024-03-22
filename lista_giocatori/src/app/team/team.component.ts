import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

  giocatori = [

    { nome: 'FEZE',coloreNome: 'Red',vittorie: 4,regione: 'Atlanta', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blt9af6b1400ab3688c/5de850e40de8400c4c5ab96c/ATL-FAZ_Alternate-Logo.svg?auto=webp',link: 'https://faze.callofdutyleague.com/en-us/' },
    { nome: 'BREACH',coloreNome: '#00FF00', vittorie: 1,regione: 'Boston', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blt69dd80f51295ea0a/61e09af0a408793a37adc7a4/cdl-boston-breach-icon-color-dark-padding.svg?auto=webp', link: 'https://breach.callofdutyleague.com/en-us/'},
    { nome: 'ROYAL RAVENS',coloreNome: '#87CEEB', vittorie: 0,regione: 'Carolina', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltc1ddba2549587194/64f74317af49494ad8926c37/ravens-icon-color.svg?auto=webp',link:'https://ravens.callofdutyleague.com/en-us/' },
    { nome: 'GUERRILLAS',coloreNome: '#800080', vittorie: 1,regione: 'Los Angeles', creazione: '2020', foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltf8a143b45301c312/5dc48b33f4eb996c3143cd7b/LOS_-_Guerrillas.svg?auto=webp',link:'https://guerrillas.callofdutyleague.com/en-us/'},
    { nome: 'THIEVES',coloreNome: 'Red', vittorie: 2 ,regione: 'Minesota', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blt4ae7c1816b4ffc52/5fa5a10ea9e913483b74d191/cdl_la_thieves_primary_logo_padding.svg?auto=webp',link:'https://thieves.callofdutyleague.com/en-us/' },
    { nome: 'HERETICS',coloreNome: 'rgb(2, 81, 87)', vittorie: 0,regione: 'Miami', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blt46e2a57928dfcb39/64e77a7ff3415dce8124716b/heretics-icon-color.svg?auto=webp',link:'https://heretics.callofdutyleague.com/en-us/'},
    { nome: 'RØKKR',coloreNome: 'rgb(53, 31, 101)', vittorie: 1,regione: 'Minesota', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blt68f6338af72925ae/5dcdced9f9bc5549969944c3/MIN_-_ROKKR.svg?auto=webp', link:'https://rokkr.callofdutyleague.com/en-us/'},
    { nome: 'SURGE',coloreNome: 'rgb(0, 255, 204)', vittorie: 1,regione: 'Seattle', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/bltbe8507a1cef478bb/5dba15def9bc554996993cd0/SEA_-_Surge.svg?auto=webp',link :'https://surge.callofdutyleague.com/en-us/'},
    { nome: 'OPTIC',coloreNome: 'rgb(146, 201, 81)', vittorie: 1,regione: 'Texas', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blt4bee833057845797/618af2431bb8c23cf8bbede5/cdl_optic_texas_icon_light.svg?auto=webp',link:'https://optic.callofdutyleague.com/en-us/'},
    { nome: 'ULTRA', coloreNome: 'rgb(120, 44, 242)',vittorie: 3,regione: 'Toronto', creazione: '2020', foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blt85467b3f354a2e25/64adbb869d480a827f791db9/tor_ultra_logo_alternate_padding.svg?auto=webp', link:'https://ultra.callofdutyleague.com/en-us/'},
    { nome: 'LEGION',coloreNome: 'orange', vittorie: 0,regione: 'Vegas', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blt7c039a2766790e32/5dbdac971af57b7f5dfa2df1/PAR_-_Legion.svg?auto=webp',link:'https://legion.callofdutyleague.com/en-us/'},
    { nome: 'SUBLINERS',coloreNome: 'yellow', vittorie: 2,regione: 'New York', creazione: '2020',  foto: 'https://images.blz-contentstack.com/v3/assets/blta7b34f1f894a2422/blte1e43ca5d7d1bab2/64adbb863b801dd8dfc53491/nysl_logo_alternate_padding-01.svg?auto=webp',link:'https://subliners.callofdutyleague.com/en-us/'},

  ]
  pagina(url: any) {
    location.href = url;
  }
}
