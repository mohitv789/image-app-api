import { ImageComponent } from '../shared/breakdown.model';
import { Subject } from 'rxjs';

export class WishListService {
  componentsChanged = new Subject<ImageComponent[]>();
  startedEditing = new Subject<number>();
  private components: ImageComponent[] = [];

  getComponents() {
    return this.components.slice();
  }

  getComponent(index: number) {
    return this.components[index];
  }

  addComponent(component: ImageComponent) {
    this.components.push(component);
    this.componentsChanged.next(this.components.slice());
  }

  addComponents(components: ImageComponent[]) {
    this.components.push(...components);
    this.componentsChanged.next(this.components.slice());
  }

  updateComponent(index: number, newComponent: ImageComponent) {
    this.components[index] = newComponent;
    this.componentsChanged.next(this.components.slice());
  }

  deleteComponent(index: number) {
    this.components.splice(index, 1);
    this.componentsChanged.next(this.components.slice());
  }
}
