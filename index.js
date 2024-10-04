const loadAllPhones = async (status, brandName) => {
    document.getElementById('spinner').style.display = 'none';
    const searchText = document.getElementById('search-box').value;
    // console.log(searchText);

    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${brandName ? brandName : "iphone"}`)
    const data = await res.json()
    console.log(data);
    // displayAllPhones(data.data)
    // displayAllPhones(data.data.slice(0, 6));

    if (status) {
        displayAllPhones(data.data)
    }
    else {
        displayAllPhones(data.data.slice(0, 6))
    }
}

const displayAllPhones = (phones) => {
    console.log(phones);
    const phoneContainer = document.getElementById('showPhoneArea');
    phoneContainer.innerHTML = ""
    for (const phone of phones) {
        const { brand, slug, image, phone_name } = phone
        const div = document.createElement('div')
        div.classList = "bg-gray-200 p-4 text-black rounded-xl"
        div.innerHTML = `
        <div class="flex justify-center mb-2"><img src="${image}" /></div>
        <h2 class="font-bold">${phone_name}</h2>
        <p>${slug}<p/>

        `
        phoneContainer.append(div)
    }
}

// show all button
const handleShowAll = () => {
    loadAllPhones(true)
}


// search button
const handleSearch = () => {
    document.getElementById('spinner').style.display = 'block';
    // get search input value
    const searchText = document.getElementById('search-box').value;


    setTimeout(() => {
        loadAllPhones(false, searchText)
    }, 1000);
}


loadAllPhones(false, "iphone")