const Card_Data = [
    {
        id: '1',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/sari/u/2/k/free-3904s476j-siril-unstitched-original-imah4fq9fw33ztse.jpeg?q=70',
        name: 'Dyed, Embellished Bollywood Georgette Saree  (Light Blue)',
        price: '₹500',
        oldprice:'₹700',
        discount:'29% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.9',
        reviewscount:'1000+ Reviews',
        description: ''
    },
    {
        id: '2',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/a/y/b/s-3813-the-dry-state-original-imahfu4hjqyhcxmr.jpeg?q=70', // Placeholder image
        name: 'Women Printed Round Neck Pure Cotton Multicolor T-Shirt',
        price: '₹200',
        oldprice:'₹250',
        discount:'20% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.3',
        reviewscount:'500+ Reviews',
        description: ''
    },
    {
        id: '3',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/shirt/s/a/p/s-satin12-deemoon-original-imah7uyzhgahtzpd.jpeg?q=70',
        name: 'Men Regular Fit Solid Button Down Collar Formal Shirt',
        price: '₹300',
        oldprice:'₹499',
        discount:'20% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.2',
        reviewscount:'1000+ Reviews',
        description: ''
    },
    {
        id: '4',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/jean/n/8/3/28-twz-ice-baggy-tweezers-original-imah75acdxxucczb.jpeg?q=70',
        name: 'Men Loose Fit Mid Rise Light Blue Jeans',
        price: '₹400',
        oldprice:'₹515',
        discount:'23% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'3.9',
        reviewscount:'5000+ Reviews',
        description: ''
    },
    {
        id: '5',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/kids-ethnic-set/6/b/h/1-2-years-white-flower-waistcoat-set-rvson-original-imah5xyhywrfpdpf.jpeg?q=70',
        name: 'Boys Festive & Party Kurta, Waistcoat and Pyjama Set',
        price: '₹550',
        oldprice:'₹600', // Default value
        discount:'8% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'5.0',
        reviewscount:'8000+ Reviews',
        description: ''
    },
    {
        id: '6',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/9/0/p/rock-car-spring-wheels-1-20-scale-remote-control-black-original-imah9ccpzets8hxz.jpeg?q=70',
        name: 'CADDLE & TOES Rock Car , Spring wheels ,1:20 scale,Remote control',
        price: '₹614',
        oldprice:'₹630',
        discount:'3% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.5',
        reviewscount:'400+ Reviews',
        description: ''
    },
    {
        id: '7',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/bedsheet/r/y/r/amr-120-1-amr-120-flat-amrange-original-imagg9hhpnkpwgbw.jpeg?q=70',
        name: 'Amrange 210 TC Cotton King 3D Printed Flat Bedsheet',
        price: '₹123',
        oldprice:'₹200',
        discount:'40% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.8',
        reviewscount:'1000+ Reviews',
        description: ''
    },
    {
        id: '8',
        image: 'https://rukminim2.flixcart.com/image/612/612/l1xwqkw0/pendant-locket/g/x/n/-original-imagde4vvyvafxt8.jpeg?q=70',
        name: "Friend's Heart Pendant",
        price: '₹143',
        oldprice:'₹200',
        discount:'30% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.9',
        reviewscount:'9000+ Reviews',
        description: ''
    },
    {
        id: '9',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/table-clock/l/z/n/led-display-digital-rainbow-clock-with-remote-control-120-led-original-imah7sjzyhhegvjq.jpeg?q=70',
        name: 'AADGEX Digital Multicolor Clock',
        price: '₹240',
        oldprice:'₹300',
        discount:'20% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'3.5',
        reviewscount:'100+ Reviews',
        description: ''
    },
    {
        id: '10',
        image: 'https://rukminim2.flixcart.com/image/612/612/xif0q/ball/t/f/w/420-470-storm-football-size-5-5-68-1-32-football-nivia-original-imah8epbhb4qyfpw.jpeg?q=70',
        name: 'NIVIA Storm with Pump Football ',
        price: '₹700',
        oldprice:'₹1000',
        discount:'30% off',
        Ratingicon:'https://i.ibb.co/cSDFFtyY/star.png',
        starrating:'4.9',
        reviewscount:'1500+ Reviews',
        description: ''
    }
];


const card_container = document.getElementById('cards-container');
Card_Data.forEach((products)=>{

    const card = document.createElement('div')
    card.classList.add('multiple-Cards')
    card_container.appendChild(card)


    const images = document.createElement('img')
    images.classList.add('product-images')
    images.src = products.image
    card.appendChild(images)


    const childcard = document.createElement('div')
    childcard.classList.add('child-Cards')
    card.appendChild(childcard)

    const name = document.createElement('h4')
    name.classList.add('product-name')
    name.textContent = products.name
    childcard.appendChild(name)

    const price = document.createElement('p')
    price.classList.add('product-price')
    price.textContent = products.price
    childcard.appendChild(price)

    const delprice = document.createElement('del')
    delprice.classList.add('old-price')
    delprice.textContent = products.oldprice
    price.appendChild(delprice)

    const discount = document.createElement('span')
    discount.classList.add('price-discount')
    discount.textContent = products.discount
    price.appendChild(discount)


    const fullReview=document.createElement('div')
    fullReview.classList.add('product-Review')
    childcard.appendChild(fullReview)


    const starrating=document.createElement('div')
    starrating.classList.add('starRating')
    fullReview.appendChild(starrating)

    const ratings = document.createElement('p')
    ratings.classList.add('product-ratings')
    ratings.textContent = products.starrating
    starrating.appendChild(ratings)

    const rateicon = document.createElement('img')
    rateicon.classList.add('rating-image')
    rateicon.src = products.Ratingicon
    ratings.appendChild(rateicon)

    const review = document.createElement('span')
    review.classList.add('product-reviews-count')
    review.textContent = products.reviewscount
    fullReview.appendChild(review)
})