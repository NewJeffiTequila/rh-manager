import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    const htmlContent = `
    <!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>API Importação de PDF</title>
      <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
      <style>
        /* Estilo adicional pode ser adicionado aqui */
        h1 {
          color: #007bff;
          font-size: 2.5rem;
          text-align: center;
          margin-top: 50px;
        }
        .logo {
          display: block;
          margin: 0 auto;
          max-width: 300px;
          height: auto;
          margin-top: 30px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1 class="display-4">API Importação de PDF</h1>
        <img src="https://mygac.s3.amazonaws.com/assets/png/logos/logo.png" alt="Logo Genérica" class="logo">
        </div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.5.4/dist/umd/popper.min.js"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
    </html>
  `;
    return htmlContent;
  }
}
