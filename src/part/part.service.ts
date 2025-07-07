import { OnshapeElement, OnshapeExtendedElement } from '../element/element.type';
import { OnshapeProperty } from '../metadata/metadata.type';
import { OnshapePartInfo } from './part.type';

export class OnshapePartService {

  public static toExtendedElement(parentElement: OnshapeElement, onshapePart: OnshapePartInfo): OnshapeExtendedElement {
    const element: OnshapeExtendedElement = {
      ...parentElement,
      elementId: onshapePart.elementId,
      quantity: 1,
      partId: onshapePart.partId,
      properties: []
    };

    element.properties.push({
      ...OnshapeProperty.Name,
      value: onshapePart.name
    });
    element.properties.push({
      ...OnshapeProperty.State,
      value: onshapePart.state
    });
    element.properties.push({
      ...OnshapeProperty.Vendor,
      value: onshapePart.vendor
    });
    element.properties.push({
      ...OnshapeProperty.Revision,
      value: onshapePart.revision
    });
    element.properties.push({
      ...OnshapeProperty.Description,
      value: onshapePart.description
    });
    element.properties.push({
      ...OnshapeProperty.PartNumber,
      value: onshapePart.partNumber
    });
    element.properties.push({
      ...OnshapeProperty.Appearance,
      value: onshapePart.appearance
    });

    return element;
  }

  public static toExtendedElements(parentElement: OnshapeElement, onshapeParts: OnshapePartInfo[]) {
    return onshapeParts.map(part => this.toExtendedElement(parentElement, part));
  }
}