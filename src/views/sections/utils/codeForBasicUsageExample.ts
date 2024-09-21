import { API_URL } from '../../../config/env'

export const codeForBasicUsageExample = `const text = "Hello";
const lang = "pl";

fetch(\`${API_URL}api/translation?lang=pl&text=hello\`)
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
`
