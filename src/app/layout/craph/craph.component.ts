import { Component } from '@angular/core';
import { NavbarComponent } from "../../components/navbar/navbar.component";
import { HeadComponent } from "../../components/head/head.component";
import { AsideComponent } from "../../components/aside/aside.component";
import { Chart  , registerables} from 'chart.js';
import { CardComponent } from "../../components/card/card.component";
import { NgClass } from '@angular/common';
import { RouterModule } from '@angular/router';

Chart.register(...registerables)

@Component({
  selector: 'app-craph',
  standalone: true,
  imports: [NavbarComponent, HeadComponent, AsideComponent, CardComponent , NgClass , RouterModule],
  templateUrl: './craph.component.html',
  styleUrl: './craph.component.css'
})
export class CraphComponent {
  data = [250, 100, 200, 250, 100];
  labels = ['Station Name Dummy 1', 'Station Name Dummy 2', 'Station Name Dummy 3', 'Station Name Dummy 4', 'Station Name Dummy 5'];


  isActive = true
  id:number= 1
  ngOnInit(): void {
    this.createChart();

  }

  addActive(id:number){
    this.id = id
  }

  chart:any

  createChart() {
    this.chart = new Chart("MyChartBar", {
      type: 'bar',
      data: {
        labels: this.labels,
        datasets: [
          {
            label: "Sales",
            data: this.data,
            backgroundColor: '#FF5733',
            borderWidth: 1,
            barThickness: 11
          }
        ]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              stepSize: 30,
              font: {
                size: 14,
                family: 'Arial',
                weight: 'bold',
              },
              color: '#333',
              maxRotation: 0,
              minRotation: 0
            }
          }
        },
        plugins: {
          legend: {
            display: false
          }
        }
      }
    });
  }

}
