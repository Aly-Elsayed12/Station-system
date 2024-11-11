import { Component, OnInit } from '@angular/core';
import { Chart , ChartConfiguration, ChartData, registerables } from 'chart.js';


Chart.register(...registerables)
@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [],
  templateUrl: './aside.component.html',
  styleUrl: './aside.component.css'
})
export class AsideComponent implements OnInit {


  chart:any
  ngOnInit(): void {
    this.createChart();
  }

  createChart(): void {
    const data: ChartData<'radar'> = {
      labels: [
        '00:00', '02:00', '04:00', '06:00', '08:00', '10:00',
        '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'
      ],
      datasets: [
        {
          label: 'Station 1',
          data: [20, 35, 40, 30, 50, 70, 65, 40, 55, 45, 35, 25],
          backgroundColor: 'rgba(54, 162, 235, 0.2)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        },
        {
          label: 'Station 2',
          data: [25, 30, 50, 40, 60, 80, 70, 50, 60, 50, 30, 20],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }
      ]
    };

    const config: ChartConfiguration<'radar'> = {
      type: 'radar',
      data: data,
      options: {
        responsive: true,
        scales: {
          r: {
            beginAtZero: true,
            angleLines: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            grid: {
              color: 'rgba(0, 0, 0, 0.1)',
            },
            pointLabels: {
              color: '#000',
              font: {
                size: 12
              }
            }
          }
        },
        plugins: {
          legend: {
            position: 'top',
            labels: {
              color: '#000'
            }
          }
        }
      }
    };

    const ctx = document.getElementById('hourlySalesChart') as HTMLCanvasElement;
    new Chart(ctx, config);
  }

}







