import { series } from './data.js';
var seriesTable = document.getElementById('series');
var promedioTemporadas = document.getElementById('promedio-temporadas');
mostrarSeries(series);
mostrarPromedioTemporadas(series);
function mostrarSeries(series) {
    var seriesTbody = document.createElement('tbody');
    for (var _i = 0, series_1 = series; _i < series_1.length; _i++) {
        var serie = series_1[_i];
        var trElement = document.createElement('tr');
        trElement.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td>").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
function mostrarPromedioTemporadas(series) {
    var totalSeasons = series.reduce(function (sum, serie) { return sum + serie.seasons; }, 0);
    var promedio = totalSeasons / series.length;
    promedioTemporadas.innerText = "Seasons average: ".concat(promedio.toFixed(1));
}
