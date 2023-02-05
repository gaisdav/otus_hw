import fs from 'fs';
import createObjTreeFile from '../createObjTree';
import { jest } from '@jest/globals';

let a, b;

describe('object parsing result file', () => {
  beforeEach(() => {
    a = jest.spyOn(fs, 'writeFile');
    b = jest.spyOn(console, 'error');
  });
  afterEach(() => {
    a.mockReset();
    b.mockReset();
  });
  it('fs.writeFile should be called', () => {
    fs.writeFile.mockImplementationOnce(() => {});
    createObjTreeFile({ name: 'test' });

    expect(fs.writeFile).toHaveBeenCalled();
  });

  it('fs.writeFile should be called with error', () => {
    fs.writeFile.mockImplementationOnce((f, d, callback) =>
      callback('some error')
    );

    createObjTreeFile({ name: 'test' });

    expect(console.error).toBeCalledWith('some error');
  });
});
