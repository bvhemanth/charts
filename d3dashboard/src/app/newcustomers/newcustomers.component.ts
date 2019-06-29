import { Component, OnInit ,AfterViewInit} from '@angular/core';

@Component({
  selector: 'app-newcustomers',
  templateUrl: './newcustomers.component.html',
  styleUrls: ['./newcustomers.component.scss']
})
export class NewcustomersComponent implements OnInit {

  data: any;
  changedata;
  constructor() {
    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      datasets: [
          {
              label: 'New customers added at every month',
              data: [65, 59, 80, 81, 56, 55],
              fill: false,
              borderColor: '#4bc0c0'
          }
      ]
    }
 }

  ngOnInit() {
    const vw=this;
    setInterval(function(){
      
      var number = Math.floor(Math.random() * 100)
      vw.data.datasets[0].data.push(number);
      vw.data.datasets[0].data.shift();
      console.log(vw.data.datasets[0])
      // vw.changedata = {
      //   labels: ['January', 'February', 'March', 'April', 'May', 'June'],
      //   datasets: [
      //     {
      //         label: 'Orders places at each month',
      //         backgroundColor: '#42A5F5',
      //         borderColor: '#1E88E5',
      //         data: [Math.floor(Math.random() * 100),
      //           Math.floor(Math.random() * 100),
      //           Math.floor(Math.random() * 100),
      //           Math.floor(Math.random() * 100),
      //           Math.floor(Math.random() * 100),
      //           Math.floor(Math.random() * 100),
      //           Math.floor(Math.random() * 100)]
      //     }
      //   ]
      // }
      // vw.update();
    }, 500);
  }
  update()
  {
    this.data = Object.assign({}, this.changedata);
  }

}
