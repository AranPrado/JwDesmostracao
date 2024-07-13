import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
  standalone: true
})
export class IndexComponent implements OnInit {

  private scriptLoaded = false;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.loadScript('widget1', 'https://s3.tradingview.com/external-embedding/embed-widget-crypto-coins-heatmap.js');
    this.loadScript('widget2', 'https://s3.tradingview.com/external-embedding/embed-widget-stock-heatmap.js');
  }

  loadScript(widgetId: string, url:any) {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = url;
    
    script.onload = () => {
      console.log(`TradingView widget script loaded successfully for ${widgetId}.`);
    };
    script.onerror = () => {
      console.error(`Error loading TradingView widget script for ${widgetId}.`);
    };

    document.getElementById(widgetId)?.appendChild(script);
  }

  abrirMenu(){
    alert('Aqui iria abrir o menu');
  }

  abrirMeuPerfil(){
    alert('Aqui iria abrir o seu perfil');
  }

  PDF(){
    alert('Aqui iria baixar o PDF');
  }

  info(){
    alert('Aqui iria abrir as informações');
  }
  

  voltarLogin(){
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

}
