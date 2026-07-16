import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-layout',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './web-layout.html',
  styleUrl: './web-layout.scss',
})
export class WebLayout {}
