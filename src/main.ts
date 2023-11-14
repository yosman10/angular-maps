import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

import * as mapboxgl from 'mapbox-gl';
(mapboxgl as any).accessToken =
  'pk.eyJ1IjoieW94bWFuMTAiLCJhIjoiY2wxd215emt3Mnk1dDNkcGNhNHNrajMwNyJ9.V9YQCAeTU04KpuLNMfmPzQ';

if (!navigator.geolocation) {
  alert('Navegador no soporta la Geolocation');
  throw new Error('Navegador no soporta la Geolocation');
}

platformBrowserDynamic()
  .bootstrapModule(AppModule)
  .catch((err) => console.error(err));
