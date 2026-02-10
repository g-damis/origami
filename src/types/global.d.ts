/** 
 * TypeScript updates the global HTMLElementTagNameMap, used by APIs such as document.createElement, querySelector, etc.
 * The export {} file prevents TypeScript from treating it as a global script and isolates it correctly.
 * Explicitly importing components ensures that component types are known and usable. 

*/

import { NuHeader } from '@atom_components/nu-header.ts';
import { NuFooter } from '@atom_components/nu-footer.ts';
import { NuButton } from '@atom_components/nu-button.ts';
import { NuFormRow } from '@molecule-components/nu-form-row.ts';

declare global {
  interface HTMLElementTagNameMap {
    'nu-header': NuHeader;
    'nu-footer': NuFooter;
    'nu-button': NuButton;
    'nu-form-row': NuFormRow;
  }
}

export {};
