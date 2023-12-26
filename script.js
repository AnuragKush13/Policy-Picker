
const dataArray = [
    { id: 1, name: 'Item 1', deductible_price: '33456.56' },
    { id: 2, name: 'Item 2', deductible_price: '43466.25'  },
    { id: 3, name: 'Item 3', deductible_price: '21543.53'  },
    // Add more items as needed
];


function renderList() {
    const container = document.getElementById('container-new'); 

    const divElements = dataArray.map(item => {
        return `
        <div class="insurance-container" id = "insurance-id" data-id="${item.id}">
        
        <div class="insurance-logo">
            <img src = "images/logo.png" class = "insurance-logo-img">
        </div>
        <div class="insurance-coverage">
            <div class="coverage-header-div">
                <h4>Insurance Coverage</h4>
            <div class="show-all-tab">
                <img src = "images/visible.png" class = "tab-logo">
                <p>Show All</p>
            </div>
            </div>
            
            <div class="coverage-internal-div">
                <div class="left-coverage-div">
                    <p class = "tile-tag">Free</p>
                    <ul>
                        <li>🗸 ddfdfvdfv</li>
                        <li>🗸 dsjd ,acjk sdidjddfdfvdfv</li>
                        <li>🗸 ddfd qwquh aa id zdkjh fvdfv</li>
                        <li>🗸 df ddf aa drgr ddfgd ddfdfvdfv</li>
                    </ul>
            </div>
            <div class="right-coverage-div">
                <p class = "tile-tag">Paid</p>
                <ul>
                    <li>
                        <input type = "checkbox" id = "option1" name  = "dsfs" value = "1">
                        <label for = "option1">sdf jwlkd q qwoejid qlas</label>
                    </li>
                    <li>
                        <input type = "checkbox" id = "option2" name = "asdq " value = "2">
                        <label for = "option1">sdf jwlkd q qwoejid qlas</label>
                    </li>
                    <li>
                        <input type = "checkbox" id = "option3" name = "sds" value = "3">
                        <label for = "option3">sdf jwlkdsdf ew w dwdw q qwoejid qlas</label>
                    </li>
                </ul>
            </div>
            </div>
            
            
        </div>
        <div class="insurance-price">
            <div class="price-header">
                <h4>Insurance Price</h4>
            </div>
            
            
            <div class="deductible"><p >Deductible</p> <button class = "question-tool">?</button></div>
            
            <select name = "dropdowns" id = "deductible-price">
                <option value="2000">2000.00</option>
                <option value = "4000">4000.00</option>
                <option value = "6000">6000.00</option>
            </select>
            <p class = "price-text">${item.deductible_price} SAR</p>
            <p class = "price-add-text">+500.12 SAR(VAT)</p>
            <button class ="btn">Select</button>
        
        </div>

   
    </div>
        `;
    });

    container.innerHTML = divElements.join('');
}


renderList();
