import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';


@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.scss',
})
export class Perfil {
  authService = inject(AuthService);
  perfil = signal<any>({});
  constructor() {
    this.funObtenerPerfil()
  }

  funObtenerPerfil() {
    this.authService.funPerfil().subscribe({
      next: (res: any) => {
        this.perfil.set(res);
      },
      error: (error: any) => {
        console.log("Error al obtener PERFIL");
      }
    })
  }

}

