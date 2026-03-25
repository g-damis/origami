/**
 * TypeScript updates the global HTMLElementTagNameMap, used by APIs such as document.createElement, querySelector, etc.
 * The export {} file prevents TypeScript from treating it as a global script and isolates it correctly.
 * Explicitly importing components ensures that component types are known and usable.
*/

import { OruHeader } from '@atom_components/oru-header.ts';
import { OruFooter } from '@atom_components/oru-footer.ts';
import { OruButton } from '@atom_components/oru-button.ts';
import { OruFormRow } from '@molecule_components/oru-form-row.ts';

declare global {
  interface HTMLElementTagNameMap {
    'oru-header': OruHeader;
    'oru-footer': OruFooter;
    'oru-button': OruButton;
    'oru-form-row': OruFormRow;
  }
}

export {};
