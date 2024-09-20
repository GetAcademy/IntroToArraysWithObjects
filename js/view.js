function updateView() {
    document.getElementById('app').innerHTML = /*HTML*/`
        ${createAddColorThemeHtml()}
        ${model.creatorFilter == null ? '' : /*HTML*/`
            <button onclick="filterByCreator(null)">fjern filter</button>
        `}
        <div class="colors">
            ${createColorThemesHtml()}
        </div>
    `;
}

function createAddColorThemeHtml() {
    if (!model.isAdding) return '<button onclick="startAdd()">+</button>';
    return /*HTML*/`
        Forgrunnsfarge:
        <input 
            type="text" 
            oninput="model.foregroundColor=this.value"
            value="${model.foregroundColor ?? ''}"
            />
        <br/>
        Bakgrunnsfarge:
        <input 
            type="text" 
            oninput="model.backgroundColor=this.value"
            value="${model.backgroundColor ?? ''}"
            />
        <br/>
        Uthevingsfarge:
        <input 
            type="text" 
            oninput="model.backgroundColor=this.value"
            value="${model.backgroundColor ?? ''}"
            />
        <br/>
        Laget av:
        <input 
            type="text" 
            oninput="model.creator=this.value"
            value="${model.creator ?? ''}"
            />
        <br/>
        Rating:
        <input 
            type="number" 
            min="0.0"
            max="6.0"
            step="0.1";
            oninput="model.rating=this.value"
            value="${model.rating ?? ''}"
            />
        <br/>


        <button onclick="addColor()">Legg til ny farge</button>
        <button onclick="cancelAddColor()">Avbryt</button>              
    `;
}

function createColorThemesHtml() {
    let colorsHtml = '';

    // in - gå gjennom alle feltene til et objekt
    // of - gå gjennom elementer i en liste

    for (let i = 0; i < model.colorThemes.length; i++) {
        let colorTheme = model.colorThemes[i];
        if (model.creatorFilter != null 
            && model.creatorFilter != colorTheme.creator) continue;
        colorsHtml += /*HTML*/`
            <div class="color">
                <div class="topBox">
                    <div>
                        Theme ${i + 1}
                    </div>
                    <button onclick="deleteColor(${i})">x</button>
                </div>
                <div 
                    style="
                        background-color: ${colorTheme.backgroundColor};
                        color: ${colorTheme.foregroundColor};
                        " 
                    class="box">
                    
                    Rating: ${colorTheme.rating}                     
                    Laget av: <a href="javascript:filterByCreator('${colorTheme.creator}')">${colorTheme.creator}</a>
                    <span style="color: ${colorTheme.highlightColor}">
                        Utheving
                    </span>
                </div>
            </div>                                
        `;
    }
    return colorsHtml;
}