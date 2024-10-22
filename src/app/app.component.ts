import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EditorComponent } from "./editor/editor.component";
import { FormsModule } from '@angular/forms';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { OutputDisplayComponent } from "./output-display/output-display.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EditorComponent, FormsModule, MonacoEditorModule, OutputDisplayComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-code-editor';
}
