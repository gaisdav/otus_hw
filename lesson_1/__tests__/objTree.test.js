import createObjTree from '../objTree';
import { objTreeFixtures } from '../__fixtures__/objTreeFixtures';

describe('object parsing tree', () => {
  objTreeFixtures.forEach((element) => {
    it(`should return correct template for ${JSON.stringify(
      element.value
    )}`, () => {
      const template = createObjTree(element.value);

      expect(template).toEqual(element.expectValue);
    });
  });
});
