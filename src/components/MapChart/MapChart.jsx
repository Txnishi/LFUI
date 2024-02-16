import React, { useEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themes_animated from '@amcharts/amcharts4/themes/animated';
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";

const MapChart = () => {
    useEffect(() => {
        // Themes
        am4core.useTheme(am4themes_animated);

        // Create chart instance
        const chart = am4core.create('chartdiv', am4maps.MapChart);

        chart.logo.disabled = true;

        // Set map definition
        chart.geodata = am4geodata_worldLow;

        // Set projection
        chart.projection = new am4maps.projections.Orthographic();
        chart.panBehavior = 'rotateLongLat';
        chart.deltaLatitude = -15;
        chart.padding(20, 20, 20, 20);

        // Create map polygon series
        const polygonSeries = chart.series.push(new am4maps.MapPolygonSeries());

        // Make map load polygon (like country names) data from GeoJSON
        polygonSeries.useGeodata = true;

        // Configure series
        const polygonTemplate = polygonSeries.mapPolygons.template;
        // polygonTemplate.tooltipText = '{name}';
        polygonTemplate.fill = am4core.color('#FF6633');
        polygonTemplate.stroke = am4core.color('#000000');
        polygonTemplate.strokeWidth = 0.5;
        polygonTemplate.urlTarget = '_blank';

        const graticuleSeries = chart.series.push(new am4maps.GraticuleSeries());
        graticuleSeries.mapLines.template.line.stroke = am4core.color('#ffffff');
        graticuleSeries.mapLines.template.line.strokeOpacity = 0.08;
        graticuleSeries.fitExtent = false;

        chart.backgroundSeries.mapPolygons.template.polygon.fillOpacity = 0.1;
        chart.backgroundSeries.mapPolygons.template.polygon.fill = am4core.color('#ffffff');

        // Create hover state and set alternative fill color
        const hs = polygonTemplate.states.create('hover');
        hs.properties.fill = chart.colors.getIndex(0).brighten(-0.5);

        let animation;
        setTimeout(() => {
            animation = chart.animate({ property: 'deltaLongitude', to: 100000 }, 20000000);
        }, 3000);

        // Clean up function
        return () => {
            if (chart) {
                chart.dispose();
            }
        };
    }, []); // Empty dependency array to ensure effect runs only once

    return (
        <div id="chart-container" style={{ position: 'absolute', top: '50%', right: 0, transform: 'translateY(-50%)', width: '50%', height: '70vh' }}>
            <div id="chartdiv" style={{ width: '100%', height: '100%' }}></div>
        </div>
    );
};

export default MapChart
