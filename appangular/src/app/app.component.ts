import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular WebSocket';
  messages: string[] = [];
  private socket: WebSocket | undefined;
  constructor() {
    this.conectarWebSocket();
  }
  conectarWebSocket() {
    this.socket = new WebSocket('ws://localhost:3000');

    this.socket.onopen = () => {
      console.log('WebSocket conexion establecida');
    };

    this.socket.onmessage = (event) => {
      this.messages.push(event.data);
    };

    this.socket.onclose = () => {
      console.log('WebSocket conexion cerrada');
    };

    this.socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };
  }
}
