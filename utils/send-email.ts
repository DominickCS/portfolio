import { FormData } from '../pages/contactme.tsx';

export async function sendEmail(data: FormData) {
  const apiEndpoint = await fetch('/api/email', {

    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })

    const text = await apiEndpoint.text();

  //  .then((res) => res.json())
    //.then((response) => {
      //alert(response.message);
   // })
    //.catch((err) => {
     // alert(err);
   // });
}
