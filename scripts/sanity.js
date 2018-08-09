import esmBundle from './esm/index.js';
import cjsBundle from './cjs/index.js';

describe('final sanity test', () => {
    it('should load compiled esm without crashing', () => {
        expect(Object.values(esmBundle).every(exportedVal => exportedVal)).toBeTruthy();
    });

    it('should load compiled commonJS without crashing', () => {
        expect(Object.values(cjsBundle).every(exportedVal => exportedVal)).toBeTruthy();
    });
});
