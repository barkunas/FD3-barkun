var data = [
    {
        Name: "Caffè Americano",
        Price: 2.85,
        URL: "27de6f3e-2fa2-4f76-bb04-263ab13ad9aa",
        Quantity: 200
    }, {
        Name: "Blonde Roast",
        Price: 2.45,
        URL: "aedc77c9-e713-45b6-963a-2349ae4c77f7",
        Quantity: 100
    }, {
        Name: "Caffè Misto",
        Price: 3.25,
        URL: "66a1eebb-ef06-4e37-8906-74588d64aa18",
        Quantity: 200
    }, {
        Name: "Featured Starbucks® Dark Roast Coffee",
        Price: 2.45,
        URL: "300de9d9-0a7b-434e-b224-ac53cc94d54a",
        Quantity: 30
    }, {
        Name: "Starbucks® Blonde Cappuccino",
        Price: 4.15,
        URL: "9fbc7101-6a46-44c2-a25f-19a049389ba1",
        Quantity: 2
    },
];


ReactDOM.render(
    React.createElement(Shop, { data: data }),
    document.getElementById('container')
);

