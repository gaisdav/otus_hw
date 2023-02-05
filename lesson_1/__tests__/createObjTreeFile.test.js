import fs from 'fs';
import createObjTreeFile from '../createObjTree';
import { jest } from '@jest/globals';

let a, b;

describe('test', () => {
  beforeEach(() => {
    a = jest.spyOn(fs, 'writeFile');
    b = jest.spyOn(console, 'error');
  });
  afterEach(() => {
    a.mockReset();
    b.mockReset();
  });
  it('test', () => {
    fs.writeFile.mockImplementationOnce(() => {});
    createObjTreeFile({ name: 'test' });

    expect(fs.writeFile).toHaveBeenCalled();
  });

  it('test 2', () => {
    fs.writeFile.mockImplementationOnce((f, d, callback) =>
      callback('some error')
    );

    createObjTreeFile({ name: 'test' });

    expect(console.error).toBeCalledWith('some error');
  });

  it('test 3', () => {
    fs.writeFile.mockImplementationOnce();

    createObjTreeFile({ name: 'test' });

    expect(console.error).toBeCalledTimes(0);
  });
});
