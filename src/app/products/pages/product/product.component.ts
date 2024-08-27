import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'products-product-page',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})

// Cada uno de los ciclos de vida se implementan, asi Angular sabe que componente tiene a su disposicion que cosas vamos a llamar
export class ProductComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  public isProductVisible: boolean = false;
  public currentPrice: number = 10;

  // Lo usamos para algun tipoi de inicializacion, no hacer peticiones http
  constructor() {
    console.log('Constructor');
  }

  // Se usa para la primera peticion http, subscribes, escuchar websockets, timers
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  // Se utiliza si se necesita estar pendientes de los cambios de las propiedades de los inputs
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('ngOnChanges');
  }

  // El resto son principalmente cuando hay cambios, se utilizan muy poco. Princial uso cuando se trabaja con paquetes o plugins que te piden que implementes esos pasos ciclos de vida
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // Muy importante para hacer limpiezas en caso de haber hecho en el oninit algun proceso que se ejecuta a lo largo que el componente este en pantalla
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  increasePrice() {
    this.currentPrice++;
  }
}
