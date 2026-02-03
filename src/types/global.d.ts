/** 
 * TypeScript updates the global HTMLElementTagNameMap, used by APIs such as document.createElement, querySelector, etc.
 * The export {} file prevents TypeScript from treating it as a global script and isolates it correctly.
 * Explicitly importing components ensures that the MyHeader type, etc., is known and usable. 

*/

import { MyHeader } from '@atom_components/my-header';
import { MyFooter } from '@atom_components/my-footer';

declare global {
  interface HTMLElementTagNameMap {
    'my-header': MyHeader;
    'my-footer': MyFooter;
  }
}

export {};
