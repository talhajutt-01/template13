const title = document.getElementById('title');

const h0 = document.getElementById('h0');

const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');
const nav5 = document.getElementById('nav5');


const a0 = document.getElementById('a0');
const a1 = document.getElementById('a1');
const a2 = document.getElementById('a2');

const s0 = document.getElementById('s0');
const s1 = document.getElementById('s1');
const s2 = document.getElementById('s2');


const d0 = document.getElementById('d0');
const d1 = document.getElementById('d1');
const d2 = document.getElementById('d2');
const d3 = document.getElementById('d3');
const d4 = document.getElementById('d4');
const d5 = document.getElementById('d5');
const d6 = document.getElementById('d6');
const d7 = document.getElementById('d7');
const d8 = document.getElementById('d8');
const d9 = document.getElementById('d9');
const d10 = document.getElementById('d10');
const d11 = document.getElementById('d11');
const d12 = document.getElementById('d12');


const t0 = document.getElementById('t0');
const t1 = document.getElementById('t1');
const t2 = document.getElementById('t2');
const t3 = document.getElementById('t3');
const t4 = document.getElementById('t4');
const t5 = document.getElementById('t5');
const t6 = document.getElementById('t6');
const t7 = document.getElementById('t7');
const t8 = document.getElementById('t8');
const t9 = document.getElementById('t9');

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');
const img15 = document.getElementById('img15');
const img16 = document.getElementById('img16');
const img17 = document.getElementById('img17');
const img18 = document.getElementById('img18');
const img19 = document.getElementById('img19');
const img20 = document.getElementById('img20');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    fetch('t.txt')
        .then(response => response.json())
        .then(jsonData => {
            // Update content based on the current page
            updateContent(title, jsonData.title.title);

            updateLinkContent(nav0, jsonData.nav.nav0);
            updateLinkContent(nav1, jsonData.nav.nav1);
            updateLinkContent(nav2, jsonData.nav.nav2);
            updateLinkContent(nav3, jsonData.nav.nav3);
            updateLinkContent(nav4, jsonData.nav.nav4);
            updateLinkContent(nav5, jsonData.nav.nav5);

            updateContent(h0, jsonData.header.h0);
        

            updateContent(a0, jsonData.about.a0);
            updateContent(a1, jsonData.about.a1);
            updateContent(a2, jsonData.about.a2);

            updateContent(s0, jsonData.shop.s0);
            updateContent(s1, jsonData.shop.s1);
            updateContent(s2, jsonData.shop.s2);
       
            updateContent(d0, jsonData.fruit.d0);
            updateContent(d1, jsonData.fruit.d1);
            updateContent(d2, jsonData.fruit.d2);
            updateContent(d3, jsonData.fruit.d3);
            updateContent(d4, jsonData.fruit.d4);
            updateContent(d5, jsonData.fruit.d5);
            updateContent(d6, jsonData.fruit.d6);
            updateContent(d7, jsonData.fruit.d7);
            updateContent(d8, jsonData.fruit.d8);
            updateContent(d9, jsonData.fruit.d9);
            updateContent(d10, jsonData.fruit.d10);
            updateContent(d11, jsonData.fruit.d11);
            updateContent(d12, jsonData.fruit.d12);

            updateContent(t0, jsonData.client.t0);
            updateContent(t1, jsonData.client.t1);
            updateContent(t2, jsonData.client.t2);
            updateContent(t3, jsonData.client.t3);
            updateContent(t4, jsonData.client.t4);
            updateContent(t5, jsonData.client.t5);
            updateContent(t6, jsonData.client.t6);
            updateContent(t7, jsonData.client.t7);
            updateContent(t8, jsonData.client.t8);
            updateContent(t9, jsonData.client.t9);
            
            updateContent(c0, jsonData.info.c0);
            updateContent(c1, jsonData.info.c1);
            updateContent(c2, jsonData.info.c2);
            updateContent(c3, jsonData.info.c3);
        
        
    
            updateContent(f0, jsonData.footer.f0);
            updateContent(f1, jsonData.footer.f1);
    
         
            updateImageSrc(img1, jsonData.images.img1);
            updateImageSrc(img2, jsonData.images.img2);
            updateImageSrc(img3, jsonData.images.img3);
            updateImageSrc(img4, jsonData.images.img4);
            updateImageSrc(img5, jsonData.images.img5);
            updateImageSrc(img6, jsonData.images.img6);
            updateImageSrc(img7, jsonData.images.img7);
            updateImageSrc(img8, jsonData.images.img8);
            updateImageSrc(img9, jsonData.images.img9);
            updateImageSrc(img10, jsonData.images.img10);
            updateImageSrc(img11, jsonData.images.img11);
            updateImageSrc(img12, jsonData.images.img12);
            updateImageSrc(img13, jsonData.images.img13);
            updateImageSrc(img14, jsonData.images.img14);
            updateImageSrc(img15, jsonData.images.img15);
            updateImageSrc(img16, jsonData.images.img16);
            updateImageSrc(img17, jsonData.images.img17);
            updateImageSrc(img18, jsonData.images.img18);
            updateImageSrc(img19, jsonData.images.img19);
            updateImageSrc(img20, jsonData.images.img20);
           
            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html') {
               
            } else if (fileName === 'about.html') {

            } else if (fileName === 'friut.html') {

            } else if (fileName === 'testimonial.html') {

            } else if (fileName === 'contact.html') {

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});