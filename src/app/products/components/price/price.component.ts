import {
  Component,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'products-price',
  templateUrl: './price.component.html',
  styleUrl: './price.component.css',
})
export class PriceComponent implements OnInit, OnChanges, OnDestroy {
  //Si el componente no implementa ningun Input no vamos a ver ningun onChanges
  @Input()
  public price: number = 0;

  // Standar poner el $ en los Observables
  public interval$?: Subscription;

  ngOnInit(): void {
    console.log('Componente Hijo: ngOnInit');
    //interval Es un observable que empieza a emitir valores de manera secuencial
    this.interval$ = interval(1000).subscribe((value) =>
      console.log(`Tick ${value}`)
    );
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log({ changes });
    console.log('Componente Hijo: ngOnChanges');
  }
  ngOnDestroy(): void {
    console.log('Componente Hijo: ngOnDestroy');
    this.interval$?.unsubscribe();
  }
}
