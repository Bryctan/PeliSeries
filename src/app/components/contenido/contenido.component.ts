import { Component} from '@angular/core';
import { movies } from 'src/app/models/movies';
import { series } from 'src/app/models/series';
import { ActivatedRoute, Router } from '@angular/router';



@Component({
  selector: 'app-contenido',
  templateUrl: './contenido.component.html',
  styleUrls: ['./contenido.component.css']
})
export class ContenidoComponent {

  contenido:any = movies.concat(series)
  nombreCategoria: string = ''
  buscar:any
  resultados: any[] = [];

  constructor (private routeActivate:ActivatedRoute, private router:Router) {

  }

  ngOnInit(): void {
    this.routeActivate.params.subscribe(params => {
      this.nombreCategoria = params['tipo'];
      this.actualizarContenido();
    });
  }

  private actualizarContenido(): void {
    this.resultados = this.contenido.filter((data:any) => data.tipo === this.nombreCategoria)
  }

  busqueda() {
    if( this.buscar ==''){
      this.actualizarContenido();
    }
    this.resultados = this.resultados.filter((pelicula: any) =>
      pelicula.titulo.toLowerCase().includes(this.buscar.toLowerCase()) || pelicula.descripcion.toLowerCase().includes(this.buscar.toLowerCase())
    );
  }
}
