import { Component} from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeng-login';

  constructor(private primengConfig: PrimeNGConfig,) {
    this.primengConfig.ripple = true;
  }
}
