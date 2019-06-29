import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3-selection';
import * as d3Scale from 'd3-scale';
import * as d3Array from 'd3-array';
import * as d3Axis from 'd3-axis';



export interface format {
  date: string;
  cancelrate: number;
}

export const STATISTICS: format[] = [
  {date: '1st', cancelrate: .08167},
  {date: '2nd', cancelrate: .01492},
  {date: '3rd', cancelrate: .02782},
  {date: '4th', cancelrate: .04253},
  {date: '5th', cancelrate: .12702},
  {date: '6th', cancelrate: .02288},
  {date: '7th', cancelrate: .02015},
  {date: '8th', cancelrate: .06094},
  {date: '9th', cancelrate: .06966},
  {date: '10th', cancelrate: .00153},
  {date: '11th', cancelrate: .00772},
  {date: '12th', cancelrate: .04025},
  {date: '13th', cancelrate: .02406},
  {date: '15th', cancelrate: .06749},
  {date: '16th', cancelrate: .07507},
  {date: '17th', cancelrate: .01929},
  {date: '18th', cancelrate: .00095},
  {date: '19th', cancelrate: .05987},
  {date: '20th', cancelrate: .06327},
  {date: '21st', cancelrate: .09056},
  {date: '22nd', cancelrate: .02758},
  {date: '23rd', cancelrate: .00978},
  {date: '24th', cancelrate: .02360},
  {date: '25th', cancelrate: .00150},
  {date: '26th', cancelrate: .01974},
  {date: '27th', cancelrate: .00074}
];

@Component({
  selector: 'app-ordercancelled',
  templateUrl: './ordercancelled.component.html',
  styleUrls: ['./ordercancelled.component.scss']
})
export class OrdercancelledComponent implements OnInit {

  title = 'Bar Chart';

  private width: number;
  private height: number;
  private margin = {top: 20, right: 20, bottom: 30, left: 40};

  private x: any;
  private y: any;
  private svg: any;
  private g: any;

  constructor() {}

  ngOnInit() {
      this.initSvg();
      this.initAxis();
      this.drawAxis();
      this.drawBars();
  }

  private initSvg() {
      this.svg = d3.select('svg');
      this.width = +this.svg.attr('width') - this.margin.left - this.margin.right;
      this.height = +this.svg.attr('height') - this.margin.top - this.margin.bottom;
      this.g = this.svg.append('g')
          .attr('transform', 'translate(' + this.margin.left + ',' + this.margin.top + ')');
  }

  private initAxis() {
      this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
      this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
      this.x.domain(STATISTICS.map((d) => d.date));
      this.y.domain([0, d3Array.max(STATISTICS, (d) => d.cancelrate)]);
  }

  private drawAxis() {
      this.g.append('g')
          .attr('class', 'axis axis--x')
          .attr('transform', 'translate(0,' + this.height + ')')
          .call(d3Axis.axisBottom(this.x));
      this.g.append('g')
          .attr('class', 'axis axis--y')
          .call(d3Axis.axisLeft(this.y).ticks(10, '%'))
          .append('text')
          .attr('class', 'axis-title')
          .attr('transform', 'rotate(-90)')
          .attr('y', 6)
          .attr('dy', '0.71em')
          .attr('text-anchor', 'end')
          .text('rate');
  }

  private drawBars() {
      this.g.selectAll('.bar')
          .data(STATISTICS)
          .enter().append('rect')
          .attr('class', 'bar')
          .attr('x', (d) => this.x(d.date) )
          .attr('y', (d) => this.y(d.cancelrate) )
          .attr('width', this.x.bandwidth())
          .attr('height', (d) => this.height - this.y(d.cancelrate) );
  }
}
