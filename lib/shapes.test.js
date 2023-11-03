const {Circle, Square, Triangle} = require('./shapes')
const generateSVG = require('../index')

test('Square is rendered correctly', () => {
    const answers = {
      logoShape: 'Square',
    };
  
    const { container } = render(generateSVG(answers));
  
    
    const square = container.querySelector('rect');
    expect(square).toBeInTheDocument();
    expect(square).toHaveAttribute('width', '300');
    expect(square).toHaveAttribute('height', '200');
    expect(square).toHaveAttribute('fill', answers.logoColor); 
})