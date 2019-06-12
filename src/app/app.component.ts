import { AfterViewInit, Component, NgZone, OnDestroy } from '@angular/core';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';

am4core.useTheme(am4themes_animated);

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  title = 'ng-amchart';
  private chart: am4charts.XYChart;

  constructor(private zone: NgZone) {}

  ngAfterViewInit() {
    this.zone.runOutsideAngular(() => {
      const chart = am4core.create( 'chartdiv', am4charts.XYChart);
      chart.paddingRight = 50;
      chart.data = [{
        'date': new Date(2019, 4, 1),
        'itrCount': 100,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 2),
        'itrCount': 75,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 3),
        'itrCount': 80,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 4),
        'itrCount': 250,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 5),
        'itrCount': 150,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 6),
        'itrCount': 180,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 7),
        'itrCount': 95,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 8),
        'itrCount': 100,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 9),
        'itrCount': 20,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 10),
        'itrCount': 20,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 11),
        'itrCount': 20,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 12),
        'itrCount': 47,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 13),
        'itrCount': 100,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 14),
        'itrCount': 75,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 15),
        'itrCount': 80,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 16),
        'itrCount': 250,
        'pass': 35,
        'error': 10
      }, {
        'date': new Date(2019, 4, 17),
        'itrCount': 150,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 18),
        'itrCount': 180,
        'pass': 50,
        'error': 10
      }, {
        'date': new Date(2019, 4, 19),
        'itrCount': 95,
        'pass': 30,
        'error': 10
      }, {
        'date': new Date(2019, 4, 20),
        'itrCount': 100,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 21),
        'itrCount': 20,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 22),
        'itrCount': 20,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 23),
        'itrCount': 20,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 24),
        'itrCount': 47,
        'pass': 25,
        'error': 10
      }, {
        'date': new Date(2019, 4, 25),
        'itrCount': 100,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 26),
        'itrCount': 75,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 27),
        'itrCount': 80,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 28),
        'itrCount': 250,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 29),
        'itrCount': 150,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 30),
        'itrCount': 180,
        'pass': 10,
        'error': 10
      }, {
        'date': new Date(2019, 4, 31),
        'itrCount': 95,
        'pass': 10,
        'error': 10
      }];

      // Create date axis
      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.renderer.grid.template.disabled = true;
      dateAxis.renderer.minGridDistance = 0;
      dateAxis.renderer.grid.template.location = 0.5;
      dateAxis.startLocation = 0;
      dateAxis.endLocation = 1;
      dateAxis.dateFormats.setKey('day', 'dd');

      // Create value axis
      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.renderer.grid.template.disabled = true;
      valueAxis.renderer.labels.template.disabled = true;

      // Create series
      const series = chart.series.push(new am4charts.ColumnSeries());
      series.dataFields.valueY = 'itrCount';
      series.dataFields.dateX = 'date';
      series.name = 'InteractionCount';
      series.columns.template.width = am4core.percent(100);
      series.columns.template.fill = am4core.color('#ececec');
      series.columns.template.stroke = am4core.color('#ececec');
      series.stacked = true;

      const hoverState = series.columns.template.states.create('hover');
      hoverState.properties.fill = am4core.color('#23bee9');
      hoverState.properties.fillOpacity = 0.8;

      series.columns.template.events.on('over', function(ev) {
        const series2 = chart.series.push(new am4charts.ColumnSeries());
        series2.dataFields.valueY = 'pass';
        series2.dataFields.dateX = 'date';
        series2.name = 'passCount';
        series2.columns.template.width = am4core.percent(100);
        series2.stacked = true;
      }, this);

      // tooltip
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color('#fff');
      series.tooltip.label.fill = am4core.color('#000');
      series.columns.template.tooltipText = 'Series: {name}\nDate: {date}\nCount: {itrCount}\nPass: {pass}\nFail: {error}';
      this.chart = chart;
    });
  }

  ngOnDestroy() {
    this.zone.runOutsideAngular(() => {
      if (this.chart) {
        this.chart.dispose();
      }
    });
  }
}
