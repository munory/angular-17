import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-load',
  standalone: true,
  imports: [],
  templateUrl: './load.component.html',
  styleUrl: './load.component.less'
})
export class LoadComponent implements OnInit {

  @Input()
  text?: string;

  ngOnInit(): void {
    console.log(this.text);
  }

}
