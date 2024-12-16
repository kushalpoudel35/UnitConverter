document.getElementById('unit').addEventListener('change', function () {
    const unitType = this.value;

    // Hide all conversion sections
    document.getElementById('length-options').style.display = unitType === 'length' ? 'block' : 'none';
    document.getElementById('mass-options').style.display = unitType === 'mass' ? 'block' : 'none';
    document.getElementById('medical-options').style.display = unitType === 'medical' ? 'block' : 'none';
});

document.getElementById('convert-btn').addEventListener('click', function () {
    const unitType = document.getElementById('unit').value;
    let result;

    if (unitType === 'length') {
        const value = parseFloat(document.getElementById('length-input').value);
        const conversion = document.getElementById('length-unit').value;

        if (conversion === 'meters-to-feet') {
            result = (value * 3.28084).toFixed(2) + ' feet';
        } else if (conversion === 'feet-to-meters') {
            result = (value / 3.28084).toFixed(2) + ' meters';
        }
    } else if (unitType === 'mass') {
        const value = parseFloat(document.getElementById('mass-input').value);
        const conversion = document.getElementById('mass-unit').value;

        if (conversion === 'kg-to-lb') {
            result = (value * 2.20462).toFixed(2) + ' pounds';
        } else if (conversion === 'lb-to-kg') {
            result = (value / 2.20462).toFixed(2) + ' kilograms';
        }
    } else if (unitType === 'medical') {
        const value = parseFloat(document.getElementById('medical-input').value);
        const conversion = document.getElementById('medical-unit').value;

        // Medical Unit Conversions
        switch (conversion) {
            case 'glucose-mmol-to-mg':
                result = (value * 18).toFixed(2) + ' mg/dL';
                break;
            case 'glucose-mg-to-mmol':
                result = (value / 18).toFixed(2) + ' mmol/L';
                break;
            case 'urea-mmol-to-mg':
                result = (value * 6).toFixed(2) + ' mg/dL';
                break;
            case 'urea-mg-to-mmol':
                result = (value / 6).toFixed(2) + ' mmol/L';
                break;
            case 'creatinine-micromol-to-mg':
                result = (value / 88.4).toFixed(2) + ' mg/dL';
                break;
            case 'creatinine-mg-to-micromol':
                result = (value * 88.4).toFixed(2) + ' µmol/L';
                break;
            case 'bilirubin-micromol-to-mg':
                result = (value / 17.1).toFixed(2) + ' mg/dL';
                break;
            case 'bilirubin-mg-to-micromol':
                result = (value * 17.1).toFixed(2) + ' µmol/L';
                break;
            default:
                result = 'Invalid conversion selected';
        }
    }

    document.getElementById('result').textContent = `Result: ${result}`;
});
