import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContratoService } from '../../services/contrato.service';
import { Contrato } from '../../models/contrato.model';

@Component({
  selector: 'app-crear-contrato',
  standalone: true,
  templateUrl: './crear-contrato.component.html',
  styleUrls: ['./crear-contrato.component.scss']
})
export class CrearContratoComponent {
  contratoForm: FormGroup;

  constructor(private fb: FormBuilder, private contratoService: ContratoService) {
    this.contratoForm = this.fb.group({
      identificador: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0)]],
      nombreContratante: ['', Validators.required],
      documentoContratante: ['', Validators.required],
      nombreContratantista: ['', Validators.required],
      documentoContratantista: ['', Validators.required],
      fechaInicial: ['', Validators.required],
      fechaFinal: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.contratoForm.valid) {
      const contrato: Contrato = this.contratoForm.value;
      this.contratoService.createContrato(contrato).subscribe({
        next: () => alert('Contrato creado exitosamente!'),
        error: (err) => alert('Error al crear contrato: ' + err.message),
      });
    }
  }
}
