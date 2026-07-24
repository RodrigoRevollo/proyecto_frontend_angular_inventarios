import { inject, Service } from '@angular/core';
import { environment } from '../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Service()
export class AuthService {
    urlBase = environment.servidor_laravel;

    http = inject(HttpClient);

    funLoginLaravel(credenciales: any) {
        return this.http.post(`${this.urlBase}/api/v1/auth/login`, credenciales);
    }

    funRegister() {

    }

    funPerfil() {
        return this.http.get(`${this.urlBase}/api/v1/auth/profile`);
    }

    funLogout() {

    }
}
