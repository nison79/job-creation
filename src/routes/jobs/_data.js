import { LoremIpsum } from 'lorem-ipsum';


const lorem = new LoremIpsum();

export let jobs =[
    {id: '1', title: 'Executive Producer', salary: 20000, details: lorem.generateParagraphs(3)},
    {id: '2', title: 'Worker in a factory', salary: 200, details: lorem.generateParagraphs(3)},
    {id: '3', title: 'React Developer', salary: 80000, details: lorem.generateParagraphs(3)},

];
