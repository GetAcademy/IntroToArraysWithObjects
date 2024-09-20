function updateView() {
    if (model.currentPage == 'preview') updateViewPreview();
    else if (model.currentPage == 'terje') updateViewTerje();
    else updateViewMain();
}
function updateViewMain() {
    let html = '';
    for (let index = 0; index < model.themes.length; index++) {
        html += createThemeHtml(index);
    }

    document.getElementById('app').innerHTML = /*HTML*/`
        <h3>Farge-themes</h3>
        ${createAddColorHtml()}
        <hr/>
        <div class="colors">
            ${html}
        </div>
    `;
}

function updateViewTerje(){
    document.getElementById('app').innerHTML = /*HTML*/`
        <h1>Terje</h1>
        <button onclick="goTo()">Avslutt</button>
    `;
}

function updateViewPreview(){
    let theme = model.themes[model.selectedThemeIndex];
    document.getElementById('app').innerHTML = /*HTML*/`
        <div style="
                height: 95vh;
                color: ${theme.fore};
                background-color: ${theme.back};
            ">
            <h1 style="color: ${theme.highlight}">
                Forhåndsvisning av ${theme.back} - ${theme.fore} - ${theme.highlight} - laget av ${theme.madeBy}
            </h1>

            <h2 style="color: ${theme.highlight}">What is Lorem Ipsum?</h2>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled it to make a type 
            specimen book. It has survived not only five centuries, but also the leap into 
            electronic typesetting, remaining essentially unchanged. 

            <button onclick="goTo()">Avslutt</button>
            <button onclick="goTo('terje')">Gå til Terje-siden</button>
        </div>
    `;
}

function createThemeHtml(index) {
    let theme = model.themes[index];
    return /*HTML*/ `
            <div class="color">
                <div class="topBox">
                    <div>${theme.back} - ${theme.fore} - ${theme.highlight} - laget av ${theme.madeBy}</div>
                    <div>
                        <button onclick="previewTheme(${index})">Vis</button>
                        <button onclick="deleteTheme(${index})">x</button>
                    </div>
                </div>
                <div style="
                    background-color: ${theme.back};
                    color: ${theme.fore};
                    " class="box">
                    <span style="color: ${theme.highlight}">Eksempel-highlight</span>
                    Eksempel-tekst                
                </div>
            </div>                
        `;
}

function createAddColorHtml() {
    if (model.isAdding) {
        return /*HTML*/`
            Forgrunnsfarge:<br/>
            <input 
                type="text" 
                oninput="model.themeInput.fore=this.value" 
                value="${model.themeInput.fore ?? ''}"
                /><br/>
            Bakgrunnsfarge:<br/>
            <input 
                type="text" 
                oninput="model.themeInput.back=this.value" 
                value="${model.themeInput.back ?? ''}"
                /><br/>
            Fremhevingsfarge:<br/>
            <input 
                type="text" 
                oninput="model.themeInput.highlight=this.value" 
                value="${model.themeInput.highlight ?? ''}"
                /><br/>
            Laget av:<br/>
            <input 
                type="text" 
                oninput="model.themeInput.madeBy=this.value" 
                value="${model.themeInput.madeBy ?? ''}"
                /><br/>            

            <button onclick="addColor()">Legg til ny theme</button>
            <button onclick="cancelAddColor()">Avbryt</button>                
        `;
    } else {
        return /*HTML*/`
            <button onclick="startAdd()">+</button>
        `;
    }
}