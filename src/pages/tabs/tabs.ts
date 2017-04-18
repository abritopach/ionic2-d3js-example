import { Component } from '@angular/core';

import { BarChartPage } from '../bar-chart/bar-chart';
import { PieChartPage } from '../pie-chart/pie-chart';
import { LineChartPage } from '../line-chart/line-chart';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = LineChartPage;
  tab2Root = BarChartPage;
  tab3Root = PieChartPage;

  constructor() {

  }
}
