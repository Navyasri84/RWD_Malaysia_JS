function showContent(section) {
    let content = '';

    switch (section) {
        // cities section
        case 'Cities':
            content = `<h1>Cities</h1>
            <p>Explore the major cities in Malaysia, </p>
            
            <div class="row"> 
                <div class="column">
                    <img src="Images/img1.jpg" style="width:100%">
                    <figcaption>Kuala Lumpur</figcaption>

                    <img src="Images/img2.jpg" style="width:100%">
                    <figcaption>George Town</figcaption>

                    <img src="Images/img3.jpg" style="width:100%">
                    <figcaption>Malacca (Melaka)</figcaption>
                </div>
            
                <div class="column">
                    <img src="Images/img4.jpg" style="width:100%">
                    <figcaption>Johor Bahru</figcaption>

                    <img src="Images/img5.jpg" style="width:100%">
                    <figcaption>Kota Kinabalu</figcaption>

                    <img src="Images/img6.jpg" style="width:100%">
                    <figcaption>Kuching</figcaption>

                </div>

            </div>

            <p>Kuala Lumpur - The capital city and financial hub. 
            <br> George Town - The capital of the state of Penang, known for its historic sites and street food.
            <br> Malacca (Melaka) - Famous for its colonial history and cultural heritage.
            <br> Johor Bahru - A city located in southern Malaysia, close to Singapore.
            <br> Kota Kinabalu - The capital of the state of Sabah, known for its proximity to Mount Kinabalu.
            <br> Kuching - The capital of the state of Sarawak, known for its waterfront and wildlife.</p>`;

            break;

        // food section
        case 'Food':
            content = `<h2>The Famous Food</h2>
                
                       <p>Discover the diverse and delicious food options in Malaysia.</p>
            <div class="row"> 
                <div class="column">
                       <img src="Images/food_img1.jpg" alt="Food">
                       <figcaption>Mee goreng mamak</figcaption>

                       <img src="Images/food_img2.jpg" alt="Food">
                       <figcaption>Nasi kerabu</figcaption>

                       <img src="Images/food_img3.jpg" alt="Food">
                       <figcaption>Ayam percik (chicken with percik sauce)</figcaption>
                </div>

                <div class="column">
                       <img src="Images/food_img4.jpg" alt="Food">
                       <figcaption>Nasi lemak</figcaption>

                       <img src="Images/food_img5.jpg" alt="Food">
                       <figcaption>Roti john</figcaption>

                       <img src="Images/food_img6.jpg" alt="Food">
                       <figcaption>Nasi kandar</figcaption>
                </div>
            </div>`;
            break;


        case 'Travel and Attractions':
            content = `<h2>Travel and Attractions</h2>
                        <p>Find out about the top travel destinations and attractions in Malaysia.</p>

                       <div class="row"> 
                            <div class="column">
                                <img src="Images/travel_img1.jpg" alt="travel">
                                <figcaption>Petronas Twin Towers</figcaption>

                                <img src="Images/travel_img2.jpg" alt="travel">
                                <figcaption>Batu Caves</figcaption>

                                <img src="Images/travel_img3.jpg" alt="travel">
                                <figcaption>Taman Negara</figcaption>
                            </div>

                            <div class="column">
                                <img src="Images/travel_img4.jpg" alt="travel">
                                <figcaption>Langkawi</figcaption>

                                <img src="Images/travel_img5.jpg" alt="travel">
                                <figcaption>Cameron Highlands </figcaption>

                                <img src="Images/travel_img6.jpg" alt="travel">
                                <figcaption>Gunung Mulu National Park</figcaption>
                            </div>
                        </div>
                       
                       
                       <p>Petronas Twin Towers - Iconic skyscrapers in Kuala Lumpur.
                        <br> Batu Caves - Limestone hill with a series of caves and cave temples.
                        <br> Taman Negara - One of the world's oldest tropical rainforests.
                        <br> Langkawi - An archipelago known for its beaches and duty-free shopping.
                        <br> Cameron Highlands - A hill station known for its tea plantations and cool climate.
                        <br> Gunung Mulu National Park - Famous for its limestone karst formations, caves, and diverse ecosystems.
                        <br> Penang Hill - A hill resort comprising a group of peaks on Penang Island.</p>`;

            break;
        case 'Nature and Wildlife':
            content = `<h2>Nature and Wildlife</h2>
                        <p>Learn about Malaysia's rich natural beauty and wildlife.</p>
                        
                        <div class="row"> 
                            <div class="column">
                                <img src="Images/nature_img1.jpg" alt="nature">
                                <figcaption>Sepilok Orangutan Rehabilitation Centre </figcaption>

                                <img src="Images/nature_img2.jpg" alt="nature">
                                <figcaption>Kinabalu Park</figcaption>

                            </div>

                            <div class="column">
                                <img src="Images/nature_img3.jpg" alt="nature">
                                <figcaption>Bako National Park</figcaption>
                            
                                <img src="Images/nature_img4.jpg" alt="nature">
                                <figcaption>Turtle Islands National Park</figcaption>
                            </div>
                        </div>
                       
                        <p> Sepilok Orangutan Rehabilitation Centre - Located in Sabah, known for its work with orphaned and injured orangutans.
                        <br> Kinabalu Park - A UNESCO World Heritage site and home to Mount Kinabalu.
                        <br> Bako National Park - Known for its wildlife, including proboscis monkeys, in Sarawak.
                        <br> Turtle Islands National Park - Located in Sabah, known for its turtle conservation efforts.`;
            break;


        case 'Beaches and Islands':
            content = `<h2>Beaches and Islands</h2>
            <p>Enjoy the stunning beaches and beautiful islands of Malaysia.</p>

                       <div class="row"> 
                            <div class="column">
                                <img src="Images/beach_img1.jpg" alt="beach">
                                <figcaption>Perhentian Islands</figcaption>

                                <img src="Images/beach_img2.jpg" alt="beach">
                                <figcaption>Redang Island</figcaption>

                            </div>

                            <div class="column">
                                <img src="Images/beach_img3.jpg" alt="beach">
                                <figcaption>Tioman Island</figcaption>
                            
                                <img src="Images/beach_img4.jpg" alt="beach">
                                <figcaption>Sipadan Island</figcaption>
                            </div>
                        </div>
                       
                       
                       <p> Perhentian Islands - Popular for snorkeling, diving, and beaches.
                        <br> Redang Island - Known for its crystal-clear waters and marine life.
                        <br> Tioman Island - A duty-free island with great snorkeling and diving spots.
                        <br> Sipadan Island - One of the best diving spots in the world, located in Sabah.`;
            break;

        case 'Cultural and Historical Sites':
            content = `<h2>Cultural and Historical Sites</h2>
            <p>Explore Malaysia's cultural heritage and historical landmarks.</p>

                        <div class="row"> 
                            <div class="column">
                                <img src="Images/culture_img1.jpg" alt="culture">
                                <figcaption>A Famosa</figcaption>

                                <img src="Images/culture_img2.jpg" alt="culture">
                                <figcaption>Baba & Nyonya Heritage Museum</figcaption>

                            </div>

                            <div class="column">
                                <img src="Images/culture_img3.jpg" alt="culture">
                                <figcaption>Islamic Arts Museum</figcaption>
                            
                                <img src="Images/culture_img4.jpg" alt="culture">
                                <figcaption>Sultan Abdul Samad Building</figcaption>
                            </div>
                        </div>
                       
                       <p>A Famosa - A Portuguese fortress in Malacca.
                        <br> Baba & Nyonya Heritage Museum - A museum in Melaka showcasing Peranakan culture.
                        <br> Islamic Arts Museum Malaysia - Located in Kuala Lumpur, exhibiting Islamic art from around the world.
                        <br> Sultan Abdul Samad Building - A historical landmark in Kuala Lumpur.</p>`;
            break;


        case 'Adventure and Activities':
            content = `<h2>Adventure and Activities</h2>
            <p>Discover exciting adventures and activities in Malaysia.</p>
                       <div class="row"> 
                            <div class="column">
                                <img src="Images/adven_img1.jpg" alt="adven">
                                <figcaption>White Water Rafting</figcaption>

                                <img src="Images/adven_img2.jpg" alt="adven">
                                <figcaption>Scuba Diving</figcaption>

                            </div>

                            <div class="column">
                                <img src="Images/adven_img3.jpg" alt="adven">
                                <figcaption>Paragliding</figcaption>
                            
                                <img src="Images/adven_img4.jpg" alt="adven">
                                <figcaption>Caving</figcaption>
                            </div>
                        </div>
                       
                       <p>White Water Rafting - In areas like the Kampar River and Kiulu River.
                        <br> Scuba Diving - Particularly around Sipadan, Redang, and Perhentian Islands.
                        <br> Paragliding - In places like Kuala Kubu Bharu.
                        <br> Caving - In places like Mulu Caves and Batu Caves.</p>`;
            break;


        case 'Shopping and Markets':
            content = `<h2>Shopping and Markets</h2>
            <p>Experience the vibrant shopping scene and markets in Malaysia.</p>
                       <div class="row"> 
                            <div class="column">
                                <img src="Images/shop_img1.jpg" alt="shop">
                                <figcaption>Pavilion KL</figcaption>

                                <img src="Images/shop_img2.jpg" alt="shop">
                                <figcaption>Central Market</figcaption>

                            </div>

                            <div class="column">
                                <img src="Images/shop_img3.jpg" alt="shop">
                                <figcaption>Jonker Street Night Market</figcaption>
                            
                                <img src="Images/shop_img4.jpg" alt="shop">
                                <figcaption>Gurney Plaza</figcaption>
                            </div>
                        </div>


                       <p> Pavilion KL - A major shopping mall in Kuala Lumpur.
                        <br> Central Market - A cultural market in Kuala Lumpur offering local crafts and souvenirs.
                        <br> Jonker Street Night Market - A bustling night market in Melaka.
                        <br> Gurney Plaza - A shopping mall in Penang.</p>`;
            break;


        case 'Festivals and Events':
            content = `<h2>Festivals and Events</h2>
            <p>Join in on the various festivals and events happening throughout Malaysia.</p>
                        <div class="row"> 
                            <div class="column">
                                <img src="Images/fest_img1.jpg" alt="fest">
                                <figcaption>Thaipusam</figcaption>

                                <img src="Images/fest_img2.jpg" alt="fest">
                                <figcaption>Chinese New Year</figcaption>
                            </div>

                            <div class="column">
                                <img src="Images/fest_img3.jpg" alt="fest">
                                <figcaption>Hari Raya Aidilfitri</figcaption>
                            
                                <img src="Images/fest_img4.jpg" alt="fest">
                                <figcaption>Deepavali</figcaption>
                            </div>
                        </div>

                       <p> Thaipusam - A Hindu festival celebrated at Batu Caves.
                        <br> Chinese New Year - Celebrations are held across Malaysia, especially in Penang and Kuala Lumpur.
                        <br> Hari Raya Aidilfitri - The celebration marking the end of Ramadan.
                        <br> Deepavali - The Hindu festival of lights.</p>`;
            break;
        default:
            content = `<h2>Welcome to Malaysia</h2><p>Click on the menu items to see more information.</p>`;
            break;
    }

    document.getElementById('menuContent').innerHTML = content;
}