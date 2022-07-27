import { Component } from '@angular/core';
import { PrimeCalculator } from './prime.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Web-Workers-Demo';
  primeNumNormal:any;
  primeNumWorker:any;
 
 getPrimeNumberByNormal(number:any) {
  this.primeNumNormal = PrimeCalculator.findNormalPrimeNumber(number);
}

getPrimeNumberByWorker(number:any) {
    if (typeof Worker !== 'undefined') {
       // Create a new
       const worker = new Worker('./app.worker', { type: 'module' });
       worker.onmessage = ({ data }) => {
       this.primeNumWorker = data;
       };
       worker.postMessage(number);
    } else {
       // Web Workers are not supported in this environment.
       // You should add a fallback so that your program still executes correctly.
    }
 }
}
