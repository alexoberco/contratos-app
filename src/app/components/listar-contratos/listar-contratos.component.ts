import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato.model';

@Component({
  selector: 'app-listar-contratos',
  standalone: true,
  templateUrl: './listar-contratos.component.html',
  styleUrls: ['./listar-contratos.component.scss']
})
export class ListarContratosComponent implements OnInit {
  contratos: Contrato[] = [];

  constructor(private contratoService: ContratoService) {}

  ngOnInit(): void {
    this.contratoService.getContratos().subscribe({
      next: (data) => this.contratos = data,
      error: (err) => alert('Error al cargar contratos: ' + err.message),
    });
  }
}
