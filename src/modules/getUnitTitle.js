export default function getUnitTitle(american, value) {
let unit
let title
    switch (value) {
    case 'temperature':
        unit = american ? "°F" : "°C"
        title=value
        break;
    case 'feelsLike':
        unit = american ? "°F" : "°C"
        title='feels like'
        break;
    case 'cloudiness':
        unit = '%'
        title=value
        break;
    case 'humidity':
        unit = '%'
        title=value
        break;
    case 'precipation':
        unit = american ? "in" : "mm"
        title=value
        break;
    case 'windSpeed':
        unit = american ? "mph" : "kph"
        title='wind speed'
        break;
    case 'pressure':
        unit = american ? "in" : "mb"
        title=value
        break;
    case 'visibility':
        unit = american ? "miles" : "miles"
        title=value
        break;
    case 'uv':
        unit = ''
        title=value
        break;

    default:
        break;
}
  return [title,unit]
}
