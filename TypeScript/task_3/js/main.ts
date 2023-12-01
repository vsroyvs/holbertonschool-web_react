/// <reference path="./crud.d.ts" />

import {RowID, RowElement} from './interface';
import * as CRUD from './crud';

const row2: RowElement = {
  firstName:  "Guillaume",
  lastName: "Salva",
}

const newRowID: RowID = CRUD.insertRow();

const updatedRow: RowElement = {
  firstName:  "Guillaume",
  lastName: "Salva",
  age: 23,
};
