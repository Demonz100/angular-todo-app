import { Component, Input } from '@angular/core';
import { Cartoon } from 'src/models/cartoon.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})

export class CardComponent {
  @Input() cartoon!: Cartoon
}
