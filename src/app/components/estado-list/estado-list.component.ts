import { Component, OnInit } from '@angular/core';
import { Estado } from '../../models/estado';
import { ServicesService } from '../../services/services.service';
import { NgFor } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-estado-list',
  standalone: true,
  imports: [NgFor, MatTableModule],
  templateUrl: './estado-list.component.html',
  styleUrl: './estado-list.component.css'
})
export class EstadoListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'nome', 'sigla'];
  estados: Estado[] = [];

  constructor(private estadoService: ServicesService) {

  }

  ngOnInit(): void {
    this.estadoService.getEstados().subscribe(data => {
      this.estados = data;
    })
  }
}