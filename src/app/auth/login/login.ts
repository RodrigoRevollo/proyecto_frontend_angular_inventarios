import { Component, inject, signal } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { email } from '@angular/forms/signals';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  respuesta_login = signal<any>({})
  router = inject(Router)

  constructor(private authService: AuthService){}

  funIngresarConLaravel(){
    this.authService.funLoginLaravel(this.loginForm.value).subscribe({
      next: (res) => {
        console.log(res);
        this.respuesta_login.set(res)
        this.router.navigate(["/admin/perfil"])
      },
      error: (err: any) => {
        alert("Error al Ingresar")
      }
    }
    )
  }

}
