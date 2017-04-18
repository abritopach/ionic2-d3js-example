import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BarChartPage } from '../pages/bar-chart/bar-chart';
import { PieChartPage } from '../pages/pie-chart/pie-chart';
import { LineChartPage } from '../pages/line-chart/line-chart';
import { TabsPage } from '../pages/tabs/tabs';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    BarChartPage,
    PieChartPage,
    LineChartPage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    SuperTabsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BarChartPage,
    PieChartPage,
    LineChartPage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
