export class Todo {
  private title = '';
  private completed = false;
  private editMode = false;
  constructor(title : string){
    this.title = title || '';
  }
  get_done() : boolean {
    return this.completed;
  }
  get_title() : string{
    return this.title;
  }
  toggleCompletion() : void {
    this.completed = !this.completed;
  }
  get editing() : boolean {
    return this.editMode;
  }
  set editable(bl : boolean){
    this.editMode = bl;
  }
  setTitle(tit : string): void{
    this.title = tit;
  }
}

