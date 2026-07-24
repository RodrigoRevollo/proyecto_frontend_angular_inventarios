import { Component, inject, Signal, signal } from '@angular/core';
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

  loading = signal<boolean>(false);

  // Formulario Reactivo
  loginForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    password: new FormControl("", [Validators.required, Validators.minLength(6)])
  });

  respuesta_login = signal<any>({})
  router = inject(Router)


  constructor(private authService: AuthService){}

  funIngresarConLaravel(){
    //Validar
    if (this.loginForm.valid){
    this.loading.set(true); 
    this.authService.funLoginLaravel(this.loginForm.value).subscribe({
      next: (res:any) => {
        console.log(res);
        // almacenar el token en localStorage
        localStorage.setItem("access_token", res.access_token)
        this.respuesta_login.set(res)
        this.loading.set(false);
        this.router.navigate(["/admin/perfil"])
      },
      error: (err: any) => {
        this.loading.set(false);
        alert("Error al Ingresar")
      }
    })
    }else{
      alert("Verifique los datos antes de ingrsar al sistema")
    }
  }
}
