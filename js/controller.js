function addColor() {
    if (!model.themeInput) return;
    const theme = model.themeInput;    
    const themeCopy = JSON.parse(JSON.stringify(theme));
    model.themes.push(themeCopy);
    model.isAdding = false;
    model.themeInput = {
        fore: '',
        back: '',
        highlight: '',
        madeBy: '',
    };
    updateView();
}

function deleteTheme(index) {
    model.themes.splice(index, 1);
    updateView();
}

function startAdd() {
    model.isAdding = true;
    updateView();
}

function cancelAddColor() {
    model.isAdding = false;
    updateView();
}

function previewTheme(index){
    model.selectedThemeIndex = index;
    model.currentPage = 'preview';
    updateView();
}

function goTo(page){
    model.currentPage = page;
    updateView();
}
