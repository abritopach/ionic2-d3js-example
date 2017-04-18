import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import  { StatsBarChart } from '../../data/data';

import * as d3 from 'd3-selection';
import * as d3Scale from "d3-scale";
import * as d3Array from "d3-array";
import * as d3Axis from "d3-axis";

@Component({
  selector: 'page-bar-chart',
  templateUrl: 'bar-chart.html'
})
export class BarChartPage {

  title = 'D3.js with Ionic 2!';

  width: number;
  height: number;
  margin = {top: 20, right: 20, bottom: 30, left: 40};

  x: any;
  y: any;
  svg: any;
  g: any;

  constructor(public navCtrl: NavController) {
    this.width = 900 - this.margin.left - this.margin.right ;
    this.height = 500 - this.margin.top - this.margin.bottom;
    //console.log("this.width: " + this.width);
    //console.log("this.height: " + this.height);
  }

  ionViewDidLoad() {
    //console.log("ionViewDidLoad Bar Chart");
    this.initSvg()
    this.initAxis();
    this.drawAxis();
    this.drawBars();
  }

  initSvg() {

    this.svg = d3.select("#barChart")
        .append("svg")
        .attr("width", '100%')
        .attr("height", '100%')
        .attr('viewBox','0 0 900 500');

    /*
    this.svg = d3.select("svg");
    this.width = +this.svg.attr("width") - this.margin.left - this.margin.right;
    this.height = +this.svg.attr("height") - this.margin.top - this.margin.bottom;
    */
    this.g = this.svg.append("g")
        .attr("transform", "translate(" + this.margin.left + "," + this.margin.top + ")");
  }

  initAxis() {
    this.x = d3Scale.scaleBand().rangeRound([0, this.width]).padding(0.1);
    this.y = d3Scale.scaleLinear().rangeRound([this.height, 0]);
    this.x.domain(StatsBarChart.map((d) => d.letter));
    this.y.domain([0, d3Array.max(StatsBarChart, (d) => d.frequency)]);
  }

  drawAxis() {
    this.g.append("g")
        .attr("class", "axis axis--x")
        .attr("transform", "translate(0," + this.height + ")")
        .call(d3Axis.axisBottom(this.x));
    this.g.append("g")
        .attr("class", "axis axis--y")
        .call(d3Axis.axisLeft(this.y).ticks(10, "%"))
        .append("text")
        .attr("class", "axis-title")
        .attr("transform", "rotate(-90)")
        .attr("y", 6)
        .attr("dy", "0.71em")
        .attr("text-anchor", "end")
        .text("Frequency");
  }

  drawBars() {
    this.g.selectAll(".bar")
        .data(StatsBarChart)
        .enter().append("rect")
        .attr("class", "bar")
        .attr("x", (d) => this.x(d.letter) )
        .attr("y", (d) => this.y(d.frequency) )
        .attr("width", this.x.bandwidth())
        .attr("height", (d) => this.height - this.y(d.frequency) );
  }

}
