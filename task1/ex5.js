const fs = require('fs');

const rawData = fs.readFileSync('earthquake_data.json'); 

const earthquakeData = JSON.parse(rawData);


function frequent_country(data) {
    const counts = {};

    data.forEach(record => {
        counts[record.country] = (counts[record.country] || 0) + 1;
    });

    let frequent_country = '';
    let max_count = 0;

    for (const country in counts) {
        if (counts[country] > max_count) {
            frequent_country = country;
            max_count = counts[country];
        }
    }

    return frequent_country;
}

function highest_magnitude(data) {
    let highest = data[0];


    data.forEach(record => {
        if (record.magnitude > highest.magnitude) {
            highest = record;
        }
    });

    return {
        country: highest.country,
        magnitude: highest.magnitude,
        date: highest.date
    };
}


function total_records(data) {
    return data.length;
}

console.log("Frequent country having earthquakes:", frequent_country(earthquakeData)); 
console.log("Highest magnitude in:", highest_magnitude(earthquakeData)); 
console.log("Total records:", total_records(earthquakeData));
