const Images = (arr) => {
  let imgHTML = '';
  arr.forEach( img => {

    imgHTML += `
      <img style="width:500px; height:500px;" src="${img.url}" alt="${img.altText}" />
    `;

  });
  return imgHTML;
}

export const Park = (obj) => {
  return `
    <div class="park-card">
      <h3 id="park-name" class="park-headline d-inline-block">${obj.fullName}</h3>
      <button id="details__${obj.id}" class="btn btn-success">Details</button>
      <div class="hide-att">
        <p class="park-number">Phone: ${obj.contacts.phoneNumbers[0].phoneNumber}</p>
        <div class="address">
          <p>Address:</p>
          <p class="add-line1">${obj.addresses[0].line1}</p>
          <p class="add-line2">${obj.addresses[0].line2}</p>
          <p class="add-line3">${obj.addresses[0].line3}</p>
          <p class="add-line4">${obj.addresses[0].city} ${obj.addresses[0].stateCode} ${obj.addresses[0].postalCode}</p>
        </div>
        <p class="park-description">${obj.description}</p>
        <div class="park-images d-flex">
          ${Images(obj.images)}
        </div>
      </div>
    </div>
  `;
}

document.querySelector('.itenaryPreviewArea').addEventListener('click', e => {
  if (e.target.id.startsWith('details')) {
    if (e.target.nextElementSibling.style.display === '' || e.target.nextElementSibling.style.display === 'none') {
      e.target.nextElementSibling.style.display = 'block';
    } else {
      e.target.nextElementSibling.style.display = 'none';
    }
  }
});