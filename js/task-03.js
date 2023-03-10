const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const gallery = document.querySelector(".gallery");
      gallery.style.display = 'flex';
      gallery.style.justifyContent = 'space-around';
      gallery.style.flexWrap = 'wrap';
      gallery.style.gap = '50px';
      gallery.style.padding = '15px';

const setupImages = images.map(({ url, alt }) =>

  `<li><img src="${url}" alt="${alt}"></li>`).join("");
  
gallery.insertAdjacentHTML("beforeend", setupImages);

const galleryLiRef = gallery.querySelectorAll('li');

      const addLiStyle = galleryLiRef.forEach(item => {

            item.style.listStyle = 'none';
            item.style.display = 'flex';
            item.style.padding = '0px', '20px';
      });
      
const imgLiRef = gallery.querySelectorAll('img'); 

    const addImgStyle = imgLiRef.forEach(item => {

      item.width = 200;
    });


// Перший розв'язок не по ТЗ
/* const ulRef = document.querySelector('.gallery');

      ulRef.style.display = 'flex';
      ulRef.style.justifyContent = 'space-around';
      ulRef.style.flexWrap = 'wrap';
      ulRef.style.gap = '50px';
      ulRef.style.padding = '15px';

const imagesGallery = images.map(image => {
  
  const galleryLiRef = document.createElement('li');
      galleryLiRef.classList.add('gallery__item');
      galleryLiRef.style.listStyle = 'none';
      galleryLiRef.style.display = 'flex';
      galleryLiRef.style.padding = '0px', '20px';



  const imgLiRef = document.createElement('img');
    
      imgLiRef.src = `${image.url}`;
      imgLiRef.alt = `${image.alt}`;
      imgLiRef.width = 200;


  galleryLiRef.insertAdjacentElement('afterbegin', imgLiRef);

  return galleryLiRef;
});

ulRef.append(...imagesGallery); */

