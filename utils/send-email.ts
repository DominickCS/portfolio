import { FormData } from '../pages/contactme.tsx';

export function sendEmail(data: FormData) {
  const apiEndpoint = '../pages/api/email/';

  fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((response) => {
      alert(response.message);
    })
    .catch((err) => {
      alert(err);
    });
}
