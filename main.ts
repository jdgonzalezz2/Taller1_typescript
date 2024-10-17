import { series } from './data.js';

let seriesTable: HTMLElement = document.getElementById('series')!;
let promedioTemporadas: HTMLElement = document.getElementById('promedio-temporadas')!;

mostrarSeries(series);
mostrarPromedioTemporadas(series);

function mostrarSeries(series: any[]): void {
  let seriesTbody: HTMLElement = document.createElement('tbody');
  for (let serie of series) {
    let trElement: HTMLElement = document.createElement('tr');
    trElement.innerHTML = `
      <td>${serie.id}</td>
      <td>${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;
    seriesTbody.appendChild(trElement);
  }
  seriesTable.appendChild(seriesTbody);
}


function mostrarPromedioTemporadas(series: any[]): void {
  let totalSeasons = series.reduce((sum, serie) => sum + serie.seasons, 0);
  let promedio = totalSeasons / series.length;
  promedioTemporadas.innerText = `Seasons average: ${promedio.toFixed(1)}`;
}
