import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { MonacoEditorModule } from 'ngx-monaco-editor-v2';
import { CodeRunnerService } from '../code-runner.service';
import { OutputDisplayComponent } from '../output-display/output-display.component';

@Component({
  selector: 'app-editor',
  standalone: true,
  imports: [MonacoEditorModule, FormsModule, OutputDisplayComponent],
  templateUrl: './editor.component.html',
  styleUrl: './editor.component.css'
})
export class EditorComponent {
output: string = "Output here";

  constructor(private codeRunnerService : CodeRunnerService) {}


runCode() {
  this.codeRunnerService.runCode(this.code).subscribe(response => {
      this.output = response;
  })
}
code: string = `#include <stdio.h>\nint main() {\n  printf("Hello, World!");\n  return 0;\n}`;

  
  selectedLanguage: string = 'c';

  editorOptions  = {
    theme: 'vs-dark', 
    language: 'c', 
    automaticLayout: true,
    minimap: { enabled: false }, 
    fontSize: 14,
    wordWrap: 'on',
    scrollBeyondLastLine: false,
  };

  
  languageTemplates: { [key: string]: string } = {
    c: `#include <stdio.h>\nint main() {\n  printf("Hello, World!");\n  return 0;\n}`,
    cpp: `#include <iostream>\nusing namespace std;\nint main() {\n  cout << "Hello, World!" << endl;\n  return 0;\n}`,
    csharp: `using System;\nclass Program {\n  static void Main() {\n    Console.WriteLine("Hello, World!");\n  }\n}`
  };

  
  onLanguageChange(event: Event) {
    const selectedLang = (event.target as HTMLSelectElement).value;
    this.editorOptions = {
      ...this.editorOptions,
      language: selectedLang 
    };
    this.code = this.languageTemplates[selectedLang]; 
  }
}
