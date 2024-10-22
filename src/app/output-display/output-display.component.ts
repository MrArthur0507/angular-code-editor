import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-output-display',
  standalone: true,
  imports: [],
  templateUrl: './output-display.component.html',
  styleUrl: './output-display.component.css'
})
export class OutputDisplayComponent {
  @Input() output: string = 'Output will be displayed here...';

  
  clearOutput() {
    this.output = '';
  }
}
