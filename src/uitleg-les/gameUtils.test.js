import {getRank, addScores, getHighScore} from './gameUtils';

test('Geef Noob terug met score 0', () => {
    const result = getRank(0);
    expect(result).toBe('Noob')

})

test('Geef Pro terug met score 50', () => {
    const result = getRank(50);
    expect(result).toBe('Pro')

})



test("tel twee scores bij elkaar op", () => {
    const result = addScores(20, 30);
    expect(result).toBe(50);
})