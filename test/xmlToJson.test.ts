import { xmlToJsonFromUrl } from '../src/xmlToJson';

describe('Test XML convert', () => {
    it('should return the expected result',async () => {
        const result = await xmlToJsonFromUrl("https://abcnews.go.com/abcnews/usheadlines");
        console.log(result);
        expect(result).toBeDefined();
    });
});

