import { Component, ViewChild } from '@angular/core';
import { WjGridModule, WjFlexGrid } from '@mescius/wijmo.angular2.grid';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'wijmodemojb';
  data: any[]
  @ViewChild('flex') flex: WjFlexGrid | undefined;

  constructor(){
    this.data = [
      { id: 0, country: "US", sales: 1318.37, expenses: 4212.41 },
      { id: 1, country: "Germany", sales: 5847.95, expenses: 89.79 },
      { id: 2, country: "UK", sales: 502.55, expenses: 2878.50 },
      { id: 3, country: "Japan", sales: 4675.40, expenses: 488.65 },
      { id: 4, country: "Italy", sales: 2117.57, expenses: 925.60 },
      { id: 5, country: "Greece", sales: 322.10, expenses: 4163.96 }
  ];
  }
}
