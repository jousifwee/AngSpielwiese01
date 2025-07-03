# Mehrere Seiten in Angular: Schritt-für-Schritt-Anleitung

## 1. Routing-Modul anlegen (falls nicht vorhanden)
```bash
ng generate module app-routing --flat --module=app
```

## 2. Komponenten für die Seiten anlegen
```bash
ng generate component page1
ng generate component page2
# usw.
```

## 3. Routen definieren
Bearbeite `src/app/app-routing.module.ts`:
```typescript
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: '', redirectTo: '/page1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
```

## 4. Router-Outlet in `app.component.html` einfügen
```html
<router-outlet></router-outlet>
```

## 5. Navigation einbauen (optional)
```html
<a routerLink="/page1">Seite 1</a>
<a routerLink="/page2">Seite 2</a>
```

Jetzt kannst du zwischen mehreren ganzseitigen Komponenten umschalten!
