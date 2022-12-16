import { Content } from './content';

describe('Notification content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Você recebeu uma solicitação');

    expect(content).toBeTruthy();
  });

  it('should not be able to create a invalid length notification content', () => {
    expect(() => {
      new Content('Você');
    }).toThrow();

    expect(() => {
      new Content('a'.repeat(241));
    }).toThrow();
  });
});
