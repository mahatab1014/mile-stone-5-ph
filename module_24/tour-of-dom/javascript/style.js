// Body
const body = document.getElementById('body').style;
body.background = 'url(https://source.unsplash.com/random/1920x1080)';
body.backgroundSize = 'cover'; 
body.backgroundAttachment = 'fixed';
body.height = '100%';
body.width = '100%';
body.padding = '50px';

// Section
const sections = document.querySelectorAll('section');
for (const section of sections) {
    section.style.backdropFilter = 'blur(5px)';
    section.style.padding = '30px';
    section.style.marginBottom = '30px';
    section.style.borderRadius = '30px';
    section.style.boxShadow = '3px 6px 15px #1f1f1fdd';
    section.style.textAlign = 'center';
}

// 1st section 
const heading = document.getElementById('heading').style;
heading.background = '#f7f9ff';
heading.textAlign = 'center';
heading.margin = 'auto';
heading.width = '50%';
heading.fontSize = '1.8rem';

const addingText = document.getElementById('addingText');
addingText.innerText = 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat sed beatae, officia facilis accusantium libero a iure animi aliquid id deleniti, esse iste voluptates accusamus. Esse a ipsum minus consequuntur, porro libero delectus enim inventore. Iusto sequi quibusdam sed ipsum assumenda reprehenderit error eveniet at possimus nulla debitis provident harum veniam hic impedit velit ipsa sit, repellat atque laborum saepe quo? Facilis non temporibus velit quas excepturi debitis laborum nam iusto numquam libero illo saepe, dignissimos, nobis consectetur reiciendis sunt adipisci ipsa, distinctio doloribus molestias! Ex voluptates repudiandae asperiores amet! Neque consequuntur iste quod nobis dolorum adipisci, inventore placeat ducimus distinctio incidunt enim. Sunt minima laudantium animi, doloribus aliquam iure quibusdam nemo ut cum, doloremque soluta dignissimos incidunt quisquam eaque molestias? Porro ullam quis ex exercitationem, molestiae dolorem ad consectetur, quae magnam laborum suscipit facilis culpa amet quod quam architecto laudantium deleniti repudiandae repellat blanditiis asperiores quisquam. Beatae, at qui laudantium possimus doloremque libero consectetur aut dolores! Repellat blanditiis voluptas eaque ipsa iusto. Similique eius soluta voluptatum expedita explicabo temporibus suscipit reprehenderit maiores ducimus doloremque, quasi labore recusandae placeat aut nisi eum rerum ipsum iure. Accusantium itaque laboriosam ad vel nulla! Labore ratione sapiente necessitatibus temporibus praesentium fugit! Ullam, culpa!';
addingText.style.background = '#2c325473';
addingText.style.padding = '20px';
addingText.style.borderRadius = '10px';
// -----------------


// Add or remove READ MORE Class on all button
const readMoreBtns = document.getElementsByTagName('button');
for (const button of readMoreBtns) {
    button.classList.add('read-more');
    button.classList.remove('large-text');
}



// find Attribute list from Tag
// setAttribute('href', 'https://google.com');
// getAttribute('id');
// getAttribute('href');