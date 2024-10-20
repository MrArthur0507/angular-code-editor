import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [MonacoEditorModule, FormsModule],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
  editorOptions = {
    theme: 'vs-dark',  // Set the theme, e.g., 'vs-dark' or 'vs-light'
    language: 'c',     // Set the language to C
    minimap: { enabled: true } // Enable or disable the minimap
  };

  code = `
  #include <stdio.h>
  
  int main() {
      printf("Hello, World!");
      return 0;
  }
  `;
}
