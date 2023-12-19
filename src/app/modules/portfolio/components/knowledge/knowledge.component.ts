import { Component, signal } from '@angular/core';

//interface
import { IKnowLedge } from '../interface/Iknowlege.interface';

@Component({
  selector: 'app-knowledge',
  standalone: true,
  imports: [],
  templateUrl: './knowledge.component.html',
  styleUrl: './knowledge.component.css'
})
export class KnowledgeComponent {
  public arrayKnowledge = signal<IKnowLedge[]>([
    {
      src: 'assets/icons/knowledge/html5.svg',
      alt: 'Icone de conhecimento HTML5'
    },
    {
      src: 'assets/icons/knowledge/css3.svg',
      alt: 'Icone de conhecimento CSS3'
    },
    {
      src: 'assets/icons/knowledge/angular.svg',
      alt: 'Icone de conhecimento Angular'
    },
    {
      src: 'assets/icons/knowledge/javascript.svg',
      alt: 'Icone de conhecimento JavaScript'
    },
    {
      src: 'assets/icons/knowledge/node.svg',
      alt: 'Icone de conhecimento NodeJs'
    },
    {
      src: 'assets/icons/knowledge/react.svg',
      alt: 'Icone de conhecimento ReactJs'
    },
  ])
}
