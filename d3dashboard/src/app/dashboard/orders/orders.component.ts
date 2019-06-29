import { Component,  OnInit, ViewChild} from '@angular/core';
import { UIChart } from 'primeng/primeng';
@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {
  data: any;
  @ViewChild('chart', {static: true}) chart: UIChart;
  changedata;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
          {
              label: 'Orders places at each month',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [65, 59, 80, 81, 56, 55, 40]
          }
      ]
    };
  }

  ngOnInit() {
    // data to graph
    const vw = this;
    setInterval(function() {
      vw.changedata = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
              label: 'Orders places at each month',
              backgroundColor: '#42A5F5',
              borderColor: '#1E88E5',
              data: [Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100)]
          }
        ]
      };
      vw.update();
    }, 1000);
  }
  update() {
    this.data = Object.assign({}, this.changedata);
  }
}
